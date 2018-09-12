/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
  var arr = preferences;
  var count = 0;
  for (var i=0; i<arr.length; i++)
  {
    for(var j=0; j<arr.length;j++)
    {
      if (arr[i]===j+1)
        {
          for(var k = 0;k<arr.length;k++)
            {if(arr[j]===k+1&&arr[k]===i+1)
              {
                count=count+1;
              }
            }
        } 
    } 
  }
var result = Math.floor(count/3);
return result;
}
