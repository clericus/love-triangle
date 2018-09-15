/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) { 
  let newArr = preferences.filter(function(x, i, arr){  
    return arr[arr[arr[i]-1]-1]===i+1;});
    let result = Math.floor(newArr.length/3);
  return result;
}