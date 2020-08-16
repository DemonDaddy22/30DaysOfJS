// numbers, strings and booleans are passed on 'by value'

let num1 = 5;
let num2 = num1;
console.log(num1, num2);
// re-assigning one of them won't affect the other
num1 = 10;
console.log(num1, num2);

console.clear();

// same for strings too
let str1 = 'World';
let str2 = str1;
console.log(str1, str2);
str1 = 'Hello';
console.log(str1, str2);

console.clear();

// things change for objects and arrays, as they are passed on 'by reference'
// basically on assignment of an object to another, both of them actually point to the same object,
// thus on changing any of them, we are basically changing the same object to which both the reference variables are pointing

let arr1 = ['blue', 'red', 'green', 'white'];
let arr2 = arr1;
console.log(arr1, arr2);
arr2[3] = 'black'; // this will also change the value of arr1, as arr1 & arr2 point to same array
console.log(arr1, arr2);

console.clear();

// some of the ways we can overcome this
// 1. by slicing the original array
let arr3 = arr1.slice();
console.log(arr1, arr3);
arr3[3] = 'white'; // this won't affect arr1 now, as we created a new array out of arr1
console.log(arr1, arr3);

console.clear();

// 2. by using concat
let arr4 = [].concat(arr1);
console.log(arr1, arr4);
arr4[3] = 'yellow';
console.log(arr1, arr4);

console.clear();

// 3. by using the spread operator
let arr5 = [...arr1];
console.log(arr1, arr5);
arr5[3] = 'purple';
console.log(arr1, arr5);

console.clear();

// 4. using Array.from()
let arr6 = Array.from(arr1);
console.log(arr1, arr6);
arr6[3] = 'cyan';
console.log(arr1, arr6);

console.clear();

// same goes for objects as well
let obj1 = {
    name: 'Tom',
    age: 7
}
let obj2 = obj1;
console.log(obj1, obj2);
obj2.breed = 'Husky'; // this will also affect obj1, as both obj2 & obj1 point to same object
console.log(obj1, obj2);

console.clear();

// ways to fix this
// 1. Object.assign()
let obj3 = Object.assign({}, obj1, { color: 'Black' });
obj3.name = 'Jerry';
console.log(obj1, obj3);

// 2. Using spread operator
let obj4 = { ...obj1, color: 'Grey' };
console.log(obj1, obj4);

console.clear();

// these above methods only copy 1 level deep
let obj5 = {
    num: 1,
    str: 'car',
    arr: ['Carrera GT', 'Huracan Spyder EVO']
};
let obj6 = Object.assign({}, obj5);
console.log(obj5, obj6);
obj6.num = 2; // this won't affect obj5
console.log(obj5, obj6);

obj6.arr[1] = 'Jesko'; // this will reflect in obj5 as well
console.log(obj5, obj6);

console.clear();

// so we need to create use deepclone to create a copy at every level
// easier work around is to use JSON.stringify() to get a string and then JSON.parse() to get an object without any history of references,
// but it can cause problems if any value is undefined, then stringify would drop that key-value pair
let obj7 = JSON.parse(JSON.stringify(obj5));
obj7.arr[1] = 'Huayra BC';
console.log(obj5, obj7);