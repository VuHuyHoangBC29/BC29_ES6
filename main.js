/**
 * CÁCH TẠO BIẾN ES6 ( LET - CONST )
 */
// ES6
let username = "Cybersoft";
// giải quyết được hoisting
// không thể khai báo khi đã khai báo 1 biến trước đó
// có thể gán lại giá trị

username = "Man";

const fullName = "Man Ng";
// giải quyết được hoisting
// không thể khai báo khi đã khai báo 1 biến trước đó
// không thể gán lại giá trị

// DEMO
function es6Variable() {
  var count = 5;

  return count;
}

// TRÌNH BIÊN DỊCH ES6
// [let username;] //dead zone

// console.log(username);
// username = "Cybersoft";

// ES5
// var username = "Cybersoft";

// console.log(username);

// BIÊN DỊCH JS
// hoisting trong js
// var username;

// console.log(username);

// username = "Cybersoft";

/**
 * PHẠM VI KHAI BÁO BIẾN
 */

// global scope và local scope
const globalScope = "Global Scope";

// local scope
// function scope - block scope - lexical scope

// function scope
function main() {
  const x = 50;
  console.log(x);
}
// main();

// block scope (áp dụng cho if và for)
function main1() {
  const x = 10;

  if (true) {
    const x = 50;
    console.log(x); // 50
  }
  console.log(x); // 10
}
// main1();

// lexical scope
function main2() {
  const x = 50; // x đang ở phạm vi function scope đối với main2

  function main3() {
    console.log(x); // x đang ở phạm vi lexical scope đối với main3
  }
  main3();
}
// main2();

/**
 * ARROW FUNCTION
 */
// ES6
const es6Function = (username, grade) =>
  console.log("ES6 function working!", username, grade);

const sum = (a, b) => a + b;
const total = sum(3, 5);

const person = {
  username: "Cybersoft",
  grade: 5,
  getInfo() {
    console.log("getInfo function", this.username, this.grade);
    console.log("getInfo function (this)", this);

    console.log("======================");

    // Cách 1: sử dụng khái niệm lexical scope
    // const self = this;

    // Cách 3: sử dụng arrow function
    const getUsername = () => {
      console.log("getUsername function", this.username);
      console.log("getInfo function (this)", this);
    };

    // Cách 2: sử dụng bind function
    // const bindGetUsername = getUsername.bind(this);
    // bindGetUsername();

    getUsername();
  },
};
person.getInfo();

// ES5
function es5Function(username) {
  console.log("ES5 function working!");
}

/**
 * CLOSURE FUNCTION
 */

const main4 = (a) => {
  return (b) => a + b;
};
const main5Func = main4(2);
console.log(main5Func);
const totalClosureFunc = main5Func(5);

console.log(totalClosureFunc);

/**
 * DEFAULT PARAMS
 */
const defaultParamsFunc = (username, grade = 20) => {
  console.log("Default params", username, grade);
};
// defaultParamsFunc("Man");

/**
 * REST PARAMS
 */
const restParamFunc = (...numbers) => {
  console.log(numbers);
  let total = 0;
  for (let i = 0; i < numbers.length; i++) {
    total += numbers[i];
  }
  return total;
  //   return a + b + c + d + e;
};

const totalRestParams = restParamFunc(2, 5, 1, 2, 3);
// console.log(totalRestParams);

/**
 * SPREAD OPERATOR
 */
const arrayA = [1, 2, 3];
const arrayB = [...arrayA, 4, 6, 1, 3, 7];

// arrayB.push(4);

// console.log("Array A", arrayA);
// console.log("Array B", arrayB);

// THAM CHIẾU - THAM TRỊ
// Tham trị: number, string, boolean
// Tham chiếu: array, object

const personObjectA = {
  username: "Man",
  grade: 5,
  info: {
    lastName: "Ng",
    firstName: "Man",
    nested: {
      abc: {},
    },
  },
};

const personObjectB = JSON.parse(
  JSON.stringify({
    ...personObjectA,
    firstName: "Cybersoft",
    username: "Cybersoft",
  })
);

personObjectB.info.lastName = "Pham";
// personObjectB.username = "Cybersoft";

// console.log("Object A", personObjectA);
// console.log("Object B", personObjectB);

/**
 * DESTRUCTURING (BÓC TÁCH PHẦN TỬ)
 */
const userInfo = ["Cybersoft", 5];

const [usernameDestructuring, age] = userInfo;

console.log(usernameDestructuring);
console.log(age);

const userInfoObject = {
  name1: "Hai",
  grade: 5,
};

const { name1, grade } = userInfoObject;
console.log(name1, grade);

/**
 * OBJECT LITERAL
 */
const firstName = "Man";
const lastName = "Ng";

const objectLiteral = {
  firstName,
  lastName,
};
// console.log(objectLiteral);

/**
 * STRING TEMPLATE
 */
const stringTemplate = "String Template";

console.log(`${stringTemplate} !!!`);

// console.log(stringTemplate, "!!!");

/**
 * FOR IN - FOR OF
 */
//ES6
const forInUserList = ["Man", "Khai", "Hai"];

for (let idx in forInUserList) {
  //   console.log("Index", idx);
  //   console.log("Element", forInUserList[idx]);
}

for (let element of forInUserList) {
  console.log(element);
}

//ES5
const userList = ["Man", "Khai", "Hai"];

for (let i = 0; i < userList.length; i++) {
  // console.log("Index", i);
  // console.log("Element", userList[i]);
}

/**
 * HIGH-ORDERS FUNCTION
 * forEach
 * map
 * filter
 * find
 * findIndex
 * reduce
 * sort
 */
const forEachUserList = ["Hai", "Phuc", "Man"];

// Tham số 1: currentValue (1): Hai, (2): Phuc...
// Tham số 2: currentIndex (1): 0, (2): 1...
// Tham số 3: currentArray
forEachUserList.forEach((currentValue, currentIndex, currentArray) => {
  //   console.log("currentValue", currentValue);
  //   console.log("currentIndex", currentIndex);
  //   console.log("currentArray", currentArray);
  // console.log({
  //   currentValue,
  //   currentIndex,
  //   currentArray,
  // });
});

// map
const mapUserList = ["Hai", "Phuc", "Man"];

const resultUserMapList = mapUserList.map((ele, idx) => {
  return `${idx + 1}. ${ele}`;
});

// console.log(resultUserMapList);

// filter
const filterUserList = [
  { id: 1, name: "Hai" },
  { id: 2, name: "Khai" },
  { id: 3, name: "Truong" },
];

const resultFilterUserList = filterUserList.filter((ele) => {
  if (ele.id === 2) {
    return false;
  }
  return true;
});

// console.log(resultFilterUserList);

// find
const findUserList = [
  { id: 1, name: "Hai" },
  { id: 2, name: "Khai" },
  { id: 3, name: "Truong" },
];

const user = findUserList.find((ele) => {
  return ele.id === 2;
});

// console.log(user);

// findIndex
const findIndexUserList = [
  { id: 1, name: "Hai" },
  { id: 2, name: "Khai" },
  { id: 3, name: "Truong" },
];

const index = findIndexUserList.findIndex((ele) => {
  return ele.id === 2;
});

// console.log(index);

// reduce
const numbers = [1, 2, 3, 4];
// 1 + 2 + 3 + 4

// previousValue: giá trị cộng dồn
// current value
// current index
// current array
const totalReduce = numbers.reduce((previousValue, currentValue) => {
  previousValue += currentValue;

  return previousValue;
}, 0);

// console.log(totalReduce);

// sort
const products = [
  { name: "Iphone", price: 500 },
  { name: "Samsung", price: 200 },
  { name: "Oppo", price: 400 },
];

const resultProducts = products.sort((currentValue, nextValue) => {
  // if (currentValue.price > nextValue.price) {
  //   return 1;
  // }
  // return -1;

  return currentValue.price > nextValue.price ? 1 : -1;
});
console.log(resultProducts);
