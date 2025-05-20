/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    if(!strs.length){
        return "";
    }
    strs.sort();
    let i = 0;
    const first = strs[i];
    const last = strs[strs.length -1];
    while(i<first.length && first[i] === last[i]){
        i++;
    }
return first.slice(0, i);
};