import java.util.ArrayList;

class ArrayListTest {

	public static void main(String[ ] args) {

		ArrayList<Integer> numbers = new ArrayList<Integer>();

		int num= 0;

		for (int numb=0; numb<7; numb++) {

			System.out.println("The index position of " +num+ " is " +numb);
		}


		for (int numb=1; numb<7; numb+=2){

			System.out.println("The odd index position of " +num+ " is "+numb);
		}

		{
			Integer[] IntegerArray = numbers.toArray(new integer[numbers.size()]);
				System.out.println("The array is: "+Arrays.toInteger(IntegerArray));
			}

	}
}