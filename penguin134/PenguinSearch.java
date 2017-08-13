import java.util.Scanner;

public class PenguinSearch{

	public static void main(String[] args){

		Scanner scanner = new Scanner(System.in);
		String[] states = {"Maine", "Kansas", "California",
		"Massachusetts", "Florida", "New Hampshire", "Rhode Island"};


		String findThis;

		System.out.println("I'm thinking of 7 states, guess one of them!");
		findThis = scanner.next();

		for (String p: states){
			if (p.equals(findThis)){
				System.out.println("You win!!");
			return;
			}
		}

		System.out.print("Sorry try again!");
	

	}
}