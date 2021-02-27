const fs = require("fs");
const { nanoid } = require("nanoid");
const { toRoamBlock, strToRoamBlock, strArrToRoamBlocks, strToClojureCodeBlock } = require("./roam-json");

// *** BLOCK AND PAGE GENERATION ***

const urlBlock = (url) => strToRoamBlock("**URL:** " + url);

const tagBlocks = (tags) => toRoamBlock({ str: "**Problem-Tags**:", children: strArrToRoamBlocks(tags) });

const syntaxBlock = (syntaxArr) =>
	toRoamBlock({
		str: "**Syntax**:",
		children: syntaxArr.map((syntax) => strToClojureCodeBlock("(" + syntax + " ...)")),
	});

const containsPointNotAtEnd = (str) => str.includes(".") && str.indexOf(".") != str.length - 1;

// split sentences in the strs and add them at the same position into the arr
const splitContainedSentences = (lines) => {
	let res = [];
	for (let line of lines) {
		if (containsPointNotAtEnd(line)) {
			res = res.concat(
				line
					.split(".")
					.filter((s) => s !== "")
					.map((s) => (s + ".").trim())
			);

			res.push("");
		} else {
			res.push(line);
		}
	}

	if (res[res.length - 1] == "") {
		res = res.slice(0, res.length - 1);
	}

	return res;
};

const linesToClojureComment = (linesStr) =>
	linesStr
		.split("\n")
		.map((d) => "; " + d)
		.join("\n");

// I include everything in the code-block so we can use roamsr to display that block
// currently it only can display one block as a question
const contentToClojureCodeBlock = (content) => {
	const splitted = content.desc.split("\n");

	// Because Roams-code-blocks are a little small, we split each description line into sentence-lines
	const desc = splitContainedSentences(splitted);

	return strToClojureCodeBlock(
		desc.map((d) => "; " + d).join("\n") +
			"\n\n" +
			(content.restrictions ? "; Special Restrictions:\n" + linesToClojureComment(content.restrictions) + "\n\n" : "") +
			content.code
	);
};

const problemDescriptionBlock = (content) =>
	toRoamBlock({ str: "**Problem:**", children: [contentToClojureCodeBlock(content)] });

// filter out all the tags without values (just contains tagName:)
const filterTags = (tags) => tags.filter((tag) => !tag.trim().endsWith(":"));

const problemToPageChildren = (prob) => {
	const result = [strToRoamBlock("**Title:** " + prob.content.title), urlBlock(prob.url)];
	if (prob.content.tags && prob.content.tags) {
		const filteredTags = filterTags(prob.content.tags);
		if (filteredTags.length !== 0) {
			result.push(tagBlocks(filteredTags));
		}
	}

	if (prob.content.syntax) {
		result.push(syntaxBlock(prob.content.syntax));
	}

	result.push(problemDescriptionBlock(prob.content));

	return result;
};

const problemToTitle = (problem) => "4clojure - Problem " + problem.number;

const problemToRoamPage = (problem) => {
	return {
		"create-time": new Date().getTime(),
		"edit-time:": new Date().getTime(),
		uid: nanoid(11),
		children: problemToPageChildren(problem),
		title: problemToTitle(problem),
	};
};

const problemsRoamPage = (problems) => {
	return {
		"create-time": new Date().getTime(),
		"edit-time:": new Date().getTime(),
		uid: nanoid(11),
		children: [
			toRoamBlock({
				str: "**Problems:**",
				children: problems.map((prob) => {
					return strToRoamBlock("[[" + problemToTitle(prob) + "]]");
				}),
			}),
		],
		title: "4clojure - Problems",
	};
};

// ** GENERATING THE JSON **

const getAllSyntaxArrs = (problems) => {
	return problems
		.filter((problem) => problem.content.syntax)
		.map((problem) => {
			return { syntax: problem.content.syntax, number: problem.number };
		});
};

const filterNotCoveredSyntax = (problem, syntaxObjs) => {
	const result = [];
	const syntax = problem.content.syntax;
	const number = problem.number;
	for (let syn of syntax) {
		// we filter out syntax that is already present in lower-numbered problems
		if (!syntaxObjs.some((syntaxObj) => syntaxObj.number < number && syntaxObj.syntax.includes(syn))) {
			result.push(syn);
		}
	}
	return result;
};

const removeDuplicateSyntax = (problems) => {
	const syntaxObjs = getAllSyntaxArrs(problems);
	return problems.map((problem) => {
		if (!problem.content.syntax) return problem;
		const uniqueSyntax = filterNotCoveredSyntax(problem, syntaxObjs);
		return { ...problem, content: { ...problem.content, syntax: uniqueSyntax.length == 0 ? undefined : uniqueSyntax } };
	});
};

const generateVanillaJSON = () => {
	const problems = removeDuplicateSyntax(require("./data/problems"));
	fs.writeFileSync(
		"../out/vanilla.json",
		JSON.stringify([problemsRoamPage(problems), ...problems.map((problem) => problemToRoamPage(problem))])
	);
};

generateVanillaJSON();
