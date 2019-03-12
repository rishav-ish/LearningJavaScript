"use strict";

/**
   Earlier we have read that copy object variable
   to another vairable will copy refrence rather
   than values that means both variable will point
   to same object so change in one variable will 
   reflect in another

   so what to do if we want to copy object rather
   than refrencing it

   In javascript we can do that by creating an empty
   object an iterating every key of object to the 
   copying object

   example is below.....
*/

let user = {
	name : "John",
	age : 30,
};

let clone = {};

for (let key in user){
	clone[key] = user[key];
}

clone.name = "Pete";

console.log(user.name); //will result in john...

