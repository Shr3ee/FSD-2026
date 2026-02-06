console.log("Rajshree Bhuyan")
let students={n:"hari" , age:22 , course:"CSE"};
console.table(students);
console.table(["apple", 12 , "Ece"])
// console.clear()
console.time("test");
for(let i=0;i<10000;i++){}
console.timeEnd("test");
console.group("cse24");
console.log("name:prip");
console.groupEnd("cse24");
console.count("click");
console.count("click");
console.count("click");
console.count("click");
console.count("click");
function add(p,q){           //p and q are parameters
    return p+q;           
}
console.log(add(10,22));    // 10 and 22 are arguments


//Arrow  Function: It is just like lambda func
const multiply =(p,q)=>p*q;         // why using const in this line?
console.log(multiply(10,22));

//array
let arr=[10,2,30,40];
console.log(arr[0]);
arr.push(20);
arr.pop();
console.log(arr);

//object
let student={
    name: "Rajshree",
    age:20,
    course:"btech"
};

let today = new Date();    //gives date
console.log(today);

//math function

console.log(Math.sqrt(25));   //many methods
//String
txt="hello world";
console.log(txt.length);
console.log(txt.toLowerCase());
console.log(txt.toUpperCase());
console.log(txt.includes("java"));

//Type conversion
let strnum="123";
let convert=Number(strnum);  //typecasts compatible datatypes
console.log(convert+10);

console.log(isNaN("abs"));     //isNaN= is not a number
console.log(isNaN(123));

setTimeout(() => {
    console.log("executed after 2 second")          // this function decides when this function will be executed
}, 2000);                                           // this timeout value is micro

let day = "S";

switch (day) {
  case "Saturday":
  case "Sunday":
    console.log("It's a weekend!");
    break;
  default:
    console.log("It's a weekday.");
}

const cars = ["BMW", "Volvo", "Saab", "Ford"];
for (let i = 0; i < cars.length; i++) {
  console.log(cars[i]);
}

try {
    let result =x/0;
    console.log(result);

}
catch(error){
    console.log('error');
}




