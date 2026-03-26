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
console.log("JavaScript Array concat() Method : ",newArr);
let newArrUnique = [...new Set(a1.concat(a2, a3))];

console.log("JavaScript Array concat() Method unique : ",newArrUnique);

// JavaScript Array push
jsArray.push("headphones")
console.log("JavaScript Array push : ",jsArray);

// JavaScript Array pop
jsArray.pop();
console.log("jsArray.pop(); : ",jsArray);

// 6. shift 
jsArray.shift(); 
console.log("shift():", jsArray); 
// 7. unshift 
jsArray.unshift(0); 
console.log("unshift(0):", jsArray);

// 8. splice (add/remove) 
let spliceArr = [1, 2, 3, 4]; 
spliceArr.splice(0, 2, 99); 
console.log("array.splice(startIndex, deleteCount, item1, item2, ...) --- splice(1,2,99):", spliceArr);

// slice
let arr = [1, 2, 3, 4, 5];

let result = arr.slice(1, 3);
console.log(result);

// 12. indexOf 
console.log("indexOf(3):", arr.indexOf(3));

// 13. includes 
console.log("includes(3):", arr.includes(3));

// 14. find 
console.log("find >2:", arr.find(x => x = 2));

// 15. findIndex 
console.log("findIndex >2:", arr.findIndex(x => x > 2));