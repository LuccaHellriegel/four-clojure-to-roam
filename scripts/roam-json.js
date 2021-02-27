const nanoid = require("nanoid").nanoid;

const toRoamBlock = ({
	str = "",
	children = undefined,
	email = undefined,
	time = new Date().getTime(),
	uid = nanoid(11),
}) => {
	return {
		"edit-time:": time,
		"edit-email": email,
		uid: uid,
		string: str,
		children: children,
	};
};

const strToRoamBlock = (str) => toRoamBlock({ str });

const strArrToRoamBlocks = (strArr) => strArr.map((str) => strToRoamBlock(str));

const toCodeString = ({ code, lang }) => {
	// using this so this function can be pasted into Roam
	// without breaking the code-formatting in Roam.
	// meta!
	const temp = "``";
	return temp + "`" + lang + "\n" + code + temp + "`";
};

const toClojureCodeString = (code) => toCodeString({ code, lang: "clojure" });

const strToClojureCodeBlock = (str) => strToRoamBlock(toClojureCodeString(str));

const toRoamPage = ({
	title,
	children = undefined,
	email = undefined,
	time = new Date().getTime(),
	uid = nanoid(11),
}) => {
	return {
		"create-email": email,
		"create-time": time,
		"edit-time:": time,
		"edit-email": email,
		uid: uid,
		children: children,
		title: title,
	};
};

module.exports = {
	toRoamBlock,
	toRoamPage,
	toCodeString,
	strToRoamBlock,
	strArrToRoamBlocks,
	strToClojureCodeBlock,
};
