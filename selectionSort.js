const list = [ 16, 15, 8, 4, 5, 42, 23, 2, 64 ];

const bigList = [];
for (var i =0; i < 50; i++){
	bigList.push(Math.floor(Math.random()*50));
}

//loop over list starting at i finding smallest number, push it to first position- loop again starting at i+1
//save index position of lowest number in variable- if min < i save i to that variable
//if min variable changes switch low value in i with min value
//if list is already sorted, if will not trigger and loop will just run once

//2 loops- outer loop sets currentMinValue to i position by default
//inner loop loops starting at currentMinposition+1 and compares- if i+1 < cmp then set cmp to i+1

const selectionSort = (list)=> {
	let currentMinIndex = 0;
	let newMinValue, oldMinValue;
	for (var i = 0; i < list.length; i++){
		//currentMinIndex will be current iteration
		currentMinIndex = i;
		//search ahead one item- if less than current item, set currentMinIndex to look-ahead item
		for (var x = currentMinIndex+1; x<list.length; x++){
			if (list[x]<list[currentMinIndex]){
				currentMinIndex = x;
			};
		};
		//if currentMinIndex has changed, current position of item i to be switched with item x
		if (currentMinIndex !== i){
			newMinValue = list[currentMinIndex];
			oldMinValue = list[i];
			list[i] = newMinValue;
			list[currentMinIndex] = oldMinValue;	
		};
	};
	return list;
}

console.log(selectionSort(bigList))












