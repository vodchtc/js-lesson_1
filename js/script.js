//1)
alert('Привет, это работа Водчиц Дарьи');

//2)
let planetNames = 'Mars';
console.log(planetNames);

let myAge = '22';
console.log(myAge);

let brokenCar = 'Opel';
console.log(brokenCar);

let headerColor = 'Violet';
console.log(headerColor);

let userName = 'Adminisrator';
console.log(userName);

//3)
let user = {
    name: "Дарья",
    surname: "Водчиц",
    age: "22",
};

console.log(`Привет, меня зовут ${user.name} ${user.surname}, мне ${user.age} года`);

//4)
let Name = prompt("Кто проверяет мою работу?", "Кот Игорь");
console.log(`Мою работу проверяет ${Name}`);

//5)
let str = "String"
let num = 2000
let testSkiped = false
let month = undefined
let data = null
console.log(typeof str);
console.log(typeof num);
console.log(typeof testSkiped);
console.log(typeof month);
console.log(typeof data);

//6)
let newStr = "37";
alert(typeof newStr);
newStr = Boolean(newStr);
console.log(newStr);

let newValue = true;
alert(typeof newValue);
console.log(typeof String(newValue), String(newValue));
console.log(Number(newValue), Number(newValue));

let newNum = 2007;
console.log(typeof String(newNum), String(newNum));
console.log(typeof Boolean(newNum), Boolean(newNum));
//7)
let name = "Ivan";
let surname = "Ivan"
console.log(surname);