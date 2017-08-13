import java.util.ArrayList;
class Random{
	public static void main(String[]args){
		int size=10;

		ArrayList<Integer> random = new ArrayList<Integer>();
		for (int i=0;i<size; i++){
			random.add((int)(5*Math.random()));
		}
		random.add(27);
		random.add(17);
		random.set(5, 00);

		for (int i=0;i<size; i++){
			if (random.get(i)%2==1){
				System.out.println(i);
				
			}
		}
		for (int i=0;i<size; i++){
			if (random.get(i)%2!=0){
				int pos = random.indexOf(i);
				random.remove(pos);
			}
		}


		Integer[] intArray=random.toArray(new Integer[random.size()]);
		
	}
}