class Solution {


    isAlphanumeric(char) {
        return (
            (char >= 'a' && char <= 'z') ||
            (char >= 'A' && char <= 'Z') ||
            (char >= '0' && char <= '9')
        );
    }
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
       let i=0; 
       let j= s.length-1;
        const sArray= s.split('');
        while(i<j){
         while (i < j && !this.isAlphanumeric(sArray[i])) {
                i++;
            }
            while (j > i && !this.isAlphanumeric(sArray[j])) {
             j--;  
            }
            if(sArray[i].toLowerCase()!==sArray[j].toLowerCase()){
                return false
            }
            i++;
            j--;
        }
      return true
    }
}
