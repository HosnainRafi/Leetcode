/**
 * @param {number[]} citations
 * @return {number}
 */
var hIndex = function(citations) {
     citations.sort((a, b) => b - a); // Sort descending

    let h = 0;
    while (h < citations.length && citations[h] > h) {
        h++;
    }

    return h;
};