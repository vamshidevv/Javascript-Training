import { add } from "./add.js";
let result = add(6, 3);
console.log(result);

// ============================================
import { person } from "./add.js";

let res = `my name is ${person.name} and iam ${person.age} years old`;

console.log(res);
// ============================================
import { cars } from "./add.js";

let obj = new cars("Kia", 2016);

obj.displayInfo();
