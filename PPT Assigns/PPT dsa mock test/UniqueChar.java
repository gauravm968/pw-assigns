public class UniqueChar {
    
     public static int firstUniqChar(String s) {    
        int lowInd = Integer.MAX_VALUE;
      
        for(char c='a'; c<='z'; c++){
            int index = s.indexOf(c);
            if(index != -1 && index == s.lastIndexOf(c)){
                lowInd = Math.min(lowInd,index);
            }
        }
        return lowInd==Integer.MAX_VALUE?-1:lowInd;    
    }

    public static void main(String[] args) {
        System.out.println(firstUniqChar("loveleetcode"));
    }
}
