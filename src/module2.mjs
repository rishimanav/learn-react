// to understand the concepts of named export and default export
const a="a_Tanmay";
const b="b_Raj";
const c="c_Raman";
const d="d_Rita";
const e="e_Aman"

export default a;
//by default 'a' will be exported i.e. if another file 
//tries to import something from module2.mjs, 'a' will get
//imported. The import doesen't have to be of the same name as the export
//there is only one default export allowed per file

//the ones below are named exports
//With named exports, one can have multiple named exports per file. 
//Then import the specific exports they want surrounded in braces. 
//The name of imported module has to be the same as the name of the exported module.
export {b};
export {c};
export {d};
export {e};

//its better to use named exports than default exports
//as default exports are only allowed once
//and the programmer, while importing may give the imported variable 
//some other name. This may lead to inconsitency in the codebase
//as different programmers may refer to it differently in the
//importing files. In case of named exports, the programmer, 
//wont have to think about giving a new name to the imported 
//component unless there is some other entity with the same
//name in the importing file or in case where we import entities of
//the same name from two different files. 
// Example-
// import { example as widgetExample } from "./widget/example";
// import { example as gadgetExample } from "./gadget/example";
