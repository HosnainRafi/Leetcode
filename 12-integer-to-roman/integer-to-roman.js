/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function(num) {
    const values  = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
    const symbols = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"];
    
    let result = "";

    for (let i = 0; i < values.length; i++) {
        // How many times can values[i] fit into num?
        const count = Math.floor(num / values[i]);

        if (count > 0) {
            // Repeat the Roman symbol that many times
            result += symbols[i].repeat(count);

            // Reduce num (take the remainder)
            num %= values[i];
        }
    }

    return result;
};