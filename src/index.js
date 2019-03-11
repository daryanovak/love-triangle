/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
  let ans = 0;
	for(let i = 0; i < preferences.length; i++) {
		let first = i;
		let second = preferences[first] - 1;
		let third = preferences[second] - 1;
		if(preferences[third] - 1 == first 
			&& first != second 
			&& first != third 
			&& second != third) {
			ans++;
		}
	}
	return ans / 3;
};
