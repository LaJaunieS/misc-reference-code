const list = [ 16, 15, 8, 4, 5, 42, 23, 2 ];

//mergeSort = divide and sub-divide list until separate sub-list of two items; sort each sub-item and then merge
//two separate operations- one to split the list into smaller and smaller sub-lists, and one to compare and then recursively merge the list back together
const bigList = [];

for (var i = 0; i < 20; i++){
	bigList.push(Math.floor(Math.random()*20));
}

const mergeSort = (list)=> {
	if (list.length <=1) return list;
	let middle = list.length/2;
	let left = list.slice(0,middle);
	let right = list.slice(middle);

	return merge(mergeSort(left),mergeSort(right));
}

const merge = (left,right)=> {
	let result = [];

	while(left.length || right.length){
		if (left.length && right.length){
			left[0]<right[0]? result.push(left.shift()): result.push(right.shift())
		} else if (right.length){
			result.push(right.shift())
		} else {
			result.push(left.shift())
		}
	}

	return result;
}

console.log(mergeSort(bigList))