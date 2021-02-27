const fs = require("fs");
const puppeteer = require("puppeteer");

const startBrowser = async () => {
	let browser;
	try {
		console.log("Opening the browser......");
		browser = await puppeteer.launch({
			args: ["--disable-setuid-sandbox"],
			ignoreHTTPSErrors: true,
			headless: true,
		});
	} catch (err) {
		console.log("Could not create a browser instance => : ", err);
	}
	return browser;
};

const navigateToURL = async (browser, url) => {
	const page = await browser.newPage();
	console.log(`Navigating to ${url}...`);
	await page.goto(url);
	return page;
};

const getInnerTextOfElementById = async (id, page) => {
	await page.waitForSelector("#" + id);
	let temp = await page.$("#" + id);
	temp = await temp.evaluate((node) => node.innerText);
	return temp;
};

const getTitle = async (page) => await getInnerTextOfElementById("prob-title", page);

const getTags = async (page) => {
	const fullTags = await getInnerTextOfElementById("tags", page);

	return fullTags
		.split("\n")
		.map((s) => s.trim())
		.map((s) => s.replace(new RegExp("  ", "g"), " "))
		.map((s) => s.replace(new RegExp("\t", "g"), " "))
		.filter((s) => s !== "");
};

const splitDescription = (fullDescription) => {
	const temp = fullDescription.split("Special Restrictions").map((s) => s.trim());

	const restrictions = temp[1];

	// TODO: in some cases we have \n( in the description because there is an example
	const separatorIndex = temp[0].indexOf("\n(");

	const desc = temp[0].slice(0, separatorIndex).trim();
	const code = temp[0].slice(separatorIndex).trim();

	return { code, desc, restrictions };
};

const getProblemDescription = async (page) => splitDescription(await getInnerTextOfElementById("prob-desc", page));

const getBuiltInSyntax = async (page) => {
	const selector = "span.cm-builtin";
	let temp;
	try {
		await page.waitForSelector(selector, { timeout: 5000 });
		temp = await page.$$(selector);
		temp = await Promise.all(temp.map((handler) => handler.evaluate((s) => s.innerText)));
	} catch (error) {
		return undefined;
	}

	return Array.from(new Set(temp));
};

const getProblemContent = async (page) => {
	let content = {};

	content.title = await getTitle(page);
	content.tags = await getTags(page);

	const fullDescription = await getProblemDescription(page);
	content = { ...content, ...fullDescription };

	content.syntax = await getBuiltInSyntax(page);

	return content;
};

const scrapeProblemPage = async (browser, url) => {
	const page = await navigateToURL(browser, url);

	let content;
	try {
		content = await getProblemContent(page);
	} catch (error) {
		content = error;
	}

	await page.close();
	console.log("Done scraping " + url);

	return content;
};

const range = (start, end) => {
	return Array(end - start + 1)
		.fill()
		.map((_, idx) => start + idx);
};

const problemRangeURLs = (start, end) => {
	return range(start, end).map((num) => {
		return { url: `https://www.4clojure.com/problem/${num}`, number: num };
	});
};

const saveProblems = (contents) => {
	fs.writeFileSync("./original-problems.js", JSON.stringify(contents));
};

const problemCount = 156;

const problemURLS = problemRangeURLs(1, problemCount);

const scrapeFourClojure = async () => {
	const browser = await startBrowser();
	const pageObjects = [];
	for (let urlObj of problemURLS) {
		// one page at a time to not overload my computer with tabs
		// could be speed up by reducing the timeouts on the waitForSelectors
		const content = await scrapeProblemPage(browser, urlObj.url);
		if (content) pageObjects.push({ content, ...urlObj });
		sleep(2000);
	}

	browser.close();

	console.log(pageObjects.length);

	fs.writeFileSync("./original-problems.js", JSON.stringify(pageObjects));
};

const filterTimeoutProblems = (problems) => problems.filter((problem) => !problem.content.name);

const rescrapeTimeouts = async () => {
	const urlObjects = require("./data/problems")
		.filter((problem) => filterTimeoutProblems(problem))
		.map((problem) => {
			return { url: problem.url, number: problem.number };
		});

	const browser = await startBrowser();
	const pageObjects = [];
	for (let urlObj of urlObjects) {
		// one page at a time to not overload my computer with tabs
		// could be speed up by reducing the timeouts on the waitForSelectors
		const content = await scrapeProblemPage(browser, urlObj.url);
		if (content) pageObjects.push({ content, ...urlObj });
		sleep(2000);
	}

	browser.close();

	console.log(pageObjects.length);

	fs.writeFileSync("./timeout-problems.js", JSON.stringify(pageObjects));
};

const merge = () => {
	const problems = filterTimeoutProblems(require("./data/original-problems"));
	const withoutSyntax = require("./data/timeout-problems");

	const res = problems.concat(withoutSyntax).sort((probA, probB) => probA.number - probB.number);
	fs.writeFileSync("./problems.js", "const problems = " + JSON.stringify(res) + "\nmodule.exports = problems;");
};

const removeTimeoutProblems = () => {
	const problems = require("./data/original-problems");
	const res = filterTimeoutProblems(problems);

	fs.writeFileSync("./problems.js", "const problems = " + JSON.stringify(res) + "\nmodule.exports = problems;");
};
