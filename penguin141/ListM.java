import java.util.ArrayList;
import java.util.Iterator;

class ListM{
	public static void main(String [] args){
		ArrayList<Integer> nums = new ArrayList<Integer>();	
		for (int a = 0; a < 8; a++){
			nums.add(1 + (int)(100*Math.random()));
		}
		nums.add(45); //MANUALLY ADD TWO NUMBERS
		nums.add(23);

		System.out.println("Number: "+nums); //DISPLAY ALL NUMBERS

		System.out.println("These are the index numbers of the odd numbers"); //INDEX OF ODD NUMBERS
		for (int b = 0; b < nums.size(); b++){
			if(nums.get(b)%2 != 0){
				int n = nums.get(b);
				System.out.println(nums.indexOf(n));
			}
		}

		System.out.println("Odd numbers will now be removed"); //ODD NUMBERS WILL BE REMOVED
		Iterator<Integer> iterator = nums.iterator();
		while (iterator.hasNext()){
			Integer data = iterator.next();
			if (data%2 != 0){
				iterator.remove();
			}
		}

		System.out.println("Number: "+nums);

		Integer[] IntegerArray = nums.toArray(new Integer[nums.size()]);


		int sum = 0;

		for(int d = 0; d < IntegerArray.length; d++){
			sum = sum+IntegerArray[d]; 
		}

		System.out.println("Sum: " + sum);

	}
}