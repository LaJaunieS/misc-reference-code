//function takes a valid string (if isNaN returns false) or a number and returns in format $__,___,___,___.__ ('123456' to $1,234.56)

function USD_FORMAT_EXCEPTION(value) {
    this.value = value;
    this.message = "Unexpected value " + this.value + ". Parameter must be a number [0-9]";
    this.toString = function() {
        return message; 
    };
}


var usdFormat = function(num) {
	var dollarValue;
    var centsValue;
	if (isNaN(num) === false) {
		numStr = num.toString();
	} else { 
        throw new USD_FORMAT_EXCEPTION(num);
    };
	dollarValue =numStr.substring(0,numStr.length-2).split('').reverse();
	centsValue = numStr.substring(numStr.length-2);
    
    //on reversed array
    //add a comma to index 3, and every 4th index position thereafter
    if (dollarValue.length >= 4) {
        for (var i = 0; i < dollarValue.length; i ++) {
            if ((i+1) % 4=== 0 && i !== 0) {
                dollarValue.splice(i,0, ',');
            }; 
        };
    };     
	return "$" + dollarValue.reverse().join('') + "." + centsValue;
        
};


Number.prototype.usdFormat = Number.prototype.usdFormat || usdFormat;