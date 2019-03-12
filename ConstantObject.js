"use strict";

/**
   Here when we  use const in Object name,
   it's not means that properties get fixed
   and we can't change it.

   it means that we can't change the refrence  
   for that variable to another object
*/
const user = { 
      name : "John",
}

user = null;     //will result in an error...

