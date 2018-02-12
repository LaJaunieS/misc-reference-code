//don't just reverse a sentence, reverse the words in the sentence but keep the punctuation in place. So, "May the fourth, be with you." returns "you with be, fourth the May. "
var str = "May the force, be with you.",
    stagingArray = str.split(' '),
    punctArray = new Array(stagingArray.length), 
    finalStr = [],
    i = 0,
    revMaster;

stagingArray.forEach(function(word){
    var newWord;
    regExSearch = word.search(/[,!.;]/);
        if (regExSearch !== -1) {
            newWord = word.replace(word.charAt(regExSearch),'');
            punctArray[i] = word.charAt(regExSearch);
            stagingArray[i]= newWord;
            i++;
        } else {
            i++;
        };
    
});

revMaster = stagingArray.reverse();

for(var z= 0; z< revMaster.length; z++) {
    if (punctArray[z] === undefined) {
        finalStr += revMaster[z] + " ";
    } else {
        finalStr += revMaster[z] + punctArray[z] + " ";
    }
};

console.log(finalStr);




//
//stagingArray.forEach(function(letter) {
//    var ltr = letter;
//    ltr.forEach(function() {
//        if(/[?!.,]/.test(letter)) {
//            punc[i]= stagingArray.splice(i,1,'').join('');
//            i++;
//        } else {
//            i++;
//        }
//    })
//})
//
//
//
//
//
////replace each punctuation character with a $ placeholder for later reference
//stagingArray.forEach(function(word){
//    if (/\W/.test(word[word.length-1])) { 
//        //console.log(word[word.length-1]);
//        newWord = word.replace(/\W/, '$');
//        stagingArray.splice(i,1,newWord);
//        punc.push(word.slice(word.length-1));
//        console.log(word);
//        i++;
//    } else {
//        i++;
//    };
//       
//});
//
//
