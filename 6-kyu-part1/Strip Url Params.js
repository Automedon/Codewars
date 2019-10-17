/*
Description:
Complete the method so that it does the following:
Removes any duplicate query string parameters from the url
Removes any query string parameters specified within the 2nd argument (optional array)
Examples:
stripUrlParams('www.codewars.com?a=1&b=2&a=2') // returns 'www.codewars.com?a=1&b=2'
stripUrlParams('www.codewars.com?a=1&b=2&a=2', ['b']) // returns 'www.codewars.com?a=1'
stripUrlParams('www.codewars.com', ['b']) // returns 'www.codewars.com'
*/
function stripUrlParams(url, paramsToStrip){
  url=url.replace(/&?([^?=]+)=.+?/g, function (x, y, z) {
        return url.indexOf(y + "=") < z || (paramsToStrip || []).indexOf(y) > -1 ? "" : x;
    });
  let index =url.indexOf(paramsToStrip)
  if (!paramsToStrip||index===-1){
    return url
  }
  return url.slice(0,index-1)
}
