/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    var n=prices.length;
    var max_profit = 0;
    var buy_price = prices[0];
    for(var i=0;i<n;i++){
        var curr_price = prices[i] - buy_price;
        if(curr_price > max_profit){
            max_profit = curr_price;
        }
        if(prices[i] < buy_price){
            buy_price = prices[i]
        }
    }
     return max_profit;
};