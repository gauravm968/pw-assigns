import java.util.*;
import java.lang.*;
import java.io.*;


class Assignment1 {

    //Problem 1
    public static int[] twoNumberSum(int[] nums, int target){
      int[] arr = new int[2];
        for(int i=0;i<nums.length;i++){
            for(int j=i+1;j<nums.length;j++){
                if(nums[i]+nums[j] == target){
                    arr[0] = i;
                    arr[1] = j;
                    return arr;
                }
            }
        }
        return arr;
    }

    //Problem 2
    public static int removeElement(int[] nums, int val) {
      int j = 0;
      for(int i = 0; i < nums.length; i++){
        if(nums[i] != val){
            nums[j] = nums[i];
            j++;
        }
    }
      return j;
    }

  //Problem 3
   public static int findTargetValueIndex(int[] nums, int target) {
        //array is sorted
        for(int i=0;i<nums.length;i++){
            if(nums[i] == target){
                return i;
            }
            else if(nums[i] < target && nums[nums.length-1] < target){
                return nums.length;
            }
            else
            {
                if(nums[i] > target)
                {
                    return i;
                }
            }
        }
        return -1;
    }
    
    //Problem 4
     public static int[] incrementByOne(int[] digits) {
        
        for(int i=digits.length-1; i>=0; i--) {
            if(digits[i] < 9) {
                digits[i]++;
                return digits;
            } 
            digits[i] = 0;    // [8,9,9,9]
        }
        int[] result = new int[digits.length+1];
        result[0] = 1;
        return result;
    }

    //Problem 5
    public static int[] mergeTwoArraysSort(int[] nums1, int m, int[] nums2, int n) {
      for(int i=m, j=0; i<nums1.length;i++, j++){
        nums1[i] = nums2[j];  
    }
      Arrays.sort(nums1);
      return nums1;
    }

    //Problem 6
     public static boolean isDuplicatesContains(int[] nums) {
        Arrays.sort(nums);
        for(int i=0;i<nums.length-1;i++)
        {
            if(nums[i] == nums[i+1])
            {
                return true;
            }
        }
        return false;
    }

    //Problems 7
    public static int[] moveZeroesAtEnd(int[] nums) {
        
        int count = 0;
        for(int i=0;i<nums.length;i++)
        {
            if(nums[i] == 0)
            {
                count++;
                continue;
            }
            nums[i-count] = nums[i];
        }
        
        for(int k=0;k<count;k++)
        {
            nums[nums.length-k-1] = 0;
        }
        return nums;
    }

    //Problem 8
    public static int[] findMissingNumber(int[] nums) {   
        int[] res = {-1,-1};

        for(int i=0; i<nums.length;i++){
            int curr = Math.abs(nums[i])-1;
            if(nums[curr]<0)
                res[0] = curr+1;
            else
                nums[curr] = nums[curr] * -1;
        }

        for(int i=0; i<nums.length; i++){
            if(nums[i]>0)
                res[1] = i+1;
        }

        return res;
    }

    public static void main(String[] args) {

      //1
      System.out.println(Arrays.toString(twoNumberSum(new int[]{2,7,11,15},9)));

      //2
      System.out.println(removeElement(new int[]{3,2,2,3},3));

      //3
      System.out.println(findTargetValueIndex(new int[]{1,3,5,6},5));

      //4 
      System.out.println((Arrays.toString(incrementByOne(new int[]{1,2,3}))));

      //5
      System.out.println(Arrays.toString(mergeTwoArraysSort(new int[]{1,2,3,0,0,0},3,new int[]{2,5,6},3)));

      //6
      System.out.println(isDuplicatesContains(new int[]{1,2,3,1}));

      //7
      System.out.println(Arrays.toString(moveZeroesAtEnd(new int[]{0,1,0,3,12})));

      //8 
      System.out.println(Arrays.toString(findMissingNumber(new int[]{1,2,2,4})));
    }
}
