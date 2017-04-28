'use strict'

function titleCase(str) {
    var i = 0,
        titledString,
        tc,
        rw,
        stagingArray = str.split(' ');

    stagingArray.forEach(function(word) {
        tc = word.substring(0,1).toUpperCase();
        rw = word.substring(1).toLowerCase();
        titledString = tc + rw;
        stagingArray.splice(i,1,titledString);
        i++;
       }); 

    titledString = stagingArray.join(' ');
    return titledString;
};
        
String.prototype.titleCase = String.prototype.titleCase || titleCase;