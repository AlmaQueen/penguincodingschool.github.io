import java.util.Scanner;

class Tanksforallthefish{
	public static void main(String[] args) {
	r5	Scanner scanner = new Scanner(System.in);
		String[] tanks = {"T-34", "Tiger H1", "M4 Sherman", "Churchill", 
		"M26 Pershing", "Panzer IV","KV-1" };

		String findThis;

		System.out.println("There are at least " + tanks.length + " different tanks that served during WWII. ");
		
		System.out.println("Tanks");
		for (String t: tanks ){
			System.out.print(t + ", ");
		}
		System.out.println();
		System.out.print("Which tank would you like to find?" );
		findThis=scanner.next(); 

		for (String t: tanks){
			if (t.equalsIgnoreCase(findThis)){ 
				System.out.println("found " + findThis );
			}
		}
	}
}