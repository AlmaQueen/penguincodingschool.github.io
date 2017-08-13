import java.util.Scanner;

class Vote{
	public static void main(String[] args) {
	System.out.println("Enter the year");
		Scanner scanner = new Scanner(System.in);
		int year =scanner.nextInt();

		System.out.println("Enter your gender");
		String gender = scanner.nextLine();

		System.out.println("Enter your ethnicity");
		String ethnicity = scanner.nextLine();

		System.out.println("Do you own land?");
		String land = scanner.nextLine();

		System.out.println("Enter your age");
		int age = scanner.nextInt();

			if (year == 1789 && gender.equals("male") && ethnicity.equals("white") && land.equals("yes") && age >=18 || year == 2017 && age >=18)
				System.out.println("Awesome, you can vote!");
				else System.out.println ("Sorry, you cannot vote.");
							
	}
}