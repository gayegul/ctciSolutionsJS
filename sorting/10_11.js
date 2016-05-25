function fixPeakValley(nums) {
  if(!nums || nums.length < 2) return nums;
  var peak = 0;
  for(var i = 0; i < nums.length - 1; i++) {
    if(peak % 2 === 0) {
      if(nums[i] < nums[i + 1]) {
        var temp = nums[i + 1];
        nums[i + 1] = nums[i];
        nums[i] = temp;
      }
    } else {
      if(nums[i] > nums[i + 1]) {
        var temp2 = nums[i + 1];
        nums[i + 1] = nums[i];
        nums[i] = temp2;
      }
    }
    peak++;
  }
  return nums;
}

fixPeakValley([9,1,0,4,8,7,10,0,11,11,3,4,5,6,7,0,2,2,2,12,10,7]);
// [9, 0, 4, 1, 8, 7, 10, 0, 11, 3, 11, 4, 6, 5, 7, 0, 2, 2, 12, 2, 10, 7]
