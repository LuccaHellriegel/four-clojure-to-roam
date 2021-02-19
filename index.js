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
	const temp = fullDescription
		.split("Special Restrictions")
		.map((s) => s.trim())
		.map((s) =>
			s
				.split("\n")
				.map((s) => s.trim())
				.map((s) => s.replace(new RegExp("  ", "g"), " "))
				.map((s) => s.replace(new RegExp("\t", "g"), " "))
				.filter((s) => s !== "")
		);

	const restrictions = temp[1];

	const code = [];
	const desc = [];
	for (let s of temp[0]) {
		if (s[0] === "(" && s[s.length - 1] === ")") {
			code.push(s);
		} else {
			desc.push(s);
		}
	}
	return { code, desc, restrictions };
};

const getProblemDescription = async (page) => splitDescription(await getInnerTextOfElementById("prob-desc", page));

const getBuiltInSyntax = async (page) => {
	const selector = "span.cm-builtin";
	await page.waitForSelector(selector);
	let temp = await page.$$(selector);
	temp = await Promise.all(temp.map((handler) => handler.evaluate((s) => s.innerText)));
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
	fs.writeFileSync("./problems.js", JSON.stringify(contents));
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
	}

	browser.close();

	console.log(pageObjects.length);

	saveProblems(pageObjects);
};

const problems = require("./problems");

// TODO: structure the whole problem inside the clojure-code-block so I can display it via sr

// TODO: write "What belongs at _?" -> testcases!

// TODO: built runtime checks if the data is valid, I dont want to check the whole markdown file

// TODO: check how the markdown formatting of code is with regards to newlines and tabs and spaces

// TODO:
// make query in the beginning for all problems without a solved tag and with one, also tag each problem with #4clojureProblem

// TODO: make tags for learned and not learned syntax
// pre-make questions and make a query of unfinishedprompts
// What is the signature of this function? #UnfinishedPrompt
// What does this function do?

// TODO get all classes of the object inside the lines
// built in I can use for making a todo-list of syntax
// make it like [] understand syntax of "*"
// What does (* ...) do? and what are is its signature?

// But need to filter syntax from lower problems, so its not repeated!
// need to catch URLs in the description
// need to catch "restrictions" -> "Special Restrictions"
// -> but I need only the li-elements
// option to add #sr tags?
// parse tags-table to blocks
