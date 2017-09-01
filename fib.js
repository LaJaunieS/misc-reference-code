////F(n) = F(n-1) + F(n-2)


const fib = (n) => {
	let fibArray = [0,1];
	for (var i = 2; i <= n; i++){
		fibArray.push(fibArray[i-1]+fibArray[i-2])
	};
	return fibArray;
}

console.log(fib(10))