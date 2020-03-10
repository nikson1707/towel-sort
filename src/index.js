module.exports = function towelSort (matrix) {
    if(matrix === []||typeof(matrix)=="undefined") return [];
	let result= [];
	for(let i = 0; i!=matrix.length; ++i){
		if(i%2==1){
			result.push(matrix[i].reverse());
		}
		else{
			result.push(matrix[i]);
		}

	}
	result.reduce((acc, val) => acc.concat(val), []);
  return result.reduce((acc, val) => acc.concat(val), []);
}
