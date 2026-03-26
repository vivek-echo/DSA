/**Javascript methods*/
// javascript length
const jsArray = ["mouse","keyborad","mousepad","monitor","external harddisk"];
console.info("javascript length -> jsArray.length: ",jsArray.length)

// javascript toString
console.log("javascript toString -> jsArray.toString(): ",jsArray.toString());

// javascript array method join
console.log("javascript array method join -> jsArray.join('!') : ",jsArray.join('!'))

// javascript delete
jsObject = {
    firstName: "Vivek",
    lastName: "Jha",
    deg : "Sr. Software Engg.",
    age:31
}
console.log("javascript delete : " ,  delete jsObject.deg);
console.log("javascript delete : " ,   jsObject);

// JavaScript Array concat() Method
let a1 = [11, 12, 13];
let a2 = [14, 15, 16];
let a3 = [16, 18, 19];

let newArr = a1.concat(a2, a3);
console.log(newArr);
let newArrUnique = [...new Set(a1.concat(a2, a3))];

console.log(newArrUnique);