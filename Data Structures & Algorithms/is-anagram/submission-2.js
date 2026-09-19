class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        // if(s.length!==t.length) return false;
        // const sCount={}
        // const tCount={}
        // for (const i in s){
        //     sCount[s[i]]= 1+ (sCount[s[i]] || 0)
        //     tCount [t[i]]=1+ (tCount[t[i]] || 0)
        // }
        // for(const key in sCount){
        //     if(sCount [key] !== tCount[key]){
        //         return false
        //     }
        // }
        // return true
                if (s.length !== t.length) {
            return false;
        }
        const count = new Array(26).fill(0);
        for(let i =0;i<s.length;i++){
            count [s.charCodeAt(i) - 'a'.charCodeAt(0)]++;
            count [t.charCodeAt(i) - 'a'.charCodeAt(0)]--;

        }
        return count.every((value)=>value===0);
    }
}
