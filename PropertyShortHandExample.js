"use strict"

/**
   In early example we have seen that 
   we can write code like this in object
   key : value pair

   name : name;
   age : age;

   when there is a parameter in function as
   
    function (name,age){
	return {
		name : name,
		age : age,
	}
   }

   Now we are going to look how to make this 
   things shorter, a special features of 
   Javascript
*/


function makeUser(name,age){
	return {
		name,        // same as name : name
		age,	     // same as age : age
	};
}

let user = makeUser("John",30);

console.log(user.name);
console.log(user.age);

