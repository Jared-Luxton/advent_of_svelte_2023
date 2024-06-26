# DESIGN
- Import data by fetch
    - Create, read, update
- Database storage 
    - SQLite
- Automatic naughty/nice identification by tally score
- Appealing styling
    - Pico

# Day 1 - Naughty or Nice
# OBJECTIVE

The Elves have been tirelessly creating presents all year round. They’re right on schedule, but today they’ve run into a big problem; the ancient system for tracking who’s been naughty or nice is out of commission. With the hundreds of thousands of letters from children piling up alongside their records of good and bad deeds, the Elves are in dire need of a modern solution.

Your mission is to build a system for the elves, enabling them to input names and tally each childs deeds to keep track of whether they’re good or bad. You could even categorise these automatically as “naughty” and “nice.” Fortunately, the elves have been meticulous in their record-keeping and have a backup of all the current data in JSON format. You’ll need to import this data into your newly developed system.

Here is an example of what the Elves have stored:

[
	{ "name": "Emma", "tally": 32 },
	{ "name": "Ethan", "tally": 14 },
	{ "name": "Isabella", "tally": 70 },
	{ "name": "Jayden", "tally": -16 },
	{ "name": "Isabella", "tally": -59 },
	{ "name": "Noah", "tally": 19 },
	{ "name": "Mia", "tally": -37 },
	{ "name": "Will", "tally": -20 },
	{ "name": "Sam", "tally": -91 },
	{ "name": "Brittney", "tally": -98 }
	...
]
You can fetch this data by making a GET request to https://advent.sveltesociety.dev/data/2023/day-one.json