import java.util.ArrayList;
import java.util.Iterator;

class ArrayListLearning{
	public static void main(String[]args){
		ArrayList<Integer> num = new ArrayList<>();
		for(int i = 0 ; i < 10 ; i++){
			int random_num = (int)(101*Math.random());
			num.add(random_num);
		}
		num.add(11);
		num.add(12);
		num.add(5,5);
		System.out.println(num);
		System.out.println();

		Iterator<Integer> iterator = num.iterator();
		while(iterator.hasNext()){
			int current = iterator.next();
			if(current%2 == 1){
				System.out.println(current);
				iterator.remove();
			}
		}
		System.out.println();
		System.out.println(num);
		Integer[] num_array = num.toArray(new Integer[num.size()]);
		System.out.println();
		for(int n : num_array){
			System.out.println(n);
		}
		int sum = 0;
		for(int a : num_array){
			sum += a;
		}
		System.out.println();
		System.out.println(sum);
	}
}