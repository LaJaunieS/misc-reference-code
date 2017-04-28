var $ = function(id) {
    return document.getElementById(id);
}
var getRandomNumber = function(max) {
    var random;
    if (!isNaN(max)) {
        random = Math.random(); //value >= 0.0 and < 1.0
        random = Math.floor(random * max); //value is an integer between 0 and max - 1
        random = random + 1; //value is an integer between 1 and max
    }
    return random;
}
var calculateFV = function(investment,rate,years) {
	var futureValue = investment;
    for (var i = 1; i <= years; i++ ) {
		futureValue += futureValue * rate / 100;
        if (futureValue === Infinity) {
            alert('Future value = infinity\n  Loop stopped at ' + i);
            i = years;
        }
    }
    futureValue = futureValue.toFixed(2);
	return futureValue;
}


var formatFV = function() {
    var investment = parseFloat( $("investment").value );
    var rate = parseFloat( $("annual_rate").value );
    var years = parseInt( $("years").value );
    var futureValue = calculateFV(investment, rate, years).toString();
    var dollars =futureValue.substring(0,futureValue.length-3).split('').reverse();
    var cents= futureValue.substr(-3);
    
    var arr = function(arr) {
        //on reversed array
        //add a comma to index 3, and every 4th index position thereafter
        if (arr.length >= 4) {
            for (var i = 0; i < arr.length; i ++) {
                if ((i+1) % 4=== 0 && i !== 0) {
                    arr.splice(i,0, ',');
                }; 
            };
        };     
        return arr;
        
    }(dollars);
    
    return "$" + arr.reverse().join('') + cents;
    //gets future value after it has bee ncalcaulated and returns formatted version of the value
}

var getDate = function() {
    var now = new Date();
    $("date").textContent = "Today is " + now.toDateString() + " at " + now.getHours() + ":" + now.getMinutes() + ".";
};

var processEntries = function() {
    var investment = parseFloat( $("investment").value );
    var rate = parseFloat( $("annual_rate").value );
    var years = parseInt( $("years").value );
	if (isNaN(investment) || investment <= 0) {
		alert("Must be > 0");
	}
	else if (isNaN(rate) || rate <= 0) {
		alert("Must be > 0");
	}
	else if (isNaN(years) || years <= 0) {
		alert("Must be > 0");
		allValid = false;
	}
	else {
        $("future_value").value	= formatFV();
	}
}


window.onload = function() {
    getDate();
    $("calculate").onclick = processEntries;
    $("investment").focus();
}