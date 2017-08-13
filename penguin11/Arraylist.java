import java.util.ArrayList;
import java.util.Iterator;

class Arraylist {
	public static void main(String[] args) {
		ArrayList<Integer> numbers = new ArrayList<>();
		for (int i=0; i<10; i++) {
			int value = (int)(50*Math.random());
			numbers.add(value);
		}
		System.out.println(numbers);

		numbers.add(3);
		numbers.add(44);
		System.out.println(numbers);

		System.out.println("Odd numbers:");

		for (int j = 0; j < numbers.size(); j++) {
			if(numbers.get(j)%2==1) {
				System.out.println(j);
			}
		}

		Iterator<Integer> iterator = numbers.iterator(); 
		while (iterator.hasNext()) {
			int element = iterator.next();
			if (element%2==1)
				iterator.remove();
		}
		System.out.println(numbers);

		Integer[] numArray = numbers.toArray(new Integer[numbers.size()]);

		int sum=0;
		for (int i=0; i<numArray.length; i++) {
			sum+=numArray[i];
		}
		System.out.println("Sum: "+sum);

	}
}