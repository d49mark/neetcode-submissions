class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let l = 0,
            r = heights.length - 1;
        let container = 0;
        while (l < r) {
            let temp = (r - l) * Math.min(heights[l], heights[r]);
            container = Math.max(container, temp);
            if (heights[l] <= heights[r]) {
                l++;
            } else {
                r--;
            }
        }
        return container;
    }
}
