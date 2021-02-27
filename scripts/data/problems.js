const problems = [
	{
		content: {
			title: "Nothing but the Truth",
			tags: ["Difficulty: Elementary", "Topics:"],
			code: "(= __ true)",
			desc:
				"This is a clojure form. Enter a value which will make the form evaluate to true. Don't over think it! If you are confused, see the getting started page. Hint: true is equal to true.",
			syntax: ["=", "not"],
		},
		url: "https://www.4clojure.com/problem/1",
		number: 1,
	},
	{
		content: {
			title: "Simple Math",
			tags: ["Difficulty: Elementary", "Topics:"],
			code: "(= (- 10 (* 2 3)) __)",
			desc:
				"If you are not familiar with polish notation, simple arithmetic might seem confusing.\n\nNote: Enter only enough to fill in the blank (in this case, a single number) - do not retype the whole problem.",
			syntax: ["=", "*"],
		},
		url: "https://www.4clojure.com/problem/2",
		number: 2,
	},
	{
		content: {
			title: "Intro to Strings",
			tags: ["Difficulty: Elementary", "Topics:"],
			code: '(= __ (.toUpperCase "hello world"))',
			desc:
				"Clojure strings are Java strings. This means that you can use any of the Java string methods on Clojure strings.",
			syntax: ["="],
		},
		url: "https://www.4clojure.com/problem/3",
		number: 3,
	},
	{
		content: {
			title: "Intro to Lists",
			tags: ["Difficulty: Elementary", "Topics:"],
			code: "(= (list __) '(:a :b :c))",
			desc: "Lists can be constructed with either a function or a quoted form.",
			syntax: ["=", "list"],
		},
		url: "https://www.4clojure.com/problem/4",
		number: 4,
	},
	{
		content: {
			title: "Lists: conj",
			tags: ["Difficulty: Elementary", "Topics:"],
			code: "(= __ (conj '(2 3 4) 1))\n\n\t\n(= __ (conj '(3 4) 2 1))",
			desc:
				'When operating on a list, the conj function will return a new list with one or more items "added" to the front.\n\nNote that there are two test cases, but you are expected to supply only one answer, which will cause all the tests to pass.',
			syntax: ["=", "conj"],
		},
		url: "https://www.4clojure.com/problem/5",
		number: 5,
	},
	{
		content: {
			title: "Intro to Vectors",
			tags: ["Difficulty: Elementary", "Topics:"],
			code: "(= [__] (list :a :b :c) (vec '(:a :b :c)) (vector :a :b :c))",
			desc:
				"Vectors can be constructed several ways. You can compare them with lists.\n\nNote: the brackets [] surrounding the blanks __ are part of the test case.",
			syntax: ["=", "list", "vec", "vector"],
		},
		url: "https://www.4clojure.com/problem/6",
		number: 6,
	},
	{
		content: {
			title: "Vectors: conj",
			tags: ["Difficulty: Elementary", "Topics:"],
			code: "(= __ (conj [1 2 3] 4))\n\n\t\n(= __ (conj [1 2] 3 4))",
			desc:
				'When operating on a Vector, the conj function will return a new vector with one or more items "added" to the end.',
			syntax: ["=", "conj"],
		},
		url: "https://www.4clojure.com/problem/7",
		number: 7,
	},
	{
		content: {
			title: "Intro to Sets",
			tags: ["Difficulty: Elementary", "Topics:"],
			code: "(= __ (set '(:a :a :b :c :c :c :c :d :d)))\n\n\t\n(= __ (clojure.set/union #{:a :b :c} #{:b :c :d}))",
			desc: "Sets are collections of unique values.",
			syntax: ["=", "set"],
		},
		url: "https://www.4clojure.com/problem/8",
		number: 8,
	},
	{
		content: {
			title: "Sets: conj",
			tags: ["Difficulty: Elementary", "Topics:"],
			code: "(= #{1 2 3 4} (conj #{1 4 3} __))",
			desc: 'When operating on a set, the conj function returns a new set with one or more keys "added".',
			syntax: ["=", "conj"],
		},
		url: "https://www.4clojure.com/problem/9",
		number: 9,
	},
	{
		content: {
			title: "Intro to Maps",
			tags: ["Difficulty: Elementary", "Topics:"],
			code: "(= __ ((hash-map :a 10, :b 20, :c 30) :b))\n\n\t\n(= __ (:b {:a 10, :b 20, :c 30}))",
			desc:
				"Maps store key-value pairs. Both maps and keywords can be used as lookup functions. Commas can be used to make maps more readable, but they are not required.",
			syntax: ["=", "hash-map"],
		},
		url: "https://www.4clojure.com/problem/10",
		number: 10,
	},
	{
		content: {
			title: "Maps: conj",
			tags: ["Difficulty: Elementary", "Topics:"],
			code: "(= {:a 1, :b 2, :c 3} (conj {:a 1} __ [:c 3]))",
			desc: 'When operating on a map, the conj function returns a new map with one or more key-value pairs "added".',
			syntax: ["=", "conj"],
		},
		url: "https://www.4clojure.com/problem/11",
		number: 11,
	},
	{
		content: {
			title: "Intro to Sequences",
			tags: ["Difficulty: Elementary", "Topics:"],
			code: "(= __ (first '(3 2 1)))\n\n\t\n(= __ (second [2 3 4]))\n\n\t\n(= __ (last (list 1 2 3)))",
			desc:
				"All Clojure collections support sequencing. You can operate on sequences with functions like first, second, and last.",
			syntax: ["=", "first", "second", "last", "list"],
		},
		url: "https://www.4clojure.com/problem/12",
		number: 12,
	},
	{
		content: {
			title: "Sequences: rest",
			tags: ["Difficulty: Elementary", "Topics:"],
			code: "(= __ (rest [10 20 30 40]))",
			desc: "The rest function will return all the items of a sequence except the first.",
			syntax: ["=", "rest"],
		},
		url: "https://www.4clojure.com/problem/13",
		number: 13,
	},
	{
		content: {
			title: "Intro to Functions",
			tags: ["Difficulty: Elementary", "Topics:"],
			code:
				"(= __ ((fn add-five [x] (+ x 5)) 3))\n\n\t\n(= __ ((fn [x] (+ x 5)) 3))\n\n\t\n(= __ (#(+ % 5) 3))\n\n\t\n(= __ ((partial + 5) 3))",
			desc: "Clojure has many different ways to create functions.",
			syntax: ["=", "fn", "partial"],
		},
		url: "https://www.4clojure.com/problem/14",
		number: 14,
	},
	{
		content: {
			title: "Double Down",
			tags: ["Difficulty: Elementary", "Topics:"],
			code: "(= (__ 2) 4)\n\n\t\n(= (__ 3) 6)\n\n\t\n(= (__ 11) 22)\n\n\t\n(= (__ 7) 14)",
			desc: "Write a function which doubles a number.",
			syntax: ["=", "*"],
		},
		url: "https://www.4clojure.com/problem/15",
		number: 15,
	},
	{
		content: {
			title: "Hello World",
			tags: ["Difficulty: Elementary", "Topics:"],
			code:
				'(= (__ "Dave") "Hello, Dave!")\n\n\t\n(= (__ "Jenn") "Hello, Jenn!")\n\n\t\n(= (__ "Rhea") "Hello, Rhea!")',
			desc: "Write a function which returns a personalized greeting.",
			syntax: ["="],
		},
		url: "https://www.4clojure.com/problem/16",
		number: 16,
	},
	{
		content: {
			title: "Sequences: map",
			tags: ["Difficulty: Elementary", "Topics:"],
			code: "(= __ (map #(+ % 5) '(1 2 3)))",
			desc:
				"The map function takes two arguments: a function (f) and a sequence (s). Map returns a new sequence consisting of the result of applying f to each item of s. Do not confuse the map function with the map data structure.",
			syntax: ["=", "map"],
		},
		url: "https://www.4clojure.com/problem/17",
		number: 17,
	},
	{
		content: {
			title: "Sequences: filter",
			tags: ["Difficulty: Elementary", "Topics:"],
			code: "(= __ (filter #(> % 5) '(3 4 5 6 7)))",
			desc:
				"The filter function takes two arguments: a predicate function (f) and a sequence (s). Filter returns a new sequence consisting of all the items of s for which (f item) returns true.",
			syntax: ["=", "filter", ">"],
		},
		url: "https://www.4clojure.com/problem/18",
		number: 18,
	},
	{
		content: {
			title: "Last Element",
			tags: ["Difficulty: Easy", "Topics: seqs core-functions"],
			code: '(= (__ [1 2 3 4 5]) 5)\n\n\t\n(= (__ \'(5 4 3)) 3)\n\n\t\n(= (__ ["b" "c" "d"]) "d")',
			desc: "Write a function which returns the last element in a sequence.",
			restrictions: "last",
			syntax: ["="],
		},
		url: "https://www.4clojure.com/problem/19",
		number: 19,
	},
	{
		content: {
			title: "Penultimate Element",
			tags: ["Difficulty: Easy", "Topics: seqs"],
			code: '(= (__ (list 1 2 3 4 5)) 4)\n\n\t\n(= (__ ["a" "b" "c"]) "b")\n\n\t\n(= (__ [[1 2] [3 4]]) [1 2])',
			desc: "Write a function which returns the second to last element from a sequence.",
			syntax: ["=", "list"],
		},
		url: "https://www.4clojure.com/problem/20",
		number: 20,
	},
	{
		content: {
			title: "Nth Element",
			tags: ["Difficulty: Easy", "Topics: seqs core-functions"],
			code:
				"(= (__ '(4 5 6 7) 2) 6)\n\n\t\n(= (__ [:a :b :c] 0) :a)\n\n\t\n(= (__ [1 2 3 4] 1) 2)\n\n\t\n(= (__ '([1 2] [3 4] [5 6]) 2) [5 6])",
			desc: "Write a function which returns the Nth element from a sequence.",
			restrictions: "nth",
			syntax: ["="],
		},
		url: "https://www.4clojure.com/problem/21",
		number: 21,
	},
	{
		content: {
			title: "Count a Sequence",
			tags: ["Difficulty: Easy", "Topics: seqs core-functions"],
			code:
				"(= (__ '(1 2 3 3 1)) 5)\n\n\t\n(= (__ \"Hello World\") 11)\n\n\t\n(= (__ [[1 2] [3 4] [5 6]]) 3)\n\n\t\n(= (__ '(13)) 1)\n\n\t\n(= (__ '(:a :b :c)) 3)",
			desc: "Write a function which returns the total number of elements in a sequence.",
			restrictions: "count",
			syntax: ["="],
		},
		url: "https://www.4clojure.com/problem/22",
		number: 22,
	},
	{
		content: {
			title: "Reverse a Sequence",
			tags: ["Difficulty: Easy", "Topics: seqs core-functions"],
			code:
				"(= (__ [1 2 3 4 5]) [5 4 3 2 1])\n\n\t\n(= (__ (sorted-set 5 7 2 7)) '(7 5 2))\n\n\t\n(= (__ [[1 2][3 4][5 6]]) [[5 6][3 4][1 2]])",
			desc: "Write a function which reverses a sequence.",
			restrictions: "reverse\nrseq",
			syntax: ["=", "sorted-set"],
		},
		url: "https://www.4clojure.com/problem/23",
		number: 23,
	},
	{
		content: {
			title: "Sum It All Up",
			tags: ["Difficulty: Easy", "Topics: seqs"],
			code:
				"(= (__ [1 2 3]) 6)\n\n\t\n(= (__ (list 0 -2 5 5)) 8)\n\n\t\n(= (__ #{4 2 1}) 7)\n\n\t\n(= (__ '(0 0 -1)) -1)\n\n\t\n(= (__ '(1 10 3)) 14)",
			desc: "Write a function which returns the sum of a sequence of numbers.",
			syntax: ["=", "list"],
		},
		url: "https://www.4clojure.com/problem/24",
		number: 24,
	},
	{
		content: {
			title: "Find the odd numbers",
			tags: ["Difficulty: Easy", "Topics: seqs"],
			code:
				"(= (__ #{1 2 3 4 5}) '(1 3 5))\n\n\t\n(= (__ [4 2 1 6]) '(1))\n\n\t\n(= (__ [2 2 4 6]) '())\n\n\t\n(= (__ [1 1 1 3]) '(1 1 1 3))",
			desc: "Write a function which returns only the odd numbers from a sequence.",
			syntax: ["="],
		},
		url: "https://www.4clojure.com/problem/25",
		number: 25,
	},
	{
		content: {
			title: "Fibonacci Sequence",
			tags: ["Difficulty: Easy", "Topics: Fibonacci seqs"],
			code: "(= (__ 3) '(1 1 2))\n\n\t\n(= (__ 6) '(1 1 2 3 5 8))\n\n\t\n(= (__ 8) '(1 1 2 3 5 8 13 21))",
			desc: "Write a function which returns the first X fibonacci numbers.",
			syntax: ["="],
		},
		url: "https://www.4clojure.com/problem/26",
		number: 26,
	},
	{
		content: {
			title: "Palindrome Detector",
			tags: ["Difficulty: Easy", "Topics: seqs"],
			code:
				"(false? (__ '(1 2 3 4 5)))\n\n\t\n(true? (__ \"racecar\"))\n\n\t\n(true? (__ [:foo :bar :foo]))\n\n\t\n(true? (__ '(1 1 3 3 1 1)))\n\n\t\n(false? (__ '(:a :b :c)))",
			desc:
				'Write a function which returns true if the given sequence is a palindrome.\n\nHint: "racecar" does not equal \'(\\r \\a \\c \\e \\c \\a \\r)',
		},
		url: "https://www.4clojure.com/problem/27",
		number: 27,
	},
	{
		content: {
			title: "Flatten a Sequence",
			tags: ["Difficulty: Easy", "Topics: seqs core-functions"],
			code:
				'(= (__ \'((1 2) 3 [4 [5 6]])) \'(1 2 3 4 5 6))\n\n\t\n(= (__ ["a" ["b"] "c"]) \'("a" "b" "c"))\n\n\t\n(= (__ \'((((:a))))) \'(:a))',
			desc: "Write a function which flattens a sequence.",
			restrictions: "flatten",
			syntax: ["="],
		},
		url: "https://www.4clojure.com/problem/28",
		number: 28,
	},
	{
		content: {
			title: "Get the Caps",
			tags: ["Difficulty: Easy", "Topics: strings"],
			code: '(= (__ "HeLlO, WoRlD!") "HLOWRD")\n\n\t\n(empty? (__ "nothing"))\n\n\t\n(= (__ "$#A(*&987Zf") "AZ")',
			desc: "Write a function which takes a string and returns a new string containing only the capital letters.",
			syntax: ["=", "empty"],
		},
		url: "https://www.4clojure.com/problem/29",
		number: 29,
	},
	{
		content: {
			title: "Compress a Sequence",
			tags: ["Difficulty: Easy", "Topics: seqs"],
			code:
				'(= (apply str (__ "Leeeeeerrroyyy")) "Leroy")\n\n\t\n(= (__ [1 1 2 3 3 2 2 3]) \'(1 2 3 2 3))\n\n\t\n(= (__ [[1 2] [1 2] [3 4] [1 2]]) \'([1 2] [3 4] [1 2]))',
			desc: "Write a function which removes consecutive duplicates from a sequence.",
			syntax: ["=", "apply", "str"],
		},
		url: "https://www.4clojure.com/problem/30",
		number: 30,
	},
	{
		content: {
			title: "Pack a Sequence",
			tags: ["Difficulty: Easy", "Topics: seqs"],
			code:
				"(= (__ [1 1 2 1 1 1 3 3]) '((1 1) (2) (1 1 1) (3 3)))\n\n\t\n(= (__ [:a :a :b :b :c]) '((:a :a) (:b :b) (:c)))\n\n\t\n(= (__ [[1 2] [1 2] [3 4]]) '(([1 2] [1 2]) ([3 4])))",
			desc: "Write a function which packs consecutive duplicates into sub-lists.",
			syntax: ["="],
		},
		url: "https://www.4clojure.com/problem/31",
		number: 31,
	},
	{
		content: {
			title: "Duplicate a Sequence",
			tags: ["Difficulty: Easy", "Topics: seqs"],
			code:
				"(= (__ [1 2 3]) '(1 1 2 2 3 3))\n\n\t\n(= (__ [:a :a :b :b]) '(:a :a :a :a :b :b :b :b))\n\n\t\n(= (__ [[1 2] [3 4]]) '([1 2] [1 2] [3 4] [3 4]))\n\n\t\n(= (__ [[1 2] [3 4]]) '([1 2] [1 2] [3 4] [3 4]))",
			desc: "Write a function which duplicates each element of a sequence.",
			syntax: ["="],
		},
		url: "https://www.4clojure.com/problem/32",
		number: 32,
	},
	{
		content: {
			title: "Replicate a Sequence",
			tags: ["Difficulty: Easy", "Topics: seqs"],
			code:
				"(= (__ [1 2 3] 2) '(1 1 2 2 3 3))\n\n\t\n(= (__ [:a :b] 4) '(:a :a :a :a :b :b :b :b))\n\n\t\n(= (__ [4 5 6] 1) '(4 5 6))\n\n\t\n(= (__ [[1 2] [3 4]] 2) '([1 2] [1 2] [3 4] [3 4]))\n\n\t\n(= (__ [44 33] 2) [44 44 33 33])",
			desc: "Write a function which replicates each element of a sequence a variable number of times.",
			syntax: ["="],
		},
		url: "https://www.4clojure.com/problem/33",
		number: 33,
	},
	{
		content: {
			title: "Implement range",
			tags: ["Difficulty: Easy", "Topics: seqs core-functions"],
			code: "(= (__ 1 4) '(1 2 3))\n\n\t\n(= (__ -2 2) '(-2 -1 0 1))\n\n\t\n(= (__ 5 8) '(5 6 7))",
			desc: "Write a function which creates a list of all integers in a given range.",
			restrictions: "range",
			syntax: ["="],
		},
		url: "https://www.4clojure.com/problem/34",
		number: 34,
	},
	{
		content: {
			title: "Local bindings",
			tags: ["Difficulty: Elementary", "Topics: syntax"],
			code:
				"(= __ (let [x 5] (+ 2 x)))\n\n\t\n(= __ (let [x 3, y 10] (- y x)))\n\n\t\n(= __ (let [x 21] (let [y 3] (/ x y))))",
			desc: "Clojure lets you give local names to values using the special let-form.",
			syntax: ["=", "/"],
		},
		url: "https://www.4clojure.com/problem/35",
		number: 35,
	},
	{
		content: {
			title: "Let it Be",
			tags: ["Difficulty: Elementary", "Topics: math syntax"],
			code: "(= 10 (let __ (+ x y)))\n\n\t\n(= 4 (let __ (+ y z)))\n\n\t\n(= 1 (let __ z))",
			desc: "Can you bind x, y, and z so that these are all true?",
			syntax: ["="],
		},
		url: "https://www.4clojure.com/problem/36",
		number: 36,
	},
	{
		content: {
			title: "Regular Expressions",
			tags: ["Difficulty: Elementary", "Topics: regex syntax"],
			code: '(= __ (apply str (re-seq #"[A-Z]+" "bA1B3Ce ")))',
			desc: "Regex patterns are supported with a special reader macro.",
			syntax: ["=", "apply", "str", "re-seq"],
		},
		url: "https://www.4clojure.com/problem/37",
		number: 37,
	},
	{
		content: {
			title: "Maximum value",
			tags: ["Difficulty: Easy", "Topics: core-functions"],
			code: "(= (__ 1 8 3 4) 8)\n\n\t\n(= (__ 30 20) 30)\n\n\t\n(= (__ 45 67 11) 67)",
			desc: "Write a function which takes a variable number of parameters and returns the maximum value.",
			restrictions: "max\nmax-key",
			syntax: ["="],
		},
		url: "https://www.4clojure.com/problem/38",
		number: 38,
	},
	{
		content: {
			title: "Interleave Two Seqs",
			tags: ["Difficulty: Easy", "Topics: seqs core-functions"],
			code:
				"(= (__ [1 2 3] [:a :b :c]) '(1 :a 2 :b 3 :c))\n\n\t\n(= (__ [1 2] [3 4 5 6]) '(1 3 2 4))\n\n\t\n(= (__ [1 2 3 4] [5]) [1 5])\n\n\t\n(= (__ [30 20] [25 15]) [30 25 20 15])",
			desc:
				"Write a function which takes two sequences and returns the first item from each, then the second item from each, then the third, etc.",
			restrictions: "interleave",
			syntax: ["="],
		},
		url: "https://www.4clojure.com/problem/39",
		number: 39,
	},
	{
		content: {
			title: "Interpose a Seq",
			tags: ["Difficulty: Easy", "Topics: seqs core-functions"],
			code:
				'(= (__ 0 [1 2 3]) [1 0 2 0 3])\n\n\t\n(= (apply str (__ ", " ["one" "two" "three"])) "one, two, three")\n\n\t\n(= (__ :z [:a :b :c :d]) [:a :z :b :z :c :z :d])',
			desc: "Write a function which separates the items of a sequence by an arbitrary value.",
			restrictions: "interpose",
			syntax: ["=", "apply", "str"],
		},
		url: "https://www.4clojure.com/problem/40",
		number: 40,
	},
	{
		content: {
			title: "Drop Every Nth Item",
			tags: ["Difficulty: Easy", "Topics: seqs"],
			code:
				"(= (__ [1 2 3 4 5 6 7 8] 3) [1 2 4 5 7 8])\n\n\t\n(= (__ [:a :b :c :d :e :f] 2) [:a :c :e])\n\n\t\n(= (__ [1 2 3 4 5 6] 4) [1 2 3 5 6])",
			desc: "Write a function which drops every Nth item from a sequence.",
			syntax: ["="],
		},
		url: "https://www.4clojure.com/problem/41",
		number: 41,
	},
	{
		content: {
			title: "Factorial Fun",
			tags: ["Difficulty: Easy", "Topics: math"],
			code: "(= (__ 1) 1)\n\n\t\n(= (__ 3) 6)\n\n\t\n(= (__ 5) 120)\n\n\t\n(= (__ 8) 40320)",
			desc: "Write a function which calculates factorials.",
			syntax: ["="],
		},
		url: "https://www.4clojure.com/problem/42",
		number: 42,
	},
	{
		content: {
			title: "Reverse Interleave",
			tags: ["Difficulty: Medium", "Topics: seqs"],
			code:
				"(= (__ [1 2 3 4 5 6] 2) '((1 3 5) (2 4 6)))\n\n\t\n(= (__ (range 9) 3) '((0 3 6) (1 4 7) (2 5 8)))\n\n\t\n(= (__ (range 10) 5) '((0 5) (1 6) (2 7) (3 8) (4 9)))",
			desc: "Write a function which reverses the interleave process into x number of subsequences.",
			syntax: ["=", "range"],
		},
		url: "https://www.4clojure.com/problem/43",
		number: 43,
	},
	{
		content: {
			title: "Rotate Sequence",
			tags: ["Difficulty: Medium", "Topics: seqs"],
			code:
				"(= (__ 2 [1 2 3 4 5]) '(3 4 5 1 2))\n\n\t\n(= (__ -2 [1 2 3 4 5]) '(4 5 1 2 3))\n\n\t\n(= (__ 6 [1 2 3 4 5]) '(2 3 4 5 1))\n\n\t\n(= (__ 1 '(:a :b :c)) '(:b :c :a))\n\n\t\n(= (__ -4 '(:a :b :c)) '(:c :a :b))",
			desc: "Write a function which can rotate a sequence in either direction.",
			syntax: ["="],
		},
		url: "https://www.4clojure.com/problem/44",
		number: 44,
	},
	{
		content: {
			title: "Intro to Iterate",
			tags: ["Difficulty: Easy", "Topics: seqs"],
			code: "(= __ (take 5 (iterate #(+ 3 %) 1)))",
			desc: "The iterate function can be used to produce an infinite lazy sequence.",
			syntax: ["=", "take", "iterate"],
		},
		url: "https://www.4clojure.com/problem/45",
		number: 45,
	},
	{
		content: {
			title: "Flipping out",
			tags: ["Difficulty: Medium", "Topics: higher-order-functions"],
			code:
				"(= 3 ((__ nth) 2 [1 2 3 4 5]))\n\n\t\n(= true ((__ >) 7 8))\n\n\t\n(= 4 ((__ quot) 2 8))\n\n\t\n(= [1 2 3] ((__ take) [1 2 3 4 5] 3))",
			desc: "Write a higher-order function which flips the order of the arguments of an input function.",
			syntax: ["=", "nth", ">", "quot", "take"],
		},
		url: "https://www.4clojure.com/problem/46",
		number: 46,
	},
	{
		content: {
			title: "Contain Yourself",
			tags: ["Difficulty: Easy", "Topics:"],
			code:
				"(contains? #{4 5 6} __)\n\n\t\n(contains? [1 1 1 1 1] __)\n\n\t\n(contains? {4 :a 2 :b} __)\n\n\t\n(not (contains? [1 2 4] __))",
			desc:
				"The contains? function checks if a KEY is present in a given collection. This often leads beginner clojurians to use it incorrectly with numerically indexed collections like vectors and lists.",
			syntax: ["not"],
		},
		url: "https://www.4clojure.com/problem/47",
		number: 47,
	},
	{
		content: {
			title: "Intro to some",
			tags: ["Difficulty: Easy", "Topics:"],
			code: "(= __ (some #{2 7 6} [5 6 7 8]))\n\n\t\n(= __ (some #(when (even? %) %) [5 6 7 8]))",
			desc:
				"The some function takes a predicate function and a collection. It returns the first logical true value of (predicate x) where x is an item in the collection.",
			syntax: ["=", "some"],
		},
		url: "https://www.4clojure.com/problem/48",
		number: 48,
	},
	{
		content: {
			title: "Split a sequence",
			tags: ["Difficulty: Easy", "Topics: seqs core-functions"],
			code:
				"(= (__ 3 [1 2 3 4 5 6]) [[1 2 3] [4 5 6]])\n\n\t\n(= (__ 1 [:a :b :c :d]) [[:a] [:b :c :d]])\n\n\t\n(= (__ 2 [[1 2] [3 4] [5 6]]) [[[1 2] [3 4]] [[5 6]]])",
			desc: "Write a function which will split a sequence into two parts.",
			restrictions: "split-at",
			syntax: ["="],
		},
		url: "https://www.4clojure.com/problem/49",
		number: 49,
	},
	{
		content: {
			title: "Split by Type",
			tags: ["Difficulty: Medium", "Topics: seqs"],
			code:
				'(= (set (__ [1 :a 2 :b 3 :c])) #{[1 2 3] [:a :b :c]})\n\n\t\n(= (set (__ [:a "foo"  "bar" :b])) #{[:a :b] ["foo" "bar"]})\n\n\t\n(= (set (__ [[1 2] :a [3 4] 5 6 :b])) #{[[1 2] [3 4]] [:a :b] [5 6]})',
			desc:
				"Write a function which takes a sequence consisting of items with different types and splits them up into a set of homogeneous sub-sequences. The internal order of each sub-sequence should be maintained, but the sub-sequences themselves can be returned in any order (this is why 'set' is used in the test cases).",
			syntax: ["=", "set"],
		},
		url: "https://www.4clojure.com/problem/50",
		number: 50,
	},
	{
		content: {
			title: "Advanced Destructuring",
			tags: ["Difficulty: Easy", "Topics: destructuring"],
			code: "(= [1 2 [3 4 5] [1 2 3 4 5]] (let [[a b & c :as d] __] [a b c d]))",
			desc: "Here is an example of some more sophisticated destructuring.",
			syntax: ["="],
		},
		url: "https://www.4clojure.com/problem/51",
		number: 51,
	},
	{
		content: {
			title: "Intro to Destructuring",
			tags: ["Difficulty: Elementary", "Topics: destructuring"],
			code: "(= [2 4] (let [[a b c d e] [0 1 2 3 4]] __))",
			desc: "Let bindings and function parameter lists support destructuring.",
			syntax: ["="],
		},
		url: "https://www.4clojure.com/problem/52",
		number: 52,
	},
	{
		content: {
			title: "Longest Increasing Sub-Seq",
			tags: ["Difficulty: Hard", "Topics: seqs"],
			code:
				"(= (__ [1 0 1 2 3 0 4 5]) [0 1 2 3])\n\n\t\n(= (__ [5 6 1 3 2 7]) [5 6])\n\n\t\n(= (__ [2 3 3 4 5]) [3 4 5])\n\n\t\n(= (__ [7 6 5 4]) [])",
			desc:
				"Given a vector of integers, find the longest consecutive sub-sequence of increasing numbers. If two sub-sequences have the same length, use the one that occurs first. An increasing sub-sequence must have a length of 2 or greater to qualify.",
			syntax: ["="],
		},
		url: "https://www.4clojure.com/problem/53",
		number: 53,
	},
	{
		content: {
			title: "Partition a Sequence",
			tags: ["Difficulty: Medium", "Topics: seqs core-functions"],
			code:
				"(= (__ 3 (range 9)) '((0 1 2) (3 4 5) (6 7 8)))\n\n\t\n(= (__ 2 (range 8)) '((0 1) (2 3) (4 5) (6 7)))\n\n\t\n(= (__ 3 (range 8)) '((0 1 2) (3 4 5)))",
			desc:
				"Write a function which returns a sequence of lists of x items each. Lists of less than x items should not be returned.",
			restrictions: "partition\npartition-all",
			syntax: ["=", "range"],
		},
		url: "https://www.4clojure.com/problem/54",
		number: 54,
	},
	{
		content: {
			title: "Count Occurrences",
			tags: ["Difficulty: Medium", "Topics: seqs core-functions"],
			code:
				"(= (__ [1 1 2 3 2 1 1]) {1 4, 2 2, 3 1})\n\n\t\n(= (__ [:b :a :b :a :b]) {:a 2, :b 3})\n\n\t\n(= (__ '([1 2] [1 3] [1 3])) {[1 2] 1, [1 3] 2})",
			desc:
				"Write a function which returns a map containing the number of occurences of each distinct item in a sequence.",
			restrictions: "frequencies",
			syntax: ["="],
		},
		url: "https://www.4clojure.com/problem/55",
		number: 55,
	},
	{
		content: {
			title: "Find Distinct Items",
			tags: ["Difficulty: Medium", "Topics: seqs core-functions"],
			code:
				"(= (__ [1 2 1 3 1 2 4]) [1 2 3 4])\n\n\t\n(= (__ [:a :a :b :b :c :c]) [:a :b :c])\n\n\t\n(= (__ '([2 4] [1 2] [1 3] [1 3])) '([2 4] [1 2] [1 3]))\n\n\t\n(= (__ (range 50)) (range 50))",
			desc: "Write a function which removes the duplicates from a sequence. Order of the items must be maintained.",
			restrictions: "distinct",
			syntax: ["=", "range"],
		},
		url: "https://www.4clojure.com/problem/56",
		number: 56,
	},
	{
		content: {
			title: "Simple Recursion",
			tags: ["Difficulty: Elementary", "Topics: recursion"],
			code: "(= __ ((fn foo [x] (when (> x 0) (conj (foo (dec x)) x))) 5))",
			desc:
				"A recursive function is a function which calls itself. This is one of the fundamental techniques used in functional programming.",
			syntax: ["=", "fn", ">", "conj", "dec", "list"],
		},
		url: "https://www.4clojure.com/problem/57",
		number: 57,
	},
	{
		content: {
			title: "Function Composition",
			tags: ["Difficulty: Medium", "Topics: higher-order-functions core-functions"],
			code:
				'(= [3 2 1] ((__ rest reverse) [1 2 3 4]))\n\n\t\n(= 5 ((__ (partial + 3) second) [1 2 3 4]))\n\n\t\n(= true ((__ zero? #(mod % 8) +) 3 5 7 9))\n\n\t\n(= "HELLO" ((__ #(.toUpperCase %) #(apply str %) take) 5 "hello world"))',
			desc:
				"Write a function which allows you to create function compositions. The parameter list should take a variable number of functions, and create a function that applies them from right-to-left.",
			restrictions: "comp",
			syntax: ["=", "rest", "reverse", "partial", "second", "mod", "apply", "str", "take"],
		},
		url: "https://www.4clojure.com/problem/58",
		number: 58,
	},
	{
		content: {
			title: "Juxtaposition",
			tags: ["Difficulty: Medium", "Topics: higher-order-functions core-functions"],
			code:
				'(= [21 6 1] ((__ + max min) 2 3 5 1 6 4))\n\n\t\n(= ["HELLO" 5] ((__ #(.toUpperCase %) count) "hello"))\n\n\t\n(= [2 6 4] ((__ :a :c :b) {:a 2, :b 4, :c 6, :d 8 :e 10}))',
			desc:
				"Take a set of functions and return a new function that takes a variable number of arguments and returns a sequence containing the result of applying each function left-to-right to the argument list.",
			restrictions: "juxt",
			syntax: ["=", "min", "count"],
		},
		url: "https://www.4clojure.com/problem/59",
		number: 59,
	},
	{
		content: {
			title: "Sequence Reductions",
			tags: ["Difficulty: Medium", "Topics: seqs core-functions"],
			code:
				"(= (take 5 (__ + (range))) [0 1 3 6 10])\n\n\t\n(= (__ conj [1] [2 3 4]) [[1] [1 2] [1 2 3] [1 2 3 4]])\n\n\t\n(= (last (__ * 2 [3 4 5])) (reduce * 2 [3 4 5]) 120)",
			desc:
				"Write a function which behaves like reduce, but returns each intermediate value of the reduction. Your function must accept either two or three arguments, and the return sequence must be lazy.",
			restrictions: "reductions",
			syntax: ["=", "take", "range", "conj", "last", "*", "reduce"],
		},
		url: "https://www.4clojure.com/problem/60",
		number: 60,
	},
	{
		content: {
			title: "Map Construction",
			tags: ["Difficulty: Easy", "Topics: core-functions"],
			code:
				'(= (__ [:a :b :c] [1 2 3]) {:a 1, :b 2, :c 3})\n\n\t\n(= (__ [1 2 3 4] ["one" "two" "three"]) {1 "one", 2 "two", 3 "three"})\n\n\t\n(= (__ [:foo :bar] ["foo" "bar" "baz"]) {:foo "foo", :bar "bar"})',
			desc: "Write a function which takes a vector of keys and a vector of values and constructs a map from them.",
			restrictions: "zipmap",
			syntax: ["="],
		},
		url: "https://www.4clojure.com/problem/61",
		number: 61,
	},
	{
		content: {
			title: "Re-implement Iterate",
			tags: ["Difficulty: Easy", "Topics: seqs core-functions"],
			code:
				"(= (take 5 (__ #(* 2 %) 1)) [1 2 4 8 16])\n\n\t\n(= (take 100 (__ inc 0)) (take 100 (range)))\n\n\t\n(= (take 9 (__ #(inc (mod % 3)) 1)) (take 9 (cycle [1 2 3])))",
			desc:
				"Given a side-effect free function f and an initial value x write a function which returns an infinite lazy sequence of x, (f x), (f (f x)), (f (f (f x))), etc.",
			restrictions: "iterate",
			syntax: ["=", "take", "*", "inc", "range", "mod", "cycle"],
		},
		url: "https://www.4clojure.com/problem/62",
		number: 62,
	},
	{
		content: {
			title: "Group a Sequence",
			tags: ["Difficulty: Easy", "Topics: core-functions"],
			code:
				"(= (__ #(> % 5) [1 3 6 8]) {false [1 3], true [6 8]})\n\n\t\n(= (__ #(apply / %) [[1 2] [2 4] [4 6] [3 6]])\n   {1/2 [[1 2] [2 4] [3 6]], 2/3 [[4 6]]})\n\n\t\n(= (__ count [[1] [1 2] [3] [1 2 3] [2 3]])\n   {1 [[1] [3]], 2 [[1 2] [2 3]], 3 [[1 2 3]]})",
			desc:
				"Given a function f and a sequence s, write a function which returns a map. The keys should be the values of f applied to each item in s. The value at each key should be a vector of corresponding items in the order they appear in s.",
			restrictions: "group-by",
			syntax: ["=", ">", "apply", "/", "count"],
		},
		url: "https://www.4clojure.com/problem/63",
		number: 63,
	},
	{
		content: {
			title: "Intro to Reduce",
			tags: ["Difficulty: Elementary", "Topics: seqs"],
			code: "(= 15 (reduce __ [1 2 3 4 5]))\n\n\t\n(=  0 (reduce __ []))\n\n\t\n(=  6 (reduce __ 1 [2 3]))",
			desc:
				"Reduce takes a 2 argument function and an optional starting value. It then applies the function to the first 2 items in the sequence (or the starting value and the first element of the sequence). In the next iteration the function will be called on the previous return value and the next item from the sequence, thus reducing the entire collection to one value. Don't worry, it's not as complicated as it sounds.",
			syntax: ["=", "reduce"],
		},
		url: "https://www.4clojure.com/problem/64",
		number: 64,
	},
	{
		content: {
			title: "Black Box Testing",
			tags: ["Difficulty: Medium", "Topics: seqs testing"],
			code:
				"(= :map (__ {:a 1, :b 2}))\n\n\t\n(= :list (__ (range (rand-int 20))))\n\n\t\n(= :vector (__ [1 2 3 4 5 6]))\n\n\t\n(= :set (__ #{10 (rand-int 5)}))\n\n\t\n(= [:map :set :vector :list] (map __ [{} #{} [] ()]))",
			desc:
				'Clojure has many sequence types, which act in subtly different ways. The core functions typically convert them into a uniform "sequence" type and work with them that way, but it can be important to understand the behavioral and performance differences so that you know which kind is appropriate for your application.\n\nWrite a function which takes a collection and returns one of :map, :set, :list, or :vector - describing the type of collection it was given.\nYou won\'t be allowed to inspect their class or use the built-in predicates like list? - the point is to poke at them and understand their behavior.',
			restrictions: "class\ntype\nClass\nvector?\nsequential?\nlist?\nseq?\nmap?\nset?\ninstance?\ngetClass",
			syntax: ["=", "range", "rand-int", "map"],
		},
		url: "https://www.4clojure.com/problem/65",
		number: 65,
	},
	{
		content: {
			title: "Greatest Common Divisor",
			tags: ["Difficulty: Easy", "Topics:"],
			code: "(= (__ 2 4) 2)\n\n\t\n(= (__ 10 5) 5)\n\n\t\n(= (__ 5 7) 1)\n\n\t\n(= (__ 1023 858) 33)",
			desc: "Given two integers, write a function which returns the greatest common divisor.",
			syntax: ["="],
		},
		url: "https://www.4clojure.com/problem/66",
		number: 66,
	},
	{
		content: {
			title: "Prime Numbers",
			tags: ["Difficulty: Medium", "Topics: primes"],
			code: "(= (__ 2) [2 3])\n\n\t\n(= (__ 5) [2 3 5 7 11])\n\n\t\n(= (last (__ 100)) 541)",
			desc: "Write a function which returns the first x number of prime numbers.",
			syntax: ["=", "last"],
		},
		url: "https://www.4clojure.com/problem/67",
		number: 67,
	},
	{
		content: {
			title: "Recurring Theme",
			tags: ["Difficulty: Elementary", "Topics: recursion"],
			code:
				"(= __\n  (loop [x 5\n         result []]\n    (if (> x 0)\n      (recur (dec x) (conj result (+ 2 x)))\n      result)))",
			desc:
				"Clojure only has one non-stack-consuming looping construct: recur. Either a function or a loop can be used as the recursion point. Either way, recur rebinds the bindings of the recursion point to the values it is passed. Recur must be called from the tail-position, and calling it elsewhere will result in an error.",
			syntax: ["=", ">", "dec", "conj", "list"],
		},
		url: "https://www.4clojure.com/problem/68",
		number: 68,
	},
	{
		content: {
			title: "Merge with a Function",
			tags: ["Difficulty: Medium", "Topics: core-functions"],
			code:
				"(= (__ * {:a 2, :b 3, :c 4} {:a 2} {:b 2} {:c 5})\n   {:a 4, :b 6, :c 20})\n\n\t\n(= (__ - {1 10, 2 20} {1 3, 2 10, 3 15})\n   {1 7, 2 10, 3 15})\n\n\t\n(= (__ concat {:a [3], :b [6]} {:a [4 5], :c [8 9]} {:b [7]})\n   {:a [3 4 5], :b [6 7], :c [8 9]})",
			desc:
				"Write a function which takes a function f and a variable number of maps. Your function should return a map that consists of the rest of the maps conj-ed onto the first. If a key occurs in more than one map, the mapping(s) from the latter (left-to-right) should be combined with the mapping in the result by calling (f val-in-result val-in-latter)",
			restrictions: "merge-with",
			syntax: ["=", "*", "concat"],
		},
		url: "https://www.4clojure.com/problem/69",
		number: 69,
	},
	{
		content: {
			title: "Word Sorting",
			tags: ["Difficulty: Medium", "Topics: sorting"],
			code:
				'(= (__  "Have a nice day.")\n   ["a" "day" "Have" "nice"])\n\n\t\n(= (__  "Clojure is a fun language!")\n   ["a" "Clojure" "fun" "is" "language"])\n\n\t\n(= (__  "Fools fall for foolish follies.")\n   ["fall" "follies" "foolish" "Fools" "for"])',
			desc:
				"Write a function that splits a sentence up into a sorted list of words. Capitalization should not affect sort order and punctuation should be ignored.",
			syntax: ["="],
		},
		url: "https://www.4clojure.com/problem/70",
		number: 70,
	},
	{
		content: {
			title: "Rearranging Code: ->",
			tags: ["Difficulty: Elementary", "Topics:"],
			code: "(= (__ (sort (rest (reverse [2 5 4 1 3 6]))))\n   (-> [2 5 4 1 3 6] (reverse) (rest) (sort) (__))\n   5)",
			desc:
				"The -> macro threads an expression x through a variable number of forms. First, x is inserted as the second item in the first form, making a list of it if it is not a list already. Then the first form is inserted as the second item in the second form, making a list of that form if necessary. This process continues for all the forms. Using -> can sometimes make your code more readable.",
			syntax: ["=", "sort", "rest", "reverse", "last"],
		},
		url: "https://www.4clojure.com/problem/71",
		number: 71,
	},
	{
		content: {
			title: "Rearranging Code: ->>",
			tags: ["Difficulty: Elementary", "Topics:"],
			code:
				"(= (__ (map inc (take 3 (drop 2 [2 5 4 1 3 6]))))\n   (->> [2 5 4 1 3 6] (drop 2) (take 3) (map inc) (__))\n   11)",
			desc:
				"The ->> macro threads an expression x through a variable number of forms. First, x is inserted as the last item in the first form, making a list of it if it is not a list already. Then the first form is inserted as the last item in the second form, making a list of that form if necessary. This process continues for all the forms. Using ->> can sometimes make your code more readable.",
			syntax: ["=", "map", "inc", "take", "drop", ">", "reduce", "+"],
		},
		url: "https://www.4clojure.com/problem/72",
		number: 72,
	},
	{
		content: {
			title: "Analyze a Tic-Tac-Toe Board",
			tags: ["Difficulty: Hard", "Topics: game"],
			code:
				"(= nil (__ [[:e :e :e]\n            [:e :e :e]\n            [:e :e :e]]))\n\n\t\n(= :x (__ [[:x :e :o]\n           [:x :e :e]\n           [:x :e :o]]))\n\n\t\n(= :o (__ [[:e :x :e]\n           [:o :o :o]\n           [:x :e :x]]))\n\n\t\n(= nil (__ [[:x :e :o]\n            [:x :x :e]\n            [:o :x :o]]))\n\n\t\n(= :x (__ [[:x :e :e]\n           [:o :x :e]\n           [:o :e :x]]))\n\n\t\n(= :o (__ [[:x :e :o]\n           [:x :o :e]\n           [:o :e :x]]))\n\n\t\n(= nil (__ [[:x :o :x]\n            [:x :o :x]\n            [:o :x :o]]))",
			desc:
				"A tic-tac-toe board is represented by a two dimensional vector. X is represented by :x, O is represented by :o, and empty is represented by :e. A player wins by placing three Xs or three Os in a horizontal, vertical, or diagonal row. Write a function which analyzes a tic-tac-toe board and returns :x if X has won, :o if O has won, and nil if neither player has won.",
			syntax: ["="],
		},
		url: "https://www.4clojure.com/problem/73",
		number: 73,
	},
	{
		content: {
			title: "Filter Perfect Squares",
			tags: ["Difficulty: Medium", "Topics:"],
			code: '(= (__ "4,5,6,7,8,9") "4,9")\n\n\t\n(= (__ "15,16,25,36,37") "16,25,36")',
			desc:
				"Given a string of comma separated integers, write a function which returns a new comma separated string that only contains the numbers which are perfect squares.",
			syntax: ["="],
		},
		url: "https://www.4clojure.com/problem/74",
		number: 74,
	},
	{
		content: {
			title: "Euler's Totient Function",
			tags: ["Difficulty: Medium", "Topics:"],
			code: "(= (__ 1) 1)\n\n\t\n(= (__ 10) (count '(1 3 7 9)) 4)\n\n\t\n(= (__ 40) 16)\n\n\t\n(= (__ 99) 60)",
			desc:
				"Two numbers are coprime if their greatest common divisor equals 1. Euler's totient function f(x) is defined as the number of positive integers less than x which are coprime to x. The special case f(1) equals 1. Write a function which calculates Euler's totient function.",
			syntax: ["=", "count"],
		},
		url: "https://www.4clojure.com/problem/75",
		number: 75,
	},
	{
		content: {
			title: "Intro to Trampoline",
			tags: ["Difficulty: Medium", "Topics: recursion"],
			code:
				"(= __\n   (letfn\n     [(foo [x y] #(bar (conj x y) y))\n      (bar [x y] (if (> (last x) 10)\n                   x\n                   #(foo x (+ 2 y))))]\n     (trampoline foo [] 1)))",
			desc:
				"The trampoline function takes a function f and a variable number of parameters. Trampoline calls f with any parameters that were supplied. If f returns a function, trampoline calls that function with no arguments. This is repeated, until the return value is not a function, and then trampoline returns that non-function value. This is useful for implementing mutually recursive algorithms in a way that won't consume the stack.",
			syntax: ["=", "conj", ">", "last", "trampoline"],
		},
		url: "https://www.4clojure.com/problem/76",
		number: 76,
	},
	{
		content: {
			title: "Anagram Finder",
			tags: ["Difficulty: Medium", "Topics:"],
			code:
				'(= (__ ["meat" "mat" "team" "mate" "eat"])\n   #{#{"meat" "team" "mate"}})\n\n\t\n(= (__ ["veer" "lake" "item" "kale" "mite" "ever"])\n   #{#{"veer" "ever"} #{"lake" "kale"} #{"mite" "item"}})',
			desc:
				"Write a function which finds all the anagrams in a vector of words. A word x is an anagram of word y if all the letters in x can be rearranged in a different order to form y. Your function should return a set of sets, where each sub-set is a group of words which are anagrams of each other. Each sub-set should have at least two words. Words without any anagrams should not be included in the result.",
			syntax: ["="],
		},
		url: "https://www.4clojure.com/problem/77",
		number: 77,
	},
	{
		content: {
			title: "Reimplement Trampoline",
			tags: ["Difficulty: Medium", "Topics: core-functions"],
			code:
				"(= (letfn [(triple [x] #(sub-two (* 3 x)))\n          (sub-two [x] #(stop?(- x 2)))\n          (stop? [x] (if (> x 50) x #(triple x)))]\n    (__ triple 2))\n  82)\n\n\t\n(= (letfn [(my-even? [x] (if (zero? x) true #(my-odd? (dec x))))\n          (my-odd? [x] (if (zero? x) false #(my-even? (dec x))))]\n    (map (partial __ my-even?) (range 6)))\n  [true false true false true false])",
			desc: 'Reimplement the function described in "Intro to Trampoline".',
			restrictions: "trampoline",
			syntax: ["=", "*", ">", "dec", "map", "partial", "range"],
		},
		url: "https://www.4clojure.com/problem/78",
		number: 78,
	},
	{
		content: {
			title: "Triangle Minimal Path",
			tags: ["Difficulty: Hard", "Topics: graph-theory"],
			code:
				"(= 7 (__ '([1]\n          [2 4]\n         [5 1 4]\n        [2 3 4 5]))) ; 1->2->1->3\n\n\t\n(= 20 (__ '([3]\n           [2 4]\n          [1 9 3]\n         [9 9 2 4]\n        [4 6 6 7 8]\n       [5 7 3 5 1 4]))) ; 3->4->3->2->7->1",
			desc:
				"Write a function which calculates the sum of the minimal path through a triangle. The triangle is represented as a collection of vectors. The path should start at the top of the triangle and move to an adjacent number on the next row until the bottom of the triangle is reached.",
			syntax: ["="],
		},
		url: "https://www.4clojure.com/problem/79",
		number: 79,
	},
	{
		content: {
			title: "Perfect Numbers",
			tags: ["Difficulty: Medium", "Topics:"],
			code:
				"(= (__ 6) true)\n\n\t\n(= (__ 7) false)\n\n\t\n(= (__ 496) true)\n\n\t\n(= (__ 500) false)\n\n\t\n(= (__ 8128) true)",
			desc:
				'A number is "perfect" if the sum of its divisors equal the number itself. 6 is a perfect number because 1+2+3=6. Write a function which returns true for perfect numbers and false otherwise.',
			syntax: ["="],
		},
		url: "https://www.4clojure.com/problem/80",
		number: 80,
	},
	{
		content: {
			title: "Set Intersection",
			tags: ["Difficulty: Easy", "Topics: set-theory"],
			code:
				"(= (__ #{0 1 2 3} #{2 3 4 5}) #{2 3})\n\n\t\n(= (__ #{0 1 2} #{3 4 5}) #{})\n\n\t\n(= (__ #{:a :b :c :d} #{:c :e :a :f :d}) #{:a :c :d})",
			desc:
				"Write a function which returns the intersection of two sets. The intersection is the sub-set of items that each set has in common.",
			restrictions: "intersection",
			syntax: ["="],
		},
		url: "https://www.4clojure.com/problem/81",
		number: 81,
	},
	{
		content: {
			title: "Word Chains",
			tags: ["Difficulty: Hard", "Topics: seqs"],
			code:
				'(= true (__ #{"hat" "coat" "dog" "cat" "oat" "cot" "hot" "hog"}))\n\n\t\n(= false (__ #{"cot" "hot" "bat" "fat"}))\n\n\t\n(= false (__ #{"to" "top" "stop" "tops" "toss"}))\n\n\t\n(= true (__ #{"spout" "do" "pot" "pout" "spot" "dot"}))\n\n\t\n(= true (__ #{"share" "hares" "shares" "hare" "are"}))\n\n\t\n(= false (__ #{"share" "hares" "hare" "are"}))',
			desc:
				"A word chain consists of a set of words ordered so that each word differs by only one letter from the words directly before and after it. The one letter difference can be either an insertion, a deletion, or a substitution. Here is an example word chain:\n\ncat -> cot -> coat -> oat -> hat -> hot -> hog -> dog\n\nWrite a function which takes a sequence of words, and returns true if they can be arranged into one continous word chain, and false if they cannot.",
			syntax: ["="],
		},
		url: "https://www.4clojure.com/problem/82",
		number: 82,
	},
	{
		content: {
			title: "A Half-Truth",
			tags: ["Difficulty: Easy", "Topics:"],
			code:
				"(= false (__ false false))\n\n\t\n(= true (__ true false))\n\n\t\n(= false (__ true))\n\n\t\n(= true (__ false true false))\n\n\t\n(= false (__ true true true))\n\n\t\n(= true (__ true true true false))",
			desc:
				"Write a function which takes a variable number of booleans. Your function should return true if some of the parameters are true, but not all of the parameters are true. Otherwise your function should return false.",
			syntax: ["="],
		},
		url: "https://www.4clojure.com/problem/83",
		number: 83,
	},
	{
		content: {
			title: "Transitive Closure",
			tags: ["Difficulty: Hard", "Topics: set-theory"],
			code:
				'(let [divides #{[8 4] [9 3] [4 2] [27 9]}]\n  (= (__ divides) #{[4 2] [8 4] [8 2] [9 3] [27 9] [27 3]}))\n\n\t\n(let [more-legs\n      #{["cat" "man"] ["man" "snake"] ["spider" "cat"]}]\n  (= (__ more-legs)\n     #{["cat" "man"] ["cat" "snake"] ["man" "snake"]\n       ["spider" "cat"] ["spider" "man"] ["spider" "snake"]}))\n\n\t\n(let [progeny\n      #{["father" "son"] ["uncle" "cousin"] ["son" "grandson"]}]\n  (= (__ progeny)\n     #{["father" "son"] ["father" "grandson"]\n       ["uncle" "cousin"] ["son" "grandson"]}))',
			desc:
				"Write a function which generates the transitive closure of a binary relation. The relation will be represented as a set of 2 item vectors.",
			syntax: ["="],
		},
		url: "https://www.4clojure.com/problem/84",
		number: 84,
	},
	{
		content: {
			title: "Power Set",
			tags: ["Difficulty: Medium", "Topics: set-theory"],
			code:
				"(= (__ #{1 :a}) #{#{1 :a} #{:a} #{} #{1}})\n\n\t\n(= (__ #{}) #{#{}})\n\n\t\n(= (__ #{1 2 3})\n   #{#{} #{1} #{2} #{3} #{1 2} #{1 3} #{2 3} #{1 2 3}})\n\n\t\n(= (count (__ (into #{} (range 10)))) 1024)",
			desc:
				"Write a function which generates the power set of a given set. The power set of a set x is the set of all subsets of x, including the empty set and x itself.",
			syntax: ["=", "count", "into", "range"],
		},
		url: "https://www.4clojure.com/problem/85",
		number: 85,
	},
	{
		content: {
			title: "Happy numbers",
			tags: ["Difficulty: Medium", "Topics: math"],
			code: "(= (__ 7) true)\n\n\t\n(= (__ 986543210) true)\n\n\t\n(= (__ 2) false)\n\n\t\n(= (__ 3) false)",
			desc:
				"Happy numbers are positive integers that follow a particular formula: take each individual digit, square it, and then sum the squares to get a new number. Repeat with the new number and eventually, you might get to a number whose squared sum is 1. This is a happy number. An unhappy number (or sad number) is one that loops endlessly. Write a function that determines if a number is happy or not.",
			syntax: ["="],
		},
		url: "https://www.4clojure.com/problem/86",
		number: 86,
	},
	{
		content: {
			title: "Symmetric Difference",
			tags: ["Difficulty: Easy", "Topics: set-theory"],
			code:
				"(= (__ #{1 2 3 4 5 6} #{1 3 5 7}) #{2 4 6 7})\n\n\t\n(= (__ #{:a :b :c} #{}) #{:a :b :c})\n\n\t\n(= (__ #{} #{4 5 6}) #{4 5 6})\n\n\t\n(= (__ #{[1 2] [2 3]} #{[2 3] [3 4]}) #{[1 2] [3 4]})",
			desc:
				"Write a function which returns the symmetric difference of two sets. The symmetric difference is the set of items belonging to one but not both of the two sets.",
			syntax: ["="],
		},
		url: "https://www.4clojure.com/problem/88",
		number: 88,
	},
	{
		content: {
			title: "Graph Tour",
			tags: ["Difficulty: Hard", "Topics: graph-theory"],
			code:
				"(= true (__ [[:a :b]]))\n\n\t\n(= false (__ [[:a :a] [:b :b]]))\n\n\t\n(= false (__ [[:a :b] [:a :b] [:a :c] [:c :a]\n               [:a :d] [:b :d] [:c :d]]))\n\n\t\n(= true (__ [[1 2] [2 3] [3 4] [4 1]]))\n\n\t\n(= true (__ [[:a :b] [:a :c] [:c :b] [:a :e]\n              [:b :e] [:a :d] [:b :d] [:c :e]\n              [:d :e] [:c :f] [:d :f]]))\n\n\t\n(= false (__ [[1 2] [2 3] [2 4] [2 5]]))",
			desc:
				"Starting with a graph you must write a function that returns true if it is possible to make a tour of the graph in which every edge is visited exactly once.\n\nThe graph is represented by a vector of tuples, where each tuple represents a single edge.\n\nThe rules are:\n\n- You can start at any node.\n- You must visit each edge exactly once.\n- All edges are undirected.",
			syntax: ["="],
		},
		url: "https://www.4clojure.com/problem/89",
		number: 89,
	},
	{
		content: {
			title: "Cartesian Product",
			tags: ["Difficulty: Easy", "Topics: set-theory"],
			code:
				'(= (__ #{"ace" "king" "queen"} #{"♠" "♥" "♦" "♣"})\n   #{["ace"   "♠"] ["ace"   "♥"] ["ace"   "♦"] ["ace"   "♣"]\n     ["king"  "♠"] ["king"  "♥"] ["king"  "♦"] ["king"  "♣"]\n     ["queen" "♠"] ["queen" "♥"] ["queen" "♦"] ["queen" "♣"]})\n\n\t\n(= (__ #{1 2 3} #{4 5})\n   #{[1 4] [2 4] [3 4] [1 5] [2 5] [3 5]})\n\n\t\n(= 300 (count (__ (into #{} (range 10))\n                  (into #{} (range 30)))))',
			desc: "Write a function which calculates the Cartesian product of two sets.",
			syntax: ["=", "count", "into", "range"],
		},
		url: "https://www.4clojure.com/problem/90",
		number: 90,
	},
	{
		content: {
			title: "Graph Connectivity",
			tags: ["Difficulty: Hard", "Topics: graph-theory"],
			code:
				"(= true (__ #{[:a :a]}))\n\n\t\n(= true (__ #{[:a :b]}))\n\n\t\n(= false (__ #{[1 2] [2 3] [3 1]\n               [4 5] [5 6] [6 4]}))\n\n\t\n(= true (__ #{[1 2] [2 3] [3 1]\n              [4 5] [5 6] [6 4] [3 4]}))\n\n\t\n(= false (__ #{[:a :b] [:b :c] [:c :d]\n               [:x :y] [:d :a] [:b :e]}))\n\n\t\n(= true (__ #{[:a :b] [:b :c] [:c :d]\n              [:x :y] [:d :a] [:b :e] [:x :a]}))",
			desc:
				"Given a graph, determine whether the graph is connected. A connected graph is such that a path exists between any two given nodes.\n\n-Your function must return true if the graph is connected and false otherwise.\n\n-You will be given a set of tuples representing the edges of a graph. Each member of a tuple being a vertex/node in the graph.\n\n-Each edge is undirected (can be traversed either direction).",
			syntax: ["="],
		},
		url: "https://www.4clojure.com/problem/91",
		number: 91,
	},
	{
		content: {
			title: "Read Roman numerals",
			tags: ["Difficulty: Hard", "Topics: strings math"],
			code:
				'(= 14 (__ "XIV"))\n\n\t\n(= 827 (__ "DCCCXXVII"))\n\n\t\n(= 3999 (__ "MMMCMXCIX"))\n\n\t\n(= 48 (__ "XLVIII"))',
			desc:
				"Roman numerals are easy to recognize, but not everyone knows all the rules necessary to work with them. Write a function to parse a Roman-numeral string and return the number it represents.\n\nYou can assume that the input will be well-formed, in upper-case, and follow the subtractive principle. You don't need to handle any numbers greater than MMMCMXCIX (3999), the largest number representable with ordinary letters.",
			syntax: ["="],
		},
		url: "https://www.4clojure.com/problem/92",
		number: 92,
	},
	{
		content: {
			title: "Partially Flatten a Sequence",
			tags: ["Difficulty: Medium", "Topics: seqs"],
			code:
				'(= (__ [["Do"] ["Nothing"]])\n   [["Do"] ["Nothing"]])\n\n\t\n(= (__ [[[[:a :b]]] [[:c :d]] [:e :f]])\n   [[:a :b] [:c :d] [:e :f]])\n\n\t\n(= (__ \'((1 2)((3 4)((((5 6)))))))\n   \'((1 2)(3 4)(5 6)))',
			desc:
				"Write a function which flattens any nested combination of sequential things (lists, vectors, etc.), but maintains the lowest level sequential items. The result should be a sequence of sequences with only one level of nesting.",
			syntax: ["="],
		},
		url: "https://www.4clojure.com/problem/93",
		number: 93,
	},
	{
		content: {
			title: "Game of Life",
			tags: ["Difficulty: Hard", "Topics: game"],
			code:
				'(= (__ ["      "  \n        " ##   "\n        " ##   "\n        "   ## "\n        "   ## "\n        "      "])\n   ["      "  \n    " ##   "\n    " #    "\n    "    # "\n    "   ## "\n    "      "])\n\n\t\n(= (__ ["     "\n        "     "\n        " ### "\n        "     "\n        "     "])\n   ["     "\n    "  #  "\n    "  #  "\n    "  #  "\n    "     "])\n\n\t\n(= (__ ["      "\n        "      "\n        "  ### "\n        " ###  "\n        "      "\n        "      "])\n   ["      "\n    "   #  "\n    " #  # "\n    " #  # "\n    "  #   "\n    "      "])',
			desc:
				"The game of life is a cellular automaton devised by mathematician John Conway.\n\nThe 'board' consists of both live (#) and dead ( ) cells. Each cell interacts with its eight neighbours (horizontal, vertical, diagonal), and its next state is dependent on the following rules:\n\n1) Any live cell with fewer than two live neighbours dies, as if caused by under-population.\n2) Any live cell with two or three live neighbours lives on to the next generation.\n3) Any live cell with more than three live neighbours dies, as if by overcrowding.\n4) Any dead cell with exactly three live neighbours becomes a live cell, as if by reproduction.\n\nWrite a function that accepts a board, and returns a board representing the next generation of cells.",
			syntax: ["="],
		},
		url: "https://www.4clojure.com/problem/94",
		number: 94,
	},
	{
		content: {
			title: "To Tree, or not to Tree",
			tags: ["Difficulty: Easy", "Topics: trees"],
			code:
				"(= (__ '(:a (:b nil nil) nil))\n   true)\n\n\t\n(= (__ '(:a (:b nil nil)))\n   false)\n\n\t\n(= (__ [1 nil [2 [3 nil nil] [4 nil nil]]])\n   true)\n\n\t\n(= (__ [1 [2 nil nil] [3 nil nil] [4 nil nil]])\n   false)\n\n\t\n(= (__ [1 [2 [3 [4 nil nil] nil] nil] nil])\n   true)\n\n\t\n(= (__ [1 [2 [3 [4 false nil] nil] nil] nil])\n   false)\n\n\t\n(= (__ '(:a nil ()))\n   false)",
			desc:
				"Write a predicate which checks whether or not a given sequence represents a binary tree. Each node in the tree must have a value, a left child, and a right child.",
			syntax: ["="],
		},
		url: "https://www.4clojure.com/problem/95",
		number: 95,
	},
	{
		content: {
			title: "Beauty is Symmetry",
			tags: ["Difficulty: Easy", "Topics: trees"],
			code:
				"(= (__ '(:a (:b nil nil) (:b nil nil))) true)\n\n\t\n(= (__ '(:a (:b nil nil) nil)) false)\n\n\t\n(= (__ '(:a (:b nil nil) (:c nil nil))) false)\n\n\t\n(= (__ [1 [2 nil [3 [4 [5 nil nil] [6 nil nil]] nil]]\n          [2 [3 nil [4 [6 nil nil] [5 nil nil]]] nil]])\n   true)\n\n\t\n(= (__ [1 [2 nil [3 [4 [5 nil nil] [6 nil nil]] nil]]\n          [2 [3 nil [4 [5 nil nil] [6 nil nil]]] nil]])\n   false)\n\n\t\n(= (__ [1 [2 nil [3 [4 [5 nil nil] [6 nil nil]] nil]]\n          [2 [3 nil [4 [6 nil nil] nil]] nil]])\n   false)",
			desc:
				'Let us define a binary tree as "symmetric" if the left half of the tree is the mirror image of the right half of the tree. Write a predicate to determine whether or not a given binary tree is symmetric. (see To Tree, or not to Tree for a reminder on the tree representation we\'re using).',
			syntax: ["="],
		},
		url: "https://www.4clojure.com/problem/96",
		number: 96,
	},
	{
		content: {
			title: "Pascal's Triangle",
			tags: ["Difficulty: Easy", "Topics:"],
			code:
				"(= (__ 1) [1])\n\n\t\n(= (map __ (range 1 6))\n   [     [1]\n        [1 1]\n       [1 2 1]\n      [1 3 3 1]\n     [1 4 6 4 1]])\n\n\t\n(= (__ 11)\n   [1 10 45 120 210 252 210 120 45 10 1])",
			desc:
				"Pascal's triangle is a triangle of numbers computed using the following rules:\n\n- The first row is 1.\n- Each successive row is computed by adding together adjacent numbers in the row above, and adding a 1 to the beginning and end of the row.\n\nWrite a function which returns the nth row of Pascal's Triangle.",
			syntax: ["=", "map", "range"],
		},
		url: "https://www.4clojure.com/problem/97",
		number: 97,
	},
	{
		content: {
			title: "Equivalence Classes",
			tags: ["Difficulty: Medium", "Topics:"],
			code:
				"(= (__ #(* % %) #{-2 -1 0 1 2})\n   #{#{0} #{1 -1} #{2 -2}})\n\n\t\n(= (__ #(rem % 3) #{0 1 2 3 4 5 })\n   #{#{0 3} #{1 4} #{2 5}})\n\n\t\n(= (__ identity #{0 1 2 3 4})\n   #{#{0} #{1} #{2} #{3} #{4}})\n\n\t\n(= (__ (constantly true) #{0 1 2 3 4})\n   #{#{0 1 2 3 4}})",
			desc:
				"A function f defined on a domain D induces an equivalence relation on D, as follows: a is equivalent to b with respect to f if and only if (f a) is equal to (f b). Write a function with arguments f and D that computes the equivalence classes of D with respect to f.",
			syntax: ["=", "*", "rem", "identity", "constantly"],
		},
		url: "https://www.4clojure.com/problem/98",
		number: 98,
	},
	{
		content: {
			title: "Product Digits",
			tags: ["Difficulty: Easy", "Topics: math seqs"],
			code: "(= (__ 1 1) [1])\n\n\t\n(= (__ 99 9) [8 9 1])\n\n\t\n(= (__ 999 99) [9 8 9 0 1])",
			desc: "Write a function which multiplies two numbers and returns the result as a sequence of its digits.",
			syntax: ["="],
		},
		url: "https://www.4clojure.com/problem/99",
		number: 99,
	},
	{
		content: {
			title: "Least Common Multiple",
			tags: ["Difficulty: Easy", "Topics: math"],
			code:
				"(== (__ 2 3) 6)\n\n\t\n(== (__ 5 3 7) 105)\n\n\t\n(== (__ 1/3 2/5) 2)\n\n\t\n(== (__ 3/4 1/6) 3/2)\n\n\t\n(== (__ 7 5/7 2 3/5) 210)",
			desc:
				"Write a function which calculates the least common multiple. Your function should accept a variable number of positive integers or ratios.",
			syntax: ["=="],
		},
		url: "https://www.4clojure.com/problem/100",
		number: 100,
	},
	{
		content: {
			title: "Levenshtein Distance",
			tags: ["Difficulty: Hard", "Topics: seqs"],
			code:
				'(= (__ "kitten" "sitting") 3)\n\n\t\n(= (__ "closure" "clojure") (__ "clojure" "closure") 1)\n\n\t\n(= (__ "xyx" "xyyyx") 2)\n\n\t\n(= (__ "" "123456") 6)\n\n\t\n(= (__ "Clojure" "Clojure") (__ "" "") (__ [] []) 0)\n\n\t\n(= (__ [1 2 3 4] [0 2 3 4 5]) 2)\n\n\t\n(= (__ \'(:a :b :c :d) \'(:a :d)) 2)\n\n\t\n(= (__ "ttttattttctg" "tcaaccctaccat") 10)\n\n\t\n(= (__ "gaattctaatctc" "caaacaaaaaattt") 9)',
			desc:
				"Given two sequences x and y, calculate the Levenshtein distance of x and y, i. e. the minimum number of edits needed to transform x into y. The allowed edits are:\n\n- insert a single item\n- delete a single item\n- replace a single item with another item\n\nWARNING: Some of the test cases may timeout if you write an inefficient solution!",
			syntax: ["="],
		},
		url: "https://www.4clojure.com/problem/101",
		number: 101,
	},
	{
		content: {
			title: "intoCamelCase",
			tags: ["Difficulty: Medium", "Topics: strings"],
			code:
				'(= (__ "something") "something")\n\n\t\n(= (__ "multi-word-key") "multiWordKey")\n\n\t\n(= (__ "leaveMeAlone") "leaveMeAlone")',
			desc:
				"When working with java, you often need to create an object with fieldsLikeThis, but you'd rather work with a hashmap that has :keys-like-this until it's time to convert. Write a function which takes lower-case hyphen-separated strings and converts them to camel-case strings.",
			syntax: ["="],
		},
		url: "https://www.4clojure.com/problem/102",
		number: 102,
	},
	{
		content: {
			title: "Generating k-combinations",
			tags: ["Difficulty: Medium", "Topics: seqs combinatorics"],
			code:
				'(= (__ 1 #{4 5 6}) #{#{4} #{5} #{6}})\n\n\t\n(= (__ 10 #{4 5 6}) #{})\n\n\t\n(= (__ 2 #{0 1 2}) #{#{0 1} #{0 2} #{1 2}})\n\n\t\n(= (__ 3 #{0 1 2 3 4}) #{#{0 1 2} #{0 1 3} #{0 1 4} #{0 2 3} #{0 2 4}\n                         #{0 3 4} #{1 2 3} #{1 2 4} #{1 3 4} #{2 3 4}})\n\n\t\n(= (__ 4 #{[1 2 3] :a "abc" "efg"}) #{#{[1 2 3] :a "abc" "efg"}})\n\n\t\n(= (__ 2 #{[1 2 3] :a "abc" "efg"}) #{#{[1 2 3] :a} #{[1 2 3] "abc"} #{[1 2 3] "efg"}\n                                    #{:a "abc"} #{:a "efg"} #{"abc" "efg"}})',
			desc:
				"Given a sequence S consisting of n elements generate all k-combinations of S, i. e. generate all possible sets consisting of k distinct elements taken from S. The number of k-combinations for a sequence is equal to the binomial coefficient.",
			syntax: ["="],
		},
		url: "https://www.4clojure.com/problem/103",
		number: 103,
	},
	{
		content: {
			title: "Write Roman Numerals",
			tags: ["Difficulty: Medium", "Topics: strings math"],
			code:
				'(= "I" (__ 1))\n\n\t\n(= "XXX" (__ 30))\n\n\t\n(= "IV" (__ 4))\n\n\t\n(= "CXL" (__ 140))\n\n\t\n(= "DCCCXXVII" (__ 827))\n\n\t\n(= "MMMCMXCIX" (__ 3999))\n\n\t\n(= "XLVIII" (__ 48))',
			desc:
				"This is the inverse of Problem 92, but much easier. Given an integer smaller than 4000, return the corresponding roman numeral in uppercase, adhering to the subtractive principle.",
			syntax: ["="],
		},
		url: "https://www.4clojure.com/problem/104",
		number: 104,
	},
	{
		content: {
			title: "Identify keys and values",
			tags: ["Difficulty: Medium", "Topics: maps seqs"],
			code:
				"(= {} (__ []))\n\n\t\n(= {:a [1]} (__ [:a 1]))\n\n\t\n(= {:a [1], :b [2]} (__ [:a 1, :b 2]))\n\n\t\n(= {:a [1 2 3], :b [], :c [4]} (__ [:a 1 2 3 :b :c 4]))",
			desc:
				"Given an input sequence of keywords and numbers, create a map such that each key in the map is a keyword, and the value is a sequence of all the numbers (if any) between it and the next keyword in the sequence.",
			syntax: ["="],
		},
		url: "https://www.4clojure.com/problem/105",
		number: 105,
	},
	{
		content: {
			title: "Number Maze",
			tags: ["Difficulty: Hard", "Topics: numbers"],
			code:
				"(= 1 (__ 1 1))  ; 1\n\n\t\n(= 3 (__ 3 12)) ; 3 6 12\n\n\t\n(= 3 (__ 12 3)) ; 12 6 3\n\n\t\n(= 3 (__ 5 9))  ; 5 7 9\n\n\t\n(= 9 (__ 9 2))  ; 9 18 20 10 12 6 8 4 2\n\n\t\n(= 5 (__ 9 12)) ; 9 11 22 24 12",
			desc:
				'Given a pair of numbers, the start and end point, find a path between the two using only three possible operations:\ndouble\nhalve (odd numbers cannot be halved)\nadd 2\nFind the shortest path through the "maze". Because there are multiple shortest paths, you must return the length of the shortest path, not the path itself.',
			syntax: ["="],
		},
		url: "https://www.4clojure.com/problem/106",
		number: 106,
	},
	{
		content: {
			title: "Simple closures",
			tags: ["Difficulty: Easy", "Topics: higher-order-functions math"],
			code:
				"(= 256 ((__ 2) 16),\n       ((__ 8) 2))\n\n\t\n(= [1 8 27 64] (map (__ 3) [1 2 3 4]))\n\n\t\n(= [1 2 4 8 16] (map #((__ %) 2) [0 1 2 3 4]))",
			desc:
				"Lexical scope and first-class functions are two of the most basic building blocks of a functional language like Clojure. When you combine the two together, you get something very powerful called lexical closures. With these, you can exercise a great deal of control over the lifetime of your local bindings, saving their values for use later, long after the code you're running now has finished.\n\nIt can be hard to follow in the abstract, so let's build a simple closure. Given a positive integer n, return a function (f x) which computes xn. Observe that the effect of this is to preserve the value of n for use outside the scope in which it is defined.",
			syntax: ["=", "map"],
		},
		url: "https://www.4clojure.com/problem/107",
		number: 107,
	},
	{
		content: {
			title: "Lazy Searching",
			tags: ["Difficulty: Medium", "Topics: seqs sorting"],
			code:
				"(= 3 (__ [3 4 5]))\n\n\t\n(= 4 (__ [1 2 3 4 5 6 7] [0.5 3/2 4 19]))\n\n\t\n(= 7 (__ (range) (range 0 100 7/6) [2 3 5 7 11 13]))\n\n\t\n(= 64 (__ (map #(* % % %) (range)) ;; perfect cubes\n          (filter #(zero? (bit-and % (dec %))) (range)) ;; powers of 2\n          (iterate inc 20))) ;; at least as large as 20",
			desc:
				"Given any number of sequences, each sorted from smallest to largest, find the smallest single number which appears in all of the sequences. The sequences may be infinite, so be careful to search lazily.",
			syntax: ["=", "range", "map", "*", "filter", "bit-and", "dec", "iterate", "inc"],
		},
		url: "https://www.4clojure.com/problem/108",
		number: 108,
	},
	{
		content: {
			title: "Sequence of pronunciations",
			tags: ["Difficulty: Medium", "Topics: seqs"],
			code:
				"(= [[1 1] [2 1] [1 2 1 1]] (take 3 (__ [1])))\n\n\t\n(= [3 1 2 4] (first (__ [1 1 1 4 4])))\n\n\t\n(= [1 1 1 3 2 1 3 2 1 1] (nth (__ [1]) 6))\n\n\t\n(= 338 (count (nth (__ [3 2]) 15)))",
			desc:
				'Write a function that returns a lazy sequence of "pronunciations" of a sequence of numbers. A pronunciation of each element in the sequence consists of the number of repeating identical numbers and the number itself. For example, [1 1] is pronounced as [2 1] ("two ones"), which in turn is pronounced as [1 2 1 1] ("one two, one one").\n\nYour function should accept an initial sequence of numbers, and return an infinite lazy sequence of pronunciations, each element being a pronunciation of the previous element.',
			syntax: ["=", "take", "first", "nth", "count"],
		},
		url: "https://www.4clojure.com/problem/110",
		number: 110,
	},
	{
		content: {
			title: "Crossword puzzle",
			tags: ["Difficulty: Hard", "Topics: game"],
			code:
				'(= true  (__ "the" ["_ # _ _ e"]))\n\n\t\n(= false (__ "the" ["c _ _ _"\n                    "d _ # e"\n                    "r y _ _"]))\n\n\t\n(= true  (__ "joy" ["c _ _ _"\n                    "d _ # e"\n                    "r y _ _"]))\n\n\t\n(= false (__ "joy" ["c o n j"\n                    "_ _ y _"\n                    "r _ _ #"]))\n\n\t\n(= true  (__ "clojure" ["_ _ _ # j o y"\n                        "_ _ o _ _ _ _"\n                        "_ _ f _ # _ _"]))',
			desc:
				"Write a function that takes a string and a partially-filled crossword puzzle board, and determines if the input string can be legally placed onto the board.\n\nThe crossword puzzle board consists of a collection of partially-filled rows. Empty spaces are denoted with an underscore (_), unusable spaces are denoted with a hash symbol (#), and pre-filled spaces have a character in place; the whitespace characters are for legibility and should be ignored.\n\nFor a word to be legally placed on the board:\n- It may use empty spaces (underscores)\n- It may use but must not conflict with any pre-filled characters.\n- It must not use any unusable spaces (hashes).\n- There must be no empty spaces (underscores) or extra characters before or after the word (the word may be bound by unusable spaces though).\n- Characters are not case-sensitive.\n- Words may be placed vertically (proceeding top-down only), or horizontally (proceeding left-right only).",
			syntax: ["="],
		},
		url: "https://www.4clojure.com/problem/111",
		number: 111,
	},
	{
		content: {
			title: "Sequs Horribilis",
			tags: ["Difficulty: Medium", "Topics: seqs"],
			code:
				"(=  (__ 10 [1 2 [3 [4 5] 6] 7])\n   '(1 2 (3 (4))))\n\n\t\n(=  (__ 30 [1 2 [3 [4 [5 [6 [7 8]] 9]] 10] 11])\n   '(1 2 (3 (4 (5 (6 (7)))))))\n\n\t\n(=  (__ 9 (range))\n   '(0 1 2 3))\n\n\t\n(=  (__ 1 [[[[[1]]]]])\n   '(((((1))))))\n\n\t\n(=  (__ 0 [1 2 [3 [4 5] 6] 7])\n   '())\n\n\t\n(=  (__ 0 [0 0 [0 [0]]])\n   '(0 0 (0 (0))))\n\n\t\n(=  (__ 1 [-10 [1 [2 3 [4 5 [6 7 [8]]]]]])\n   '(-10 (1 (2 3 (4)))))",
			desc:
				"Create a function which takes an integer and a nested collection of integers as arguments. Analyze the elements of the input collection and return a sequence which maintains the nested structure, and which includes all elements starting from the head whose sum is less than or equal to the input integer.",
			syntax: ["=", "range"],
		},
		url: "https://www.4clojure.com/problem/112",
		number: 112,
	},
	{
		content: {
			title: "Making Data Dance",
			tags: ["Difficulty: Hard", "Topics: types"],
			code:
				'(= "1, 2, 3" (str (__ 2 1 3)))\n\n\t\n(= \'(2 1 3) (seq (__ 2 1 3)))\n\n\t\n(= \'(2 1 3) (seq (__ 2 1 3 3 1 2)))\n\n\t\n(= \'(1) (seq (apply __ (repeat 5 1))))\n\n\t\n(= "1, 1, 1, 1, 1" (str (apply __ (repeat 5 1))))\n\n\t\n(and (= nil (seq (__)))\n     (=  "" (str (__))))',
			desc:
				"Write a function that takes a variable number of integer arguments. If the output is coerced into a string, it should return a comma (and space) separated list of the inputs sorted smallest to largest. If the output is coerced into a sequence, it should return a seq of unique input elements in the same order as they were entered.",
			restrictions: "proxy",
			syntax: ["=", "str", "seq", "apply", "repeat"],
		},
		url: "https://www.4clojure.com/problem/113",
		number: 113,
	},
	{
		content: {
			title: "Global take-while",
			tags: ["Difficulty: Medium", "Topics: seqs higher-order-functions"],
			code:
				'(= [2 3 5 7 11 13]\n   (__ 4 #(= 2 (mod % 3))\n         [2 3 5 7 11 13 17 19 23]))\n\n\t\n(= ["this" "is" "a" "sentence"]\n   (__ 3 #(some #{\\i} %)\n         ["this" "is" "a" "sentence" "i" "wrote"]))\n\n\t\n(= ["this" "is"]\n   (__ 1 #{"a"}\n         ["this" "is" "a" "sentence" "i" "wrote"]))',
			desc:
				"take-while is great for filtering sequences, but it limited: you can only examine a single item of the sequence at a time. What if you need to keep track of some state as you go over the sequence?\n\nWrite a function which accepts an integer n, a predicate p, and a sequence. It should return a lazy sequence of items in the list up to, but not including, the nth item that satisfies the predicate.",
			syntax: ["=", "mod", "some"],
		},
		url: "https://www.4clojure.com/problem/114",
		number: 114,
	},
	{
		content: {
			title: "The Balance of N",
			tags: ["Difficulty: Medium", "Topics: math"],
			code:
				"(= true (__ 11))\n\n\t\n(= true (__ 121))\n\n\t\n(= false (__ 123))\n\n\t\n(= true (__ 0))\n\n\t\n(= false (__ 88099))\n\n\t\n(= true (__ 89098))\n\n\t\n(= true (__ 89089))\n\n\t\n(= (take 20 (filter __ (range)))\n   [0 1 2 3 4 5 6 7 8 9 11 22 33 44 55 66 77 88 99 101])",
			desc:
				"A balanced number is one whose component digits have the same sum on the left and right halves of the number. Write a function which accepts an integer n, and returns true iff n is balanced.",
			syntax: ["=", "take", "filter", "range"],
		},
		url: "https://www.4clojure.com/problem/115",
		number: 115,
	},
	{
		content: {
			title: "Prime Sandwich",
			tags: ["Difficulty: Medium", "Topics: math"],
			code: "(= false (__ 4))\n\n\t\n(= true (__ 563))\n\n\t\n(= 1103 (nth (filter __ (range)) 15))",
			desc:
				"A balanced prime is a prime number which is also the mean of the primes directly before and after it in the sequence of valid primes. Create a function which takes an integer n, and returns true iff it is a balanced prime.",
			syntax: ["=", "nth", "filter", "range"],
		},
		url: "https://www.4clojure.com/problem/116",
		number: 116,
	},
	{
		content: {
			title: "For Science!",
			tags: ["Difficulty: Hard", "Topics: game"],
			code:
				'(= true  (__ ["M   C"]))\n\n\t\n(= false (__ ["M # C"]))\n\n\t\n(= true  (__ ["#######"\n              "#     #"\n              "#  #  #"\n              "#M # C#"\n              "#######"]))\n\n\t\n(= false (__ ["########"\n              "#M  #  #"\n              "#   #  #"\n              "# # #  #"\n              "#   #  #"\n              "#  #   #"\n              "#  # # #"\n              "#  #   #"\n              "#  #  C#"\n              "########"]))\n\n\t\n(= false (__ ["M     "\n              "      "\n              "      "\n              "      "\n              "    ##"\n              "    #C"]))\n\n\t\n(= true  (__ ["C######"\n              " #     "\n              " #   # "\n              " #   #M"\n              "     # "]))\n\n\t\n(= true  (__ ["C# # # #"\n              "        "\n              "# # # # "\n              "        "\n              " # # # #"\n              "        "\n              "# # # #M"]))',
			desc:
				"A mad scientist with tenure has created an experiment tracking mice in a maze. Several mazes have been randomly generated, and you've been tasked with writing a program to determine the mazes in which it's possible for the mouse to reach the cheesy endpoint. Write a function which accepts a maze in the form of a collection of rows, each row is a string where:\nspaces represent areas where the mouse can walk freely\nhashes (#) represent walls where the mouse can not walk\nM represents the mouse's starting point\nC represents the cheese which the mouse must reach\nThe mouse is not allowed to travel diagonally in the maze (only up/down/left/right), nor can he escape the edge of the maze. Your function must return true iff the maze is solvable by the mouse.",
			syntax: ["="],
		},
		url: "https://www.4clojure.com/problem/117",
		number: 117,
	},
	{
		content: {
			title: "Re-implement Map",
			tags: ["Difficulty: Easy", "Topics: core-seqs"],
			code:
				"(= [3 4 5 6 7]\n   (__ inc [2 3 4 5 6]))\n\n\t\n(= (repeat 10 nil)\n   (__ (fn [_] nil) (range 10)))\n\n\t\n(= [1000000 1000001]\n   (->> (__ inc (range))\n        (drop (dec 1000000))\n        (take 2)))",
			desc:
				"Map is one of the core elements of a functional programming language. Given a function f and an input sequence s, return a lazy sequence of (f x) for each element x in s.",
			restrictions: "map\nmap-indexed\nmapcat\nfor",
			syntax: ["=", "inc", "repeat", "fn", "range", ">", "drop", "dec", "take"],
		},
		url: "https://www.4clojure.com/problem/118",
		number: 118,
	},
	{
		content: {
			title: "Win at Tic-Tac-Toe",
			tags: ["Difficulty: Hard", "Topics: game"],
			code:
				"(= (__ :x [[:o :e :e] \n           [:o :x :o] \n           [:x :x :e]])\n   #{[2 2] [0 1] [0 2]})\n\n\t\n(= (__ :x [[:x :o :o] \n           [:x :x :e] \n           [:e :o :e]])\n   #{[2 2] [1 2] [2 0]})\n\n\t\n(= (__ :x [[:x :e :x] \n           [:o :x :o] \n           [:e :o :e]])\n   #{[2 2] [0 1] [2 0]})\n\n\t\n(= (__ :x [[:x :x :o] \n           [:e :e :e] \n           [:e :e :e]])\n   #{})\n\n\t\n(= (__ :o [[:x :x :o] \n           [:o :e :o] \n           [:x :e :e]])\n   #{[2 2] [1 1]})",
			desc:
				"As in Problem 73, a tic-tac-toe board is represented by a two dimensional vector. X is represented by :x, O is represented by :o, and empty is represented by :e. Create a function that accepts a game piece and board as arguments, and returns a set (possibly empty) of all valid board placements of the game piece which would result in an immediate win.\n\nBoard coordinates should be as in calls to get-in. For example, [0 1] is the topmost row, center position.",
			syntax: ["="],
		},
		url: "https://www.4clojure.com/problem/119",
		number: 119,
	},
	{
		content: {
			title: "Sum of square of digits",
			tags: ["Difficulty: Easy", "Topics: math"],
			code:
				"(= 8 (__ (range 10)))\n\n\t\n(= 19 (__ (range 30)))\n\n\t\n(= 50 (__ (range 100)))\n\n\t\n(= 50 (__ (range 1000)))",
			desc:
				"Write a function which takes a collection of integers as an argument. Return the count of how many elements are smaller than the sum of their squared component digits. For example: 10 is larger than 1 squared plus 0 squared; whereas 15 is smaller than 1 squared plus 5 squared.",
			syntax: ["=", "range"],
		},
		url: "https://www.4clojure.com/problem/120",
		number: 120,
	},
	{
		content: {
			title: "Universal Computation Engine",
			tags: ["Difficulty: Medium", "Topics: functions"],
			code:
				"(= 2 ((__ '(/ a b))\n      '{b 8 a 16}))\n\n\t\n(= 8 ((__ '(+ a b 2))\n      '{a 2 b 4}))\n\n\t\n(= [6 0 -4]\n     (map (__ '(* (+ 2 a)\n                  (- 10 b)))\n            '[{a 1 b 8}\n              {b 5 a -2}\n              {a 2 b 11}]))\n\n\t\n(= 1 ((__ '(/ (+ x 2)\n              (* 3 (+ y 1))))\n      '{x 4 y 1}))",
			desc:
				"Given a mathematical formula in prefix notation, return a function that calculates the value of the formula. The formula can contain nested calculations using the four basic mathematical operators, numeric constants, and symbols representing variables. The returned function has to accept a single parameter containing the map of variable names to their values.",
			restrictions: "eval\nresolve",
			syntax: ["=", "/", "map", "*"],
		},
		url: "https://www.4clojure.com/problem/121",
		number: 121,
	},
	{
		content: {
			title: "Read a binary number",
			tags: ["Difficulty: Easy", "Topics:"],
			code:
				'(= 0     (__ "0"))\n\n\t\n(= 7     (__ "111"))\n\n\t\n(= 8     (__ "1000"))\n\n\t\n(= 9     (__ "1001"))\n\n\t\n(= 255   (__ "11111111"))\n\n\t\n(= 1365  (__ "10101010101"))\n\n\t\n(= 65535 (__ "1111111111111111"))',
			desc: "Convert a binary number, provided in the form of a string, to its numerical value.",
			syntax: ["="],
		},
		url: "https://www.4clojure.com/problem/122",
		number: 122,
	},
	{
		content: {
			title: "Analyze Reversi",
			tags: ["Difficulty: Hard", "Topics: game"],
			code:
				"(= {[1 3] #{[1 2]}, [0 2] #{[1 2]}, [3 1] #{[2 1]}, [2 0] #{[2 1]}}\n   (__ '[[e e e e]\n         [e w b e]\n         [e b w e]\n         [e e e e]] 'w))\n\n\t\n(= {[3 2] #{[2 2]}, [3 0] #{[2 1]}, [1 0] #{[1 1]}}\n   (__ '[[e e e e]\n         [e w b e]\n         [w w w e]\n         [e e e e]] 'b))\n\n\t\n(= {[0 3] #{[1 2]}, [1 3] #{[1 2]}, [3 3] #{[2 2]}, [2 3] #{[2 2]}}\n   (__ '[[e e e e]\n         [e w b e]\n         [w w b e]\n         [e e b e]] 'w))\n\n\t\n(= {[0 3] #{[2 1] [1 2]}, [1 3] #{[1 2]}, [2 3] #{[2 1] [2 2]}}\n   (__ '[[e e w e]\n         [b b w e]\n         [b w w e]\n         [b w w w]] 'b))",
			desc:
				"Reversi is normally played on an 8 by 8 board. In this problem, a 4 by 4 board is represented as a two-dimensional vector with black, white, and empty pieces represented by 'b, 'w, and 'e, respectively. Create a function that accepts a game board and color as arguments, and returns a map of legal moves for that color. Each key should be the coordinates of a legal move, and its value a set of the coordinates of the pieces flipped by that move.\n\nBoard coordinates should be as in calls to get-in. For example, [0 1] is the topmost row, second column from the left.",
			syntax: ["="],
		},
		url: "https://www.4clojure.com/problem/124",
		number: 124,
	},
	{
		content: {
			title: "Gus' Quinundrum",
			tags: ["Difficulty: Hard", "Topics: logic fun brain-teaser"],
			code: "(= (str '__) (__))",
			desc:
				"Create a function of no arguments which returns a string that is an exact copy of the function itself.\n\nHint: read this if you get stuck (this question is harder than it first appears); but it's worth the effort to solve it independently if you can!\n\nFun fact: Gus is the name of the 4Clojure dragon.",
			syntax: ["=", "str"],
		},
		url: "https://www.4clojure.com/problem/125",
		number: 125,
	},
	{
		content: {
			title: "Through the Looking Class",
			tags: ["Difficulty: Easy", "Topics: fun brain-teaser"],
			code: "(let [x __]\n  (and (= (class x) x) x))",
			desc: "Enter a value which satisfies the following:",
			syntax: ["=", "class"],
		},
		url: "https://www.4clojure.com/problem/126",
		number: 126,
	},
	{
		content: {
			title: "Love Triangle",
			tags: ["Difficulty: Hard", "Topics: search data-juggling"],
			code:
				"(= 10 (__ [15 15 15 15 15]))\n; 1111      1111\n; 1111      *111\n; 1111  ->  **11\n; 1111      ***1\n; 1111      ****\n\n\t\n(= 15 (__ [1 3 7 15 31]))\n; 00001      0000*\n; 00011      000**\n; 00111  ->  00***\n; 01111      0****\n; 11111      *****\n\n\t\n(= 3 (__ [3 3]))\n; 11      *1\n; 11  ->  **\n\n\t\n(= 4 (__ [7 3]))\n; 111      ***\n; 011  ->  0*1\n\n\t\n(= 6 (__ [17 22 6 14 22]))\n; 10001      10001\n; 10110      101*0\n; 00110  ->  00**0\n; 01110      0***0\n; 10110      10110\n\n\t\n(= 9 (__ [18 7 14 14 6 3]))\n; 10010      10010\n; 00111      001*0\n; 01110      01**0\n; 01110  ->  0***0\n; 00110      00**0\n; 00011      000*1\n\n\t\n(= nil (__ [21 10 21 10]))\n; 10101      10101\n; 01010      01010\n; 10101  ->  10101\n; 01010      01010\n\n\t\n(= nil (__ [0 31 0 31 0]))\n; 00000      00000\n; 11111      11111\n; 00000  ->  00000\n; 11111      11111\n; 00000      00000",
			desc:
				"Everyone loves triangles, and it's easy to understand why—they're so wonderfully symmetric (except scalenes, they suck).\n\nYour passion for triangles has led you to become a miner (and part-time Clojure programmer) where you work all day to chip out isosceles-shaped minerals from rocks gathered in a nearby open-pit mine. There are too many rocks coming from the mine to harvest them all so you've been tasked with writing a program to analyze the mineral patterns of each rock, and determine which rocks have the biggest minerals.\n\nSomeone has already written a computer-vision system for the mine. It images each rock as it comes into the processing centre and creates a cross-sectional bitmap of mineral (1) and rock (0) concentrations for each one.\n\nYou must now create a function which accepts a collection of integers, each integer when read in base-2 gives the bit-representation of the rock (again, 1s are mineral and 0s are worthless scalene-like rock). You must return the cross-sectional area of the largest harvestable mineral from the input rock, as follows:\n\nThe minerals only have smooth faces when sheared vertically or horizontally from the rock's cross-section\nThe mine is only concerned with harvesting isosceles triangles (such that one or two sides can be sheared)\nIf only one face of the mineral is sheared, its opposing vertex must be a point (ie. the smooth face must be of odd length), and its two equal-length sides must intersect the shear face at 45° (ie. those sides must cut even-diagonally)\nThe harvested mineral may not contain any traces of rock\nThe mineral may lie in any orientation in the plane\nArea should be calculated as the sum of 1s that comprise the mineral\nMinerals must have a minimum of three measures of area to be harvested\nIf no minerals can be harvested from the rock, your function should return nil",
			syntax: ["="],
		},
		url: "https://www.4clojure.com/problem/127",
		number: 127,
	},
	{
		content: {
			title: "Recognize Playing Cards",
			tags: ["Difficulty: Easy", "Topics: strings game"],
			code:
				'(= {:suit :diamond :rank 10} (__ "DQ"))\n\n\t\n(= {:suit :heart :rank 3} (__ "H5"))\n\n\t\n(= {:suit :club :rank 12} (__ "CA"))\n\n\t\n(= (range 13) (map (comp :rank __ str)\n                   \'[S2 S3 S4 S5 S6 S7\n                     S8 S9 ST SJ SQ SK SA]))',
			desc:
				'A standard American deck of playing cards has four suits - spades, hearts, diamonds, and clubs - and thirteen cards in each suit. Two is the lowest rank, followed by other integers up to ten; then the jack, queen, king, and ace.\n\nIt\'s convenient for humans to represent these cards as suit/rank pairs, such as H5 or DQ: the heart five and diamond queen respectively. But these forms are not convenient for programmers, so to write a card game you need some way to parse an input string into meaningful components. For purposes of determining rank, we will define the cards to be valued from 0 (the two) to 12 (the ace)\n\nWrite a function which converts (for example) the string "SJ" into a map of {:suit :spade, :rank 9}. A ten will always be represented with the single character "T", rather than the two characters "10".',
			syntax: ["=", "range", "map", "comp", "str"],
		},
		url: "https://www.4clojure.com/problem/128",
		number: 128,
	},
	{
		content: {
			title: "Tree reparenting",
			tags: ["Difficulty: Hard", "Topics: tree"],
			code:
				"(= '(n)\n   (__ 'n '(n)))\n\n\t\n(= '(a (t (e)))\n   (__ 'a '(t (e) (a))))\n\n\t\n(= '(e (t (a)))\n   (__ 'e '(a (t (e)))))\n\n\t\n(= '(a (b (c)))\n   (__ 'a '(c (b (a)))))\n\n\t\n(= '(d \n      (b\n        (c)\n        (e)\n        (a \n          (f \n            (g) \n            (h)))))\n  (__ 'd '(a\n            (b \n              (c) \n              (d) \n              (e))\n            (f \n              (g)\n              (h)))))\n\n\t\n(= '(c \n      (d) \n      (e) \n      (b\n        (f \n          (g) \n          (h))\n        (a\n          (i\n          (j\n            (k)\n            (l))\n          (m\n            (n)\n            (o))))))\n   (__ 'c '(a\n             (b\n               (c\n                 (d)\n                 (e))\n               (f\n                 (g)\n                 (h)))\n             (i\n               (j\n                 (k)\n                 (l))\n               (m\n                 (n)\n                 (o))))))",
			desc:
				'Every node of a tree is connected to each of its children as well as its parent. One can imagine grabbing one node of a tree and dragging it up to the root position, leaving all connections intact. For example, below on the left is a binary tree. By pulling the "c" node up to the root, we obtain the tree on the right.\n\nNote it is no longer binary as "c" had three connections total -- two children and one parent. Each node is represented as a vector, which always has at least one element giving the name of the node as a symbol. Subsequent items in the vector represent the children of the node. Because the children are ordered it\'s important that the tree you return keeps the children of each node in order and that the old parent node, if any, is appended on the right. Your function will be given two args -- the name of the node that should become the new root, and the tree to transform.',
			syntax: ["="],
		},
		url: "https://www.4clojure.com/problem/130",
		number: 130,
	},
	{
		content: {
			title: "Sum Some Set Subsets",
			tags: ["Difficulty: Medium", "Topics: math"],
			code:
				"(= true  (__ #{-1 1 99} \n             #{-2 2 888}\n             #{-3 3 7777})) ; ex. all sets have a subset which sums to zero\n\n\t\n(= false (__ #{1}\n             #{2}\n             #{3}\n             #{4}))\n\n\t\n(= true  (__ #{1}))\n\n\t\n(= false (__ #{1 -3 51 9} \n             #{0} \n             #{9 2 81 33}))\n\n\t\n(= true  (__ #{1 3 5}\n             #{9 11 4}\n             #{-3 12 3}\n             #{-3 4 -2 10}))\n\n\t\n(= false (__ #{-1 -2 -3 -4 -5 -6}\n             #{1 2 3 4 5 6 7 8 9}))\n\n\t\n(= true  (__ #{1 3 5 7}\n             #{2 4 6 8}))\n\n\t\n(= true  (__ #{-1 3 -5 7 -9 11 -13 15}\n             #{1 -3 5 -7 9 -11 13 -15}\n             #{1 -1 2 -2 4 -4 8 -8}))\n\n\t\n(= true  (__ #{-10 9 -8 7 -6 5 -4 3 -2 1}\n             #{10 -9 8 -7 6 -5 4 -3 2 -1}))",
			desc:
				"Given a variable number of sets of integers, create a function which returns true iff all of the sets have a non-empty subset with an equivalent summation.",
			syntax: ["="],
		},
		url: "https://www.4clojure.com/problem/131",
		number: 131,
	},
	{
		content: {
			title: "Insert between two items",
			tags: ["Difficulty: Medium", "Topics: seqs core-functions"],
			code:
				"(= '(1 :less 6 :less 7 4 3) (__ < :less [1 6 7 4 3]))\n\n\t\n(= '(2) (__ > :more [2]))\n\n\t\n(= [0 1 :x 2 :x 3 :x 4]  (__ #(and (pos? %) (< % %2)) :x (range 5)))\n\n\t\n(empty? (__ > :more ()))\n\n\t\n(= [0 1 :same 1 2 3 :same 5 8 13 :same 21]\n   (take 12 (->> [0 1]\n                 (iterate (fn [[a b]] [b (+ a b)]))\n                 (map first) ; fibonacci numbers\n                 (__ (fn [a b] ; both even or both odd\n                       (= (mod a 2) (mod b 2)))\n                     :same))))",
			desc:
				"Write a function that takes a two-argument predicate, a value, and a collection; and returns a new collection where the value is inserted between every two items that satisfy the predicate.",
			syntax: ["=", "<", ">", "range", "empty", "take", "iterate", "fn", "map", "first", "mod"],
		},
		url: "https://www.4clojure.com/problem/132",
		number: 132,
	},
	{
		content: {
			title: "A nil key",
			tags: ["Difficulty: Elementary", "Topics: maps"],
			code:
				"(true?  (__ :a {:a nil :b 2}))\n\n\t\n(false? (__ :b {:a nil :b 2}))\n\n\t\n(false? (__ :c {:a nil :b 2}))",
			desc:
				"Write a function which, given a key and map, returns true iff the map contains an entry with that key and its value is nil.",
		},
		url: "https://www.4clojure.com/problem/134",
		number: 134,
	},
	{
		content: {
			title: "Infix Calculator",
			tags: ["Difficulty: Easy", "Topics: higher-order-functions math"],
			code:
				"(= 7  (__ 2 + 5))\n\n\t\n(= 42 (__ 38 + 48 - 2 / 2))\n\n\t\n(= 8  (__ 10 / 2 - 1 * 2))\n\n\t\n(= 72 (__ 20 / 2 + 2 + 4 + 8 - 6 - 10 * 9))",
			desc:
				"Your friend Joe is always whining about Lisps using the prefix notation for math. Show him how you could easily write a function that does math using the infix notation. Is your favorite language that flexible, Joe? Write a function that accepts a variable length mathematical expression consisting of numbers and the operations +, -, *, and /. Assume a simple calculator that does not do precedence and instead just calculates left to right.",
			syntax: ["=", "/", "*"],
		},
		url: "https://www.4clojure.com/problem/135",
		number: 135,
	},
	{
		content: {
			title: "Digits and bases",
			tags: ["Difficulty: Medium", "Topics: math"],
			code:
				"(= [1 2 3 4 5 0 1] (__ 1234501 10))\n\n\t\n(= [0] (__ 0 11))\n\n\t\n(= [1 0 0 1] (__ 9 2))\n\n\t\n(= [1 0] (let [n (rand-int 100000)](__ n n)))\n\n\t\n(= [16 18 5 24 15 1] (__ Integer/MAX_VALUE 42))",
			desc:
				"Write a function which returns a sequence of digits of a non-negative number (first argument) in numerical system with an arbitrary base (second argument). Digits should be represented with their integer values, e.g. 15 would be [1 5] in base 10, [1 1 1 1] in base 2 and [15] in base 16.",
			syntax: ["=", "rand-int"],
		},
		url: "https://www.4clojure.com/problem/137",
		number: 137,
	},
	{
		content: {
			title: "Squares Squared",
			tags: ["Difficulty: Hard", "Topics: data-juggling"],
			code:
				'(= (__ 2 2) ["2"])\n\n\t\n(= (__ 2 4) [" 2 "\n             "* 4"\n             " * "])\n\n\t\n(= (__ 3 81) [" 3 "\n              "1 9"\n              " 8 "])\n\n\t\n(= (__ 4 20) [" 4 "\n              "* 1"\n              " 6 "])\n\n\t\n(= (__ 2 256) ["  6  "\n               " 5 * "\n               "2 2 *"\n               " 6 4 "\n               "  1  "])\n\n\t\n(= (__ 10 10000) ["   0   "\n                  "  1 0  "\n                  " 0 1 0 "\n                  "* 0 0 0"\n                  " * 1 * "\n                  "  * *  "\n                  "   *   "])',
			desc:
				"Create a function of two integer arguments: the start and end, respectively. You must create a vector of strings which renders a 45° rotated square of integers which are successive squares from the start point up to and including the end point. If a number comprises multiple digits, wrap them around the shape individually. If there are not enough digits to complete the shape, fill in the rest with asterisk characters. The direction of the drawing should be clockwise, starting from the center of the shape and working outwards, with the initial direction being down and to the right.",
			syntax: ["="],
		},
		url: "https://www.4clojure.com/problem/138",
		number: 138,
	},
	{
		content: {
			title: "Veitch, Please!",
			tags: ["Difficulty: Hard", "Topics: math circuit-design"],
			code:
				"(= (__ #{#{'a 'B 'C 'd}\n         #{'A 'b 'c 'd}\n         #{'A 'b 'c 'D}\n         #{'A 'b 'C 'd}\n         #{'A 'b 'C 'D}\n         #{'A 'B 'c 'd}\n         #{'A 'B 'c 'D}\n         #{'A 'B 'C 'd}})\n   #{#{'A 'c} \n     #{'A 'b}\n     #{'B 'C 'd}})\n\n\t\n(= (__ #{#{'A 'B 'C 'D}\n         #{'A 'B 'C 'd}})\n   #{#{'A 'B 'C}})\n\n\t\n(= (__ #{#{'a 'b 'c 'd}\n         #{'a 'B 'c 'd}\n         #{'a 'b 'c 'D}\n         #{'a 'B 'c 'D}\n         #{'A 'B 'C 'd}\n         #{'A 'B 'C 'D}\n         #{'A 'b 'C 'd}\n         #{'A 'b 'C 'D}})\n   #{#{'a 'c}\n     #{'A 'C}})\n\n\t\n(= (__ #{#{'a 'b 'c} \n         #{'a 'B 'c}\n         #{'a 'b 'C}\n         #{'a 'B 'C}})\n   #{#{'a}})\n\n\t\n(= (__ #{#{'a 'B 'c 'd}\n         #{'A 'B 'c 'D}\n         #{'A 'b 'C 'D}\n         #{'a 'b 'c 'D}\n         #{'a 'B 'C 'D}\n         #{'A 'B 'C 'd}})\n   #{#{'a 'B 'c 'd}\n     #{'A 'B 'c 'D}\n     #{'A 'b 'C 'D}\n     #{'a 'b 'c 'D}\n     #{'a 'B 'C 'D}\n     #{'A 'B 'C 'd}})\n\n\t\n(= (__ #{#{'a 'b 'c 'd}\n         #{'a 'B 'c 'd}\n         #{'A 'B 'c 'd}\n         #{'a 'b 'c 'D}\n         #{'a 'B 'c 'D}\n         #{'A 'B 'c 'D}})\n   #{#{'a 'c}\n     #{'B 'c}})\n\n\t\n(= (__ #{#{'a 'B 'c 'd}\n         #{'A 'B 'c 'd}\n         #{'a 'b 'c 'D}\n         #{'a 'b 'C 'D}\n         #{'A 'b 'c 'D}\n         #{'A 'b 'C 'D}\n         #{'a 'B 'C 'd}\n         #{'A 'B 'C 'd}})\n   #{#{'B 'd}\n     #{'b 'D}})\n\n\t\n(= (__ #{#{'a 'b 'c 'd}\n         #{'A 'b 'c 'd}\n         #{'a 'B 'c 'D}\n         #{'A 'B 'c 'D}\n         #{'a 'B 'C 'D}\n         #{'A 'B 'C 'D}\n         #{'a 'b 'C 'd}\n         #{'A 'b 'C 'd}})\n   #{#{'B 'D}\n     #{'b 'd}})",
			desc:
				"Create a function which accepts as input a boolean algebra function in the form of a set of sets, where the inner sets are collections of symbols corresponding to the input boolean variables which satisfy the function (the inputs of the inner sets are conjoint, and the sets themselves are disjoint... also known as canonical minterms). Note: capitalized symbols represent truth, and lower-case symbols represent negation of the inputs. Your function must return the minimal function which is logically equivalent to the input.\n\nPS — You may want to give this a read before proceeding: K-Maps",
			syntax: ["="],
		},
		url: "https://www.4clojure.com/problem/140",
		number: 140,
	},
	{
		content: {
			title: "Tricky card games",
			tags: ["Difficulty: Medium", "Topics: game cards"],
			code:
				"(let [notrump (__ nil)]\n  (and (= {:suit :club :rank 9}  (notrump [{:suit :club :rank 4}\n                                           {:suit :club :rank 9}]))\n       (= {:suit :spade :rank 2} (notrump [{:suit :spade :rank 2}\n                                           {:suit :club :rank 10}]))))\n\n\t\n(= {:suit :club :rank 10} ((__ :club) [{:suit :spade :rank 2}\n                                       {:suit :club :rank 10}]))\n\n\t\n(= {:suit :heart :rank 8}\n   ((__ :heart) [{:suit :heart :rank 6} {:suit :heart :rank 8}\n                 {:suit :diamond :rank 10} {:suit :heart :rank 4}]))",
			desc:
				'In trick-taking card games such as bridge, spades, or hearts, cards are played in groups known as "tricks" - each player plays a single card, in order; the first player is said to "lead" to the trick. After all players have played, one card is said to have "won" the trick. How the winner is determined will vary by game, but generally the winner is the highest card played in the suit that was led. Sometimes (again varying by game), a particular suit will be designated "trump", meaning that its cards are more powerful than any others: if there is a trump suit, and any trumps are played, then the highest trump wins regardless of what was led.\n\nYour goal is to devise a function that can determine which of a number of cards has won a trick. You should accept a trump suit, and return a function winner. Winner will be called on a sequence of cards, and should return the one which wins the trick. Cards will be represented in the format returned by Problem 128, Recognize Playing Cards: a hash-map of :suit and a numeric :rank. Cards with a larger rank are stronger.',
			syntax: ["="],
		},
		url: "https://www.4clojure.com/problem/141",
		number: 141,
	},
	{
		content: {
			title: "dot product",
			tags: ["Difficulty: Easy", "Topics: seqs math"],
			code:
				"(= 0 (__ [0 1 0] [1 0 0]))\n\n\t\n(= 3 (__ [1 1 1] [1 1 1]))\n\n\t\n(= 32 (__ [1 2 3] [4 5 6]))\n\n\t\n(= 256 (__ [2 5 6] [100 10 1]))",
			desc:
				"Create a function that computes the dot product of two sequences. You may assume that the vectors will have the same length.",
			syntax: ["="],
		},
		url: "https://www.4clojure.com/problem/143",
		number: 143,
	},
	{
		content: {
			title: "Oscilrate",
			tags: ["Difficulty: Medium", "Topics: sequences"],
			code:
				"(= (take 3 (__ 3.14 int double)) [3.14 3 3.0])\n\n\t\n(= (take 5 (__ 3 #(- % 3) #(+ 5 %))) [3 0 5 2 7])\n\n\t\n(= (take 12 (__ 0 inc dec inc dec inc)) [0 1 0 1 0 1 2 1 2 1 2 3])",
			desc:
				"Write an oscillating iterate: a function that takes an initial value and a variable number of functions. It should return a lazy sequence of the functions applied to the value in order, restarting from the first function after it hits the end.",
			syntax: ["=", "take", "int", "double", "inc", "dec"],
		},
		url: "https://www.4clojure.com/problem/144",
		number: 144,
	},
	{
		content: {
			title: "For the win",
			tags: ["Difficulty: Elementary", "Topics: core-functions seqs"],
			code:
				"(= __ (for [x (range 40)\n            :when (= 1 (rem x 4))]\n        x))\n\n\t\n(= __ (for [x (iterate #(+ 4 %) 0)\n            :let [z (inc x)]\n            :while (< z 40)]\n        z))\n\n\t\n(= __ (for [[x y] (partition 2 (range 20))]\n        (+ x y)))",
			desc:
				"Clojure's for macro is a tremendously versatile mechanism for producing a sequence based on some other sequence(s). It can take some time to understand how to use it properly, but that investment will be paid back with clear, concise sequence-wrangling later. With that in mind, read over these for expressions and try to see how each of them produces the same result.",
			syntax: ["=", "range", "rem", "iterate", "inc", "<", "partition", ">", "filter", "mod"],
		},
		url: "https://www.4clojure.com/problem/145",
		number: 145,
	},
	{
		content: {
			title: "Trees into tables",
			tags: ["Difficulty: Easy", "Topics: seqs maps"],
			code:
				"(= (__ '{a {p 1, q 2}\n         b {m 3, n 4}})\n   '{[a p] 1, [a q] 2\n     [b m] 3, [b n] 4})\n\n\t\n(= (__ '{[1] {a b c d}\n         [2] {q r s t u v w x}})\n   '{[[1] a] b, [[1] c] d,\n     [[2] q] r, [[2] s] t,\n     [[2] u] v, [[2] w] x})\n\n\t\n(= (__ '{m {1 [a b c] 3 nil}})\n   '{[m 1] [a b c], [m 3] nil})",
			desc:
				'Because Clojure\'s for macro allows you to "walk" over multiple sequences in a nested fashion, it is excellent for transforming all sorts of sequences. If you don\'t want a sequence as your final output (say you want a map), you are often still best-off using for, because you can produce a sequence and feed it into a map, for example.\n\nFor this problem, your goal is to "flatten" a map of hashmaps. Each key in your output map should be the "path"1 that you would have to take in the original map to get to a value, so for example {1 {2 3}} should result in {[1 2] 3}. You only need to flatten one level of maps: if one of the values is a map, just leave it alone.\n\n1 That is, (get-in original [k1 k2]) should be the same as (get result [k1 k2])',
			syntax: ["="],
		},
		url: "https://www.4clojure.com/problem/146",
		number: 146,
	},
	{
		content: {
			title: "Pascal's Trapezoid",
			tags: ["Difficulty: Easy", "Topics: seqs"],
			code:
				"(= (second (__ [2 3 2])) [2 5 5 2])\n\n\t\n(= (take 5 (__ [1])) [[1] [1 1] [1 2 1] [1 3 3 1] [1 4 6 4 1]])\n\n\t\n(= (take 2 (__ [3 1 2])) [[3 1 2] [3 4 3 2]])\n\n\t\n(= (take 100 (__ [2 4 2])) (rest (take 101 (__ [2 2]))))",
			desc:
				"Write a function that, for any given input vector of numbers, returns an infinite lazy sequence of vectors, where each next one is constructed from the previous following the rules used in Pascal's Triangle. For example, for [3 1 2], the next row is [3 4 3 2].\n\nBeware of arithmetic overflow! In clojure (since version 1.3 in 2011), if you use an arithmetic operator like + and the result is too large to fit into a 64-bit integer, an exception is thrown. You can use +' to indicate that you would rather overflow into Clojure's slower, arbitrary-precision bigint.",
			syntax: ["=", "second", "take", "rest"],
		},
		url: "https://www.4clojure.com/problem/147",
		number: 147,
	},
	{
		content: {
			title: "The Big Divide",
			tags: ["Difficulty: Medium", "Topics: math"],
			code:
				'(= 0 (__ 3 17 11))\n\n\t\n(= 23 (__ 10 3 5))\n\n\t\n(= 233168 (__ 1000 3 5))\n\n\t\n(= "2333333316666668" (str (__ 100000000 3 5)))\n\n\t\n(= "110389610389889610389610"\n  (str (__ (* 10000 10000 10000) 7 11)))\n\n\t\n(= "1277732511922987429116"\n  (str (__ (* 10000 10000 10000) 757 809)))\n\n\t\n(= "4530161696788274281"\n  (str (__ (* 10000 10000 1000) 1597 3571)))',
			desc:
				"Write a function which calculates the sum of all natural numbers under n (first argument) which are evenly divisible by at least one of a and b (second and third argument). Numbers a and b are guaranteed to be coprimes.\n\nNote: Some test cases have a very large n, so the most obvious solution will exceed the time limit.",
			syntax: ["=", "str", "*"],
		},
		url: "https://www.4clojure.com/problem/148",
		number: 148,
	},
	{
		content: {
			title: "Palindromic Numbers",
			tags: ["Difficulty: Medium", "Topics: seqs math"],
			code:
				"(= (take 26 (__ 0))\n   [0 1 2 3 4 5 6 7 8 9 \n    11 22 33 44 55 66 77 88 99 \n    101 111 121 131 141 151 161])\n\n\t\n(= (take 16 (__ 162))\n   [171 181 191 202 \n    212 222 232 242 \n    252 262 272 282 \n    292 303 313 323])\n\n\t\n(= (take 6 (__ 1234550000))\n   [1234554321 1234664321 1234774321 \n    1234884321 1234994321 1235005321])\n\n\t\n(= (first (__ (* 111111111 111111111)))\n   (* 111111111 111111111))\n\n\t\n(= (set (take 199 (__ 0)))\n   (set (map #(first (__ %)) (range 0 10000))))\n\n\t\n(= true \n   (apply < (take 6666 (__ 9999999))))\n\n\t\n(= (nth (__ 0) 10101)\n   9102019)",
			desc:
				"A palindromic number is a number that is the same when written forwards or backwards (e.g., 3, 99, 14341).\n\nWrite a function which takes an integer n, as its only argument, and returns an increasing lazy sequence of all palindromic numbers that are not less than n.\n\nThe most simple solution will exceed the time limit!",
			syntax: ["=", "take", "first", "*", "set", "map", "range", "apply", "<", "nth"],
		},
		url: "https://www.4clojure.com/problem/150",
		number: 150,
	},
	{
		content: {
			title: "Latin Square Slicing",
			tags: ["Difficulty: Hard", "Topics: data-analysis math"],
			code:
				"(= (__ '[[A B C D]\n         [A C D B]\n         [B A D C]\n         [D C A B]])\n   {})\n\n\t\n(= (__ '[[A B C D E F]\n         [B C D E F A]\n         [C D E F A B]\n         [D E F A B C]\n         [E F A B C D]\n         [F A B C D E]])\n   {6 1})\n\n\t\n(= (__ '[[A B C D]\n         [B A D C]\n         [D C B A]\n         [C D A B]])\n   {4 1, 2 4})\n\n\t\n(= (__ '[[B D A C B]\n         [D A B C A]\n         [A B C A B]\n         [B C A B C]\n         [A D B C A]])\n   {3 3})\n\n\t\n(= (__ [  [2 4 6 3]\n        [3 4 6 2]\n          [6 2 4]  ])\n   {})\n\n\t\n(= (__ [[1]\n        [1 2 1 2]\n        [2 1 2 1]\n        [1 2 1 2]\n        []       ])\n   {2 2})\n\n\t\n(= (__ [[3 1 2]\n        [1 2 3 1 3 4]\n        [2 3 1 3]    ])\n   {3 1, 2 2})\n\n\t\n(= (__ [[8 6 7 3 2 5 1 4]\n        [6 8 3 7]\n        [7 3 8 6]\n        [3 7 6 8 1 4 5 2]\n              [1 8 5 2 4]\n              [8 1 2 4 5]])\n   {4 1, 3 1, 2 7})",
			desc:
				"A Latin square of order n is an n x n array that contains n different elements, each occurring exactly once in each row, and exactly once in each column. For example, among the following arrays only the first one forms a Latin square:\n\n1\n2\n3\n4\nA B C    A B C    A B C\nB C A    B C A    B D A\nC A B    C A C    C A B\n \n\nLet V be a vector of such vectors1 that they may differ in length2. We will say that an arrangement of vectors of V in consecutive rows is an alignment (of vectors) of V if the following conditions are satisfied:\n\nAll vectors of V are used.\nEach row contains just one vector.\nThe order of V is preserved.\nAll vectors of maximal length are horizontally aligned each other.\nIf a vector is not of maximal length then all its elements are aligned with elements of some subvector of a vector of maximal length.\nLet L denote a Latin square of order 2 or greater. We will say that L is included in V or that V includes L iff there exists an alignment of V such that contains a subsquare that is equal to L.\n\nFor example, if V equals [[1 2 3][2 3 1 2 1][3 1 2]] then there are nine alignments of V (brackets omitted):\n\n1\n2\n3\n4\n5\n6\n7\n8\n9\n10\n11\n12\n13\n14\n15\n \n        1              2              3\n \n      1 2 3          1 2 3          1 2 3\n  A   2 3 1 2 1    2 3 1 2 1    2 3 1 2 1\n      3 1 2        3 1 2        3 1 2\n \n      1 2 3          1 2 3          1 2 3\n  B   2 3 1 2 1    2 3 1 2 1    2 3 1 2 1\n        3 1 2        3 1 2        3 1 2\n \n      1 2 3          1 2 3          1 2 3\n  C   2 3 1 2 1    2 3 1 2 1    2 3 1 2 1\n          3 1 2        3 1 2        3 1 2\n \nAlignment A1 contains Latin square [[1 2 3][2 3 1][3 1 2]], alignments A2, A3, B1, B2, B3 contain no Latin squares, and alignments C1, C2, C3 contain [[2 1][1 2]]. Thus in this case V includes one Latin square of order 3 and one of order 2 which is included three times.\n\nOur aim is to implement a function which accepts a vector of vectors V as an argument, and returns a map which keys and values are integers. Each key should be the order of a Latin square included in V, and its value a count of different Latin squares of that order included in V. If V does not include any Latin squares an empty map should be returned. In the previous example the correct output of such a function is {3 1, 2 1} and not {3 1, 2 3}.\n\n1 Of course, we can consider sequences instead of vectors.\n2 Length of a vector is the number of elements in the vector.",
			syntax: ["="],
		},
		url: "https://www.4clojure.com/problem/152",
		number: 152,
	},
	{
		content: {
			title: "Pairwise Disjoint Sets",
			tags: ["Difficulty: Easy", "Topics: set-theory"],
			code:
				"(= (__ #{#{\\U} #{\\s} #{\\e \\R \\E} #{\\P \\L} #{\\.}})\n   true)\n\n\t\n(= (__ #{#{:a :b :c :d :e}\n         #{:a :b :c :d}\n         #{:a :b :c}\n         #{:a :b}\n         #{:a}})\n   false)\n\n\t\n(= (__ #{#{[1 2 3] [4 5]}\n         #{[1 2] [3 4 5]}\n         #{[1] [2] 3 4 5}\n         #{1 2 [3 4] [5]}})\n   true)\n\n\t\n(= (__ #{#{'a 'b}\n         #{'c 'd 'e}\n         #{'f 'g 'h 'i}\n         #{''a ''c ''f}})\n   true)\n\n\t\n(= (__ #{#{'(:x :y :z) '(:x :y) '(:z) '()}\n         #{#{:x :y :z} #{:x :y} #{:z} #{}}\n         #{'[:x :y :z] [:x :y] [:z] [] {}}})\n   false)\n\n\t\n(= (__ #{#{(= \"true\") false}\n         #{:yes :no}\n         #{(class 1) 0}\n         #{(symbol \"true\") 'false}\n         #{(keyword \"yes\") ::no}\n         #{(class '1) (int \\0)}})\n   false)\n\n\t\n(= (__ #{#{distinct?}\n         #{#(-> %) #(-> %)}\n         #{#(-> %) #(-> %) #(-> %)}\n         #{#(-> %) #(-> %) #(-> %)}})\n   true)\n\n\t\n(= (__ #{#{(#(-> *)) + (quote mapcat) #_ nil}\n         #{'+ '* mapcat (comment mapcat)}\n         #{(do) set contains? nil?}\n         #{, , , #_, , empty?}})\n   false)",
			desc:
				"Given a set of sets, create a function which returns true if no two of those sets have any elements in common1 and false otherwise. Some of the test cases are a bit tricky, so pay a little more attention to them.\n\n1Such sets are usually called pairwise disjoint or mutually disjoint.",
			syntax: ["=", "class", "symbol", "keyword", "int", "*", "mapcat", "comment", "set", "empty"],
		},
		url: "https://www.4clojure.com/problem/153",
		number: 153,
	},
	{
		content: {
			title: "Map Defaults",
			tags: ["Difficulty: Elementary", "Topics: seqs"],
			code:
				'(= (__ 0 [:a :b :c]) {:a 0 :b 0 :c 0})\n\n\t\n(= (__ "x" [1 2 3]) {1 "x" 2 "x" 3 "x"})\n\n\t\n(= (__ [:a :b] [:foo :bar]) {:foo [:a :b] :bar [:a :b]})',
			desc:
				"When retrieving values from a map, you can specify default values in case the key is not found:\n\n(= 2 (:foo {:bar 0, :baz 1} 2))\n\nHowever, what if you want the map itself to contain the default values? Write a function which takes a default value and a sequence of keys and constructs a map.",
			syntax: ["="],
		},
		url: "https://www.4clojure.com/problem/156",
		number: 156,
	},
];
module.exports = problems;
