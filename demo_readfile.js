var fs = require('fs');

fs.appendFile('mynewfile1.txt','Hello content!', function(err)
{
   if(err)
    thow err;
 
    console.log('Saved!');
});