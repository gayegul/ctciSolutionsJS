function fixPeakValley(nums) {
  if(!nums || nums.length < 2) return nums;

  var peak = 0;
  var valley = 1;

  while(peak < nums.length - 1 && valley < nums.length - 1) {
    if(nums[peak] < nums[valley]) {
      var temp = nums[valley];
      nums[valley] = nums[peak];
      nums[peak] = temp;
      valley += 2;
    } else peak += 2;
  }

  return nums;
}
