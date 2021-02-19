This repo includes a script for scraping the programming-problems from 4clojure and transforming them into a specially formatted markdown file that can be imported into RoamResearch.

By importing this specially formatted file you can:

- track your progress on each problem in Roam
- take notes for each problem in Roam
- use Roam-plugins like [roamsr](https://github.com/aidam38/roamsr) to learn the problems with Spaced Repetitions

There is three variants in the md-folder:

- plain: includes just the problem descriptions (including test-cases) and url
- roamy: includes the plain-variant, tags for each problem, tags for solved-problems, a query for displaying solved and unsolved problems, a todo-list of used syntax for each problems to make sure you understand the code before trying to solve it (each syntax element only appears once and is not repeated in other problems!).
- roamysr: includes roamy-variant, adds a #sr tag to each problem and a question for each piece of syntax. (WARNING: this adds about 200 prompts to your roamsr-queue so dont do it if you dont have the time for pure Clojure-learning)

# Code Files:

- index.js: the script that uses puppeteer to scrape the problems and the functions for transforming the data into a Roam-usable format.
- problems.js: the scraped problem-data in a JS-array for easier reuse.

# License:

- Custom code is MIT licensed (see LICENSE file).
- The 4clojure problems are EPL v. 1.0 licensed (see LICENSE-4clojure file and [4clojure](https://www.4clojure.com/))
