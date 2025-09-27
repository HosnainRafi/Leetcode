/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    var lengthOfString = s.trim().split(" ").pop().length;

    return lengthOfString;
};