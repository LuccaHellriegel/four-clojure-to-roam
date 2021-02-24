const fs = require("fs");
const nanoid = require("nanoid").nanoid;

const problems = require("./problems");

const emailPlaceholder = "$emailPlaceholder";

const toBlock = (str, email) => {
	return {
		"edit-time:": new Date().getTime(),
		// "edit-email": email,
		uid: nanoid(11),
		string: str,
	};
};

const urlBlock = (url) => toBlock("**URL:** " + url, emailPlaceholder);
const tagBlock = (tags) => {
	return {
		...toBlock("**Problem-Tags**:", emailPlaceholder),
		children: tags.map((tag) => toBlock(tag, emailPlaceholder)),
	};
};
const syntaxBlock = (syntaxArr) => {
	return {
		...toBlock("**Syntax**:", emailPlaceholder),
		children: syntaxArr.map((syntax) => toBlock("```clojure\n(" + syntax + " ...)```", emailPlaceholder)),
	};
};

// I include everything in the code-block so we can use roamsr to display that block
// currently it only can display one block as a question
const toClojureCodeString = (content) => {
	const splitted = content.desc.split("\n");

	// Because Roams-code-blocks are a little small, we split each description line into sentence-lines
	const desc = splitted.reduce((prev, cur, index) => {
		if (cur.includes(".") && cur.indexOf(".") != cur.length - 1) {
			let res = prev.concat(
				cur
					.split(".")
					.filter((s) => s !== "")
					.map((s) => (s + ".").trim())
			);
			if (index !== splitted.length - 1) {
				res.push("");
			}
			return res;
		} else {
			prev.push(cur);
		}
		return prev;
	}, []);

	return (
		"```clojure\n" +
		desc.map((d) => "; " + d).join("\n") +
		"\n\n" +
		(content.restrictions
			? "; Special Restrictions:\n" +
			  content.restrictions
					.split("\n")
					.map((d) => "; " + d)
					.join("\n") +
			  "\n\n"
			: "") +
		content.code +
		"```"
	);
};

const problemDescriptionBlock = (content) => {
	return { ...toBlock("**Problem:**"), children: [toBlock(toClojureCodeString(content), emailPlaceholder)] };
};

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

// filter out all the tags without values (just contains tagName:)
const filterTags = (tags) => tags.filter((tag) => !tag.trim().endsWith(":"));

const problemToPageChildren = (prob) => {
	const result = [urlBlock(prob.url)];
	if (prob.content.tags && prob.content.tags) {
		const filteredTags = filterTags(prob.content.tags);
		if (filteredTags.length !== 0) {
			result.push(tagBlock(filteredTags));
		}
	}

	if (prob.content.syntax) {
		result.push(syntaxBlock(prob.content.syntax));
	}

	result.push(problemDescriptionBlock(prob.content));

	return result;
};

const problemToTitle = (problem) => "4clojure - Problem " + problem.number;

const saveProblemsEnriched = (problems) => {
	const enchrichedProblems = removeDuplicateSyntax(problems).map((prob) => {
		return {
			...prob,
			roamPageData: {
				// "create-email": emailPlaceholder,
				"create-time": new Date().getTime(),
				"edit-time:": new Date().getTime(),
				// "edit-email": emailPlaceholder,
				uid: nanoid(11),
				children: problemToPageChildren(prob),
				title: problemToTitle(prob),
			},
		};
	});
	fs.writeFileSync(
		"./enriched-problems.js",
		"const enrichedProblems = " + JSON.stringify(enchrichedProblems) + "\nmodule.exports = enrichedProblems;"
	);
};
saveProblemsEnriched(problems);

const enrichedProblems = require("./enriched-problems");

const enrichedToRoamJSON = (enrichedProblem) => {
	return enrichedProblem.roamPageData;
};

const problemsPage = (savedProblems) => {
	return {
		"create-time": new Date().getTime(),
		"edit-time:": new Date().getTime(),
		uid: nanoid(11),
		children: [
			{
				...toBlock("**Problems:**"),
				children: savedProblems.map((prob) => {
					return toBlock("[[" + problemToTitle(prob) + "]]");
				}),
			},
		],
		title: "4clojure - Problems",
	};
	// list of problem pages with TODO
	// unfinished problems query
};

const createVanillaJSON = () => {
	fs.writeFileSync(
		"./vanilla.json",
		JSON.stringify([problemsPage(problems), ...enrichedProblems.map((problem) => enrichedToRoamJSON(problem))])
	);
};

// TODO: make field to set format of problem pages, can use $TITLE $NUMBER

// TODO: Make github page so everyone can input their own email and download it

// TODO: write "What belongs at _?" -> testcases!

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
