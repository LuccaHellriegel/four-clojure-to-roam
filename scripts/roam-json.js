const nanoid = require("nanoid").nanoid;

const toRoamBlock = ({ str, children, email, time, uid }) => {
	return {
		"edit-time:": time ? time : new Date().getTime(),
		"edit-email": email ? email : undefined,
		uid: uid ? uid : nanoid(11),
		string: str ? str : "",
		children: children ? children : undefined,
	};
};

const toBold = (str) => "**" + str + "**";

const toCodeString = ({ code, lang }) => {
	// using this so this function can be pasted into Roam
	// without breaking the code-formatting in Roam.
	// really meta!
	const temp = ``;
	return temp + "`" + lang + "\n" + code + temp + "`";
};

const toRoamPage = ({ title, children, email, time, uid }) => {
	return {
		"create-email": email ? email : undefined,
		"create-time": time ? time : new Date().getTime(),
		"edit-time:": time ? time : new Date().getTime(),
		"edit-email": email ? email : undefined,
		uid: uid ? uid : nanoid(11),
		children: children ? children : undefined,
		title: title,
	};
};
