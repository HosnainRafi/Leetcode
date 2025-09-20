/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function(nums, target) {
    nums.sort((a,b) => (a-b));

    let closet_sum = nums[0] +nums[1]+nums[2];

    for(let i=0;i<nums.length -2; i++){
    let left = i+1;
    let right = nums.length -1;

while(left<right){
    const current_sum = nums[i] + nums[left] + nums[right];

    if(current_sum === target){
        return current_sum;
    }
    if(Math.abs(current_sum - target) < Math.abs(closet_sum - target)){
    closet_sum = current_sum;
    }

    if(current_sum < target){
        left++;
    }
    else{
        right--;
    }

}
    }
return closet_sum;
};