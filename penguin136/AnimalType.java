import java.util.Scanner;

public class AnimalType {
	public static void main(String[ ] args){
		Scanner scanner = new Scanner(System.in);
		String[] animals = {"Dog", "Cat", "Bird", "Fish", "Aligator", "Mouse", "Shark", "Dolphin"};

		String findThis;

		System.out.println("These are " +animals.length+ " different animals.");

		System.out.println("Animal Types: ");
		for (String a : animals) {
			System.out.print(a + ", ");
		}
		System.out.print("Which type of animals would you like to find?");
		findThis = scanner.next();

		for (String a : animals){
			if (a.equals(findThis) ){
				System.out.println("Found "+a+" animals");
			} 
			if (false) {
				System.out.println("Animal not found");
			}
		}
	}
}