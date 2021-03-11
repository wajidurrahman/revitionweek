function evenify_all(nums) {
    for (let i = 0; i < nums.length; i++) {
        const num = nums[i];
        if (num % 2 == 0) {
            return num;
        } else {
           return(num * 2)
        }
    }
}
 nums = [13, 17, 19, 20];
 evenify_all(nums);

 friends_age =[13, 17, 19, 20, 18];
 evenify_all(friends_age);