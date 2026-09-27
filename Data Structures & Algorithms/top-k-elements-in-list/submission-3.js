class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const count = {}

        for(let i=0;i<nums.length;i++){
            if(!count[nums[i]]){
                count [nums[i]]=0
            }
            count[nums[i]]++;
        }

        return Object.keys(count)
            .sort((a, b) => count[b] - count[a])
            .slice(0, k)
            .map(Number);

    }

}