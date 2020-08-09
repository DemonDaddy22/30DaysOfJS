// Get your shorts on - this is an array workout!
// Array Cardio Day 1

// Some data we can work with

const inventors = [
    { first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
    { first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
    { first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
    { first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },
    { first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
    { first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 },
    { first: 'Max', last: 'Planck', year: 1858, passed: 1947 },
    { first: 'Katherine', last: 'Blodgett', year: 1898, passed: 1979 },
    { first: 'Ada', last: 'Lovelace', year: 1815, passed: 1852 },
    { first: 'Sarah E.', last: 'Goode', year: 1855, passed: 1905 },
    { first: 'Lise', last: 'Meitner', year: 1878, passed: 1968 },
    { first: 'Hanna', last: 'Hammarström', year: 1829, passed: 1909 }
];

const people = ['Beck, Glenn', 'Becker, Carl', 'Beckett, Samuel', 'Beddoes, Mick', 'Beecher, Henry', 'Beethoven, Ludwig',
    'Begin, Menachem', 'Belloc, Hilaire', 'Bellow, Saul', 'Benchley, Robert', 'Benenson, Peter', 'Ben-Gurion, David',
    'Benjamin, Walter', 'Benn, Tony', 'Bennington, Chester', 'Benson, Leana', 'Bent, Silas', 'Bentsen, Lloyd',
    'Berger, Ric', 'Bergman, Ingmar', 'Berio, Luciano', 'Berle, Milton', 'Berlin, Irving', 'Berne, Eric', 'Bernhard, Sandra',
    'Berra, Yogi', 'Berry, Halle', 'Berry, Wendell', 'Bethea, Erin', 'Bevan, Aneurin', 'Bevel, Ken', 'Biden, Joseph',
    'Bierce, Ambrose', 'Biko, Steve', 'Billings, Josh', 'Biondo, Frank', 'Birrell, Augustine', 'Black, Elk', 'Blair, Robert',
    'Blair, Tony', 'Blake, William'];

// Array.prototype.filter()
// 1. Filter the list of inventors for those who were born in the 1500's
// filter as the name suggests, filters out an array based on certain filtering condition
const fifteen = inventors.filter(inventor => inventor.year >= 1500 && inventor.year < 1600);
// console.table helps printing out a tabular form of data (array) for better visualisation
console.table(fifteen);

// Array.prototype.map()
// 2. Give us an array of the inventors first and last names
// map returns the same number of entries as there were in the original array
const names = inventors.map(inventor => `${inventor.first} ${inventor.last}`);
console.log(names);

// Array.prototype.sort()
// 3. Sort the inventors by birthdate, oldest to youngest
const birthdate = inventors.sort((a, b) => a.year > b.year ? 1 : -1);
console.table(birthdate);

// Array.prototype.reduce()
// 4. How many years did all the inventors live all together?
// reduce is a good way to sum elements of an array, it takes a running total and item as inputs, and keeps on adding values to running total in each iteration
// we need to pass some initial value for running total, else it would be undefined and can produce weird results, so 0 here at the end is doing that purpose
const totalYears = inventors.reduce((total, inventor) => total + (inventor.passed - inventor.year), 0);
console.log(totalYears);

// 5. Sort the inventors by years lived
const lived = inventors.sort((a, b) => (a.passed - a.year) > (b.passed - b.year) ? 1 : -1);
console.table(lived);

// 6. create a list of Boulevards in Paris that contain 'de' anywhere in the name
// https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris
// go to above link, find the necessary class containing all the names, and select them using querySelectorAll, and that will give you a NODELIST
// NodeList has only limited functions as compared to an array, so we'll have to convert it into an array using Array.from or the spread operator
// the resulting array will contain links, and now by using map function, we can extract textContent out of them to get the below mentioned array
const boulevards = [
    "Boulevards of Paris", "City walls of Paris", "Thiers wall", "Wall of Charles V", "Wall of Philip II Augustus", "City gates of Paris",
    "Haussmann's renovation of Paris", "Boulevards of the Marshals", "Boulevard Auguste-Blanqui", "Boulevard Barbès", "Boulevard Beaumarchais",
    "Boulevard de l'Amiral-Bruix", "Boulevard Mortier", "Boulevard Poniatowski", "Boulevard Soult", "Boulevard des Capucines", "Boulevard de la Chapelle",
    "Boulevard de Clichy", "Boulevard du Crime", "Boulevard du Général-d'Armée-Jean-Simon", "Boulevard Haussmann", "Boulevard de l'Hôpital",
    "Boulevard des Italiens", "Boulevard Lefebvre", "Boulevard de la Madeleine", "Boulevard de Magenta", "Boulevard Marguerite-de-Rochechouart",
    "Boulevard Montmartre", "Boulevard du Montparnasse", "Boulevard Raspail", "Boulevard Richard-Lenoir", "Boulevard Saint-Germain", "Boulevard Saint-Michel",
    "Boulevard de Sébastopol", "Boulevard de Strasbourg", "Boulevard du Temple", "Boulevard Voltaire", "Boulevard de la Zone"
];

const de = boulevards.filter(boulevard => boulevard.includes('de'));
console.log(de);


// 7. sort Exercise
// Sort the people alphabetically by last name
const ordered = people.sort((a, b) => {
    let name1 = a.split(', '), name2 = b.split(', ');
    return name1[1] > name2[1] ? 1 : -1;
})
console.log(ordered);

// 8. Reduce Exercise
// Sum up the instances of each of these
// here reduce is used to count number of unique items in an array, default value here is an empty object, which gets populated in each iteration
const data = ['car', 'car', 'truck', 'truck', 'bike', 'walk', 'car', 'van', 'bike', 'walk', 'car', 'van', 'car', 'truck'];
const transport = data.reduce((obj, entry) => {
    if (!obj[entry]) obj[entry] = 0;
    obj[entry]++;
    return obj;
}, {});
console.log(transport);

// ARRAY CARDIO 02

const newPeople = [
    { name: 'Wes', year: 1988 },
    { name: 'Kait', year: 1986 },
    { name: 'Irv', year: 1970 },
    { name: 'Lux', year: 2015 }
];

const comments = [
    { text: 'Love this!', id: 523423 },
    { text: 'Super good', id: 823423 },
    { text: 'You are the best', id: 2039842 },
    { text: 'Ramen is my fav food ever', id: 123523 },
    { text: 'Nice Nice Nice!', id: 542328 }
];

// Some and Every Checks
// Array.prototype.some() // is at least one person 19 or older?

const somePeople = newPeople.some(person => new Date().getFullYear() - person.year > 18);
console.log(somePeople);

// Array.prototype.every() // is everyone 19 or older?
const allPeople = newPeople.every(person => new Date().getFullYear() - person.year > 18);
console.log(allPeople);

// Array.prototype.find()
// Find is like filter, but instead returns just the one you are looking for
// find the comment with the ID of 823423
const comment = comments.find(comment => comment.id === 823423);
console.log(comment);

// Array.prototype.findIndex()
// Find the comment with this ID
const index = comments.findIndex(comment => comment.id === 823423);
console.log(index);

// delete the comment with the ID of 823423
const newComments = comments.splice(1);
// const newComments = [...comments.slice(0, index), ...comments.slice(index+1)];

console.table(newComments);