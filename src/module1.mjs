
//importing a default export
import x from './module2.mjs';
console.log("Value of a (default export):",x);

//importing a single named export
import {b} from "./module2.mjs";
console.log("Value of b (named export):",b);

//importing multiple named exports
import {c,d } from "./module2.mjs";
console.log("(named export) Value of c:"+c+" (named export) Value of d:"+d);

// giving a named import a different name by using "as":
import { e as E } from "./module2.mjs";
console.log("(named export) Value of e:"+E);

//run the following command in shell = node .\src\module1.mjs