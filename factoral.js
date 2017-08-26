const factoral = (n)=> {
	for (var i = (n-1); i >1; i--){
		n*=i;
		if (n===Number.POSITIVE_INFINITY) return Number.POSITIVE_INFINITY;
	};
	return n;
}
