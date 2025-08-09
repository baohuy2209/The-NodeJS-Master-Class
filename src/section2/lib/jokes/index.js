var fs = require('fs'); 
var jokes = {}; 
jokes.allJokes = function(){
    var fileContents = fs.readFileSync(__dirname+'/jokes.txt', 'utf-8'); 
    var arrayOfJokes = fileContents.split(/\r?\n/);
    return arrayOfJokes;
}; 

module.exports = jokes; 
