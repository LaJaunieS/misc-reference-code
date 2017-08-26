//bubble sort
//pass through comparing number n and n+1
//if n > n+1, move n+1 to n position and n to n+1 position
//flag to continue loop until list fully sorted (if n<n+1 all the way through, set flag to sorted and end the loop)

const list = [ 16, 15, 8, 4, 42, 23, 2 ];

const bubbleSort = (list)=> {
	let higherNumber, lowerNumber,nextVal;
	let sortAgain = false;

	for (var i = 0; i < list.length; i++){
		nextVal = i+1<list.length?list[i+1]:Number.POSITIVE_INFINITY;
		if (list[i]>nextVal){
			higherNumber = list[i];
			lowerNumber = list[i+1];
			list[i] = lowerNumber;
			list[i+1]= higherNumber;
			sortAgain =true;
		}
	};
	if (sortAgain) bubbleSort(list);
	return list;
}

console.log(bubbleSort(list));