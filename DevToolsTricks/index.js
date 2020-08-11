const greenPara = document.getElementById('green');
let toggle = false;

function makeGreen() {
    toggle = !toggle;
    greenPara.style.color = toggle ? '#BADA55' : '#000000';
    greenPara.style.fontSize = toggle ? '50px' : '16px';
    greenPara.style.backgroundColor = toggle ? '#000000' : '#BADA55';
}

greenPara.addEventListener('click', makeGreen);

// to view what changes are triggered by JS on some element, open up console, right click on desired element, go to 'Break On'
// and select attribute modifications to trigger debugger whenever attributes of the element are changed

// clear
console.clear();

// regular
console.log('hello world');

// interpolated
console.log('hi I am %s', '🌝'); // not used much
console.log(`hi I am ${'🌝'}`); // preferred way

//styled
console.log('%cThis is interesting!', 'font-size: 32px; color: #BADA55');

// warning
console.warn('Be watchful!');

// error
console.error('I warned you -_-');

// info
console.info('Crocodiles eat 3-4 people per year');

// testing
// if true, then nothing happens, else an error will be thrown
console.assert(1 === 2, 'This is false, hence will appear in console');

// viewing DOM elements
console.log(greenPara);
console.dir(greenPara);

// grouping
// can prove pretty useful for console logging big set of items
const dogs = [{
    name: 'Bruno',
    age: 8
}, {
    name: 'Scooby',
    age: 3
}];

dogs.forEach(dog => {
    console.group(dog.name);
    // console.groupCollapsed(dog.name); for default collapsed view
    console.log(`This is ${dog.name}`);
    console.log(`${dog.name} is ${dog.age} years old`);
    console.groupEnd(dog.name);
});

// counting

console.count('Bruno');
console.count('Bruno');
console.count('Scooby');
console.count('Bruno');
console.count('Scooby');
console.count('Scooby');
console.count('Bruno');
console.count('Bruno');
console.count('Scooby');

// timing
console.time('> fetching data');
fetch('https://api.github.com/users/DemonDaddy22')
.then(res => res.json())
.then(data => {
    console.timeEnd('> fetching data');
    console.log(data);
});

// table
console.table(dogs);