import java.util.ArrayList;
import java.util.Random;

public class ArrayLstTest{
	public static void main(String[] args){
		ArrayList<Integer> nums = new ArrayList<Integer>();
		Random rand = new Random();
		for(int counter = 0; counter <= 9; counter++){
			nums.add(rand.nextInt(121));
		}
		System.out.println(nums);

		int[] array = nums.stream().mapToInt(i -> i).toArray();
		for (int i : array) {
			System.out.print(i + ", ");
		}


	}
}