import java.util.Scanner;

class Voting {
	public static void main(String args[]){

	System.out.println("What year is it? (either 1789 or 2017)");
	Scanner scanner = new Scanner (System.in);
	int year = scanner.nextInt();

	if (year == 1789 || year == 2017){

	System.out.println("How old are you?");
	int age = scanner.nextInt();

	System.out.println("Are you male or female?");
	String gender = scanner.next();

	System.out.println("Do you own land? (yes/no)");
	String land = scanner.next();

	System.out.println("Are you white? (yes/no)");
	String race = scanner.next();

	if (year == 2017){

			if (age >= 18)
				System.out.println("Yes, you can vote! In 2017 the only requirement to vote is that you must be 18 or older (and a citizen)");

			else
				System.out.println("Sorry, you're too young to vote!");
		}

	else if (year == 1789){

			if (age >=21 && gender.equals("male") && land.equals("yes") && race.equals("yes"))
				System.out.println("Yes, you can vote!");

			else 
				System.out.println("Sorry you can't vote, in 1789 you must be 21 or older, male, white and landowning.");
	}
}
else 
	System.out.println("Year must be either 1789 or 2017");
}
}