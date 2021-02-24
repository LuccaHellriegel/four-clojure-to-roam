const timeoutProblems = [
	{
		content: {
			title: "Palindrome Detector",
			tags: ["Difficulty: Easy", "Topics: seqs"],
			code: [
				"(false? (__ '(1 2 3 4 5)))",
				'(true? (__ "racecar"))',
				"(true? (__ [:foo :bar :foo]))",
				"(true? (__ '(1 1 3 3 1 1)))",
				"(false? (__ '(:a :b :c)))",
			],
			desc: [
				"Write a function which returns true if the given sequence is a palindrome.",
				'Hint: "racecar" does not equal \'(\\r \\a \\c \\e \\c \\a \\r)',
			],
		},
		url: "https://www.4clojure.com/problem/27",
		number: 27,
	},
	{
		content: {
			title: "A nil key",
			tags: ["Difficulty: Elementary", "Topics: maps"],
			code: ["(true? (__ :a {:a nil :b 2}))", "(false? (__ :b {:a nil :b 2}))", "(false? (__ :c {:a nil :b 2}))"],
			desc: [
				"Write a function which, given a key and map, returns true iff the map contains an entry with that key and its value is nil.",
			],
		},
		url: "https://www.4clojure.com/problem/134",
		number: 134,
	},
];
module.exports = timeoutProblems;
