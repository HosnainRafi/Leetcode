/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function(nums) {
     var totalJump = 0;
    var destination = nums.length - 1;
    var coverage = 0;
    var lastJumpInd = 0;

    if (nums.length === 1) {
        return 0;
    }

    for (var i = 0; i < nums.length; i++) {
        coverage = Math.max(coverage, i + nums[i]); // ✅ update coverage

        if (i === lastJumpInd) { // Time to jump
            lastJumpInd = coverage;
            totalJump++;

            if (coverage >= destination) {
                return totalJump;
            }
        }
    }
};