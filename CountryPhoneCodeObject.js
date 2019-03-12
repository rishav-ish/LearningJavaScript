"use strict";

/**
   Here, we are learning about the order of 
   an object property that get returns when
   we iterate over an object using for..in
   loop

   If Integer propertes -> get sorted and displayed
   otherwise -> displayed in creation level

   Remeber Integer properties in object means
   string that can be converted to integer 
   and vice-versa.

   so if you want to cheat integer properites 
   so that it don't get sorted use
   + sign in your string like "+49"...
*/

let codes = {
	"49" : "Germany",
	"41" : "Switzerland",
	"44" : "Great Britain",
	"91" : "India",
	"1"  : "USA",
};

for (let code in codes){
	console.log(code,codes[code]);
}