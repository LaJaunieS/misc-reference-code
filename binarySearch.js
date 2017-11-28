//list must already be sorted
const list = [ 5,8,14,25,33,34,42, 44, 45, 48, 50, 52, 55, 57, 58, 60, 63, 65, 68 ];

//define a min point, mid point, and max point- 
//in while loop, running while diff between max and min > 1 (i.e., still more than one item in the look range)
//if lookFor < midpoint, redefine max point to current mid point
//if lookFor > midpoint, redefine min point to current mid point- new midpoint will then be calculated
//if lookFor = midpoint, return index value of the midpoint - as look range reduced, eventually match will match the midpoint
//conditions to not enter the loop- if lookFor matches value at min or max position,
//or if lookFor is greater or less than any number in the list range, return -1
//once out of loop, if no match to the midpoint, no match in list so return -1


//will return index position of found value, otherwise return -1 (not found)
const binarySearch = (list,lookFor)=> {
	let min = 0, max = list.length-1, midpoint;

	if (lookFor === list[min]){
		return min;
	} else if (lookFor === list[max]){
		return max;
	} else if (lookFor > list[max]|| lookFor < list[min]){
		return -1;
	} else {
		while (max-min>=2){
			midpoint = Math.floor((max+min)/2);
			if (list[midpoint]===lookFor){
				return midpoint;
			} else {
				list[midpoint]<lookFor? min=midpoint: max=midpoint; 
			};
		};
	}


	if (lookFor !== list[midpoint]){
		return -1;
	};

}


console.log(binarySearch(list,8))