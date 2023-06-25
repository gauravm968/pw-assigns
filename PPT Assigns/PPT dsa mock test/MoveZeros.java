import java.util.Arrays;

public class MoveZeros{

    public static int[] moveZeroes(int[] nums) {
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

    public static void main(String[] args) {
        System.out.println(Arrays.toString(moveZeroes(new int[]{0,1,0,3,12})));
    }
}
