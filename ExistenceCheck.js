"use strict";

/**
   A notable features in javascript is that we can check the
   property even if it doesn't exist it will simple return 
   undefined

   so to check whether the property exist in object or not 
   we can check like this :-

   if(object.properties === undefined)
		'hence it doesn't exist


   Second method to check for properties in object is by using
   "in"

   The syntax is 

   "key" in object
*/

let user = {name : "John", age : 30};

console.log("age" in user);
console.log('blabla' in user);

//can also omit quotes when using variable to store properties..

let key = "name";

console.log(key in user);

