const list = [ 16, 15, 8, 4, 5, 42, 23, 2 ];
//loop over the sub-list comparing pivot value to index value
//pivot is last index value inthe list
//need to run compare list without pivot value
//compare will be run in a loop determining index value i to pivot value p- if i > p, push i to array to right of p; else to left of p
//concat left array, p, and right array and combine again w recursive function

const quickSort = (list)=> {
	if (list.length<=1) return list;
	let left = [], right = [];
	let pivotIndex = list.length-1;
	let pivotValue = list[pivotIndex];
	//remove pivotValue from list for iteration
	list = list.slice(0,pivotIndex).concat(list.slice(pivotIndex+1));
	//do the sort
	for (var i = 0; i < list.length; i++){
		list[i]<pivotValue? left.push(list[i]): right.push(list[i]);
	}
	//put it back together
	return quickSort(left).concat([pivotValue],quickSort(right));
}

console.log(quickSort(list))