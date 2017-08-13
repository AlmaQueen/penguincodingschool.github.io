import java.util.Scanner;

class Lobster {
	public static void main(String[] args) {
	System.out.println ("Enter the year");
		Scanner scanner = new Scanner(System.in);
		int year =scanner.nextInt();
		if (year == 1789) System.out.println("Enter your gender");
			else  System.out.println("How old are you");
				int age = scanner.nextInt();
				if (age >= 18) System.out.println("Awesome, you can vote!");
					else System.out.println("Sorry, you are unable to vote");
			String gender = scanner.next();
			if (gender.equals("male")) System.out.println("Enter your ethnicity");
				else System.out.println("Sorry, you are unable to vote");
				String ethnicity = scanner.next();
				if (ethnicity.equals("white")) System.out.println("Do you own land?");
					else System.out.println("Sorry, you are unable to vote");
					String land = scanner.next();
						if (land.equals("yes")) System.out.println("How old are you");
						else System.out.println("Sorry, you are unable to vote");
						if (age >= 18) System.out.println("Awesome, you can vote!");
							else System.out.println("Sorry, you are unable to vote");
			}
			
}