import java.util.Scanner;

class Animallarray{
	public static void main(String[] args) {
		Scanner scanner = new Scanner(System.in);
		String[] tanks = {"T-34", "Tiger H1", "M4 Sherman", "Panzer IV", 
		"Panzer III", "M26 Pershing","KV-1" };

		String findThis;

		System.out.println("There are at least" + tanks.length +"different tanks that served during WWII. ");
		
		System.out.println("Tanks");
		for (String t: tanks ){
			System.out.print(t + ", ");
		}
		System.out.println();
		System.out.print("Which tank would you like to find?" )
		findThis=scanner.next(); 

		for (String t: tanks){
			if (t.equalsIgnoreCase(findThis)){
				System.out.println("found" +t+);
			}
		}
	}
}