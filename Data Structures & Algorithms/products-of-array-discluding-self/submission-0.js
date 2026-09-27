class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        const n= nums.length;
        let prefix=1
        let postfix=1;
        let result = new Array(n)
        for(let i=0;i<n;i++) {
            result[i] = prefix;
            prefix = prefix * nums[i];
        }

        for(let j=n-1;j>=0;j--) {
            result[j] = result[j] * postfix;
            postfix = postfix * nums[j];

        }
        return result;
    }
}
