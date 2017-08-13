import java.util.Scanner;

class VotingEligibility {
	public static void main(String[ ] args) {
		System.out.println("Enter the year");
		Scanner scanner = new Scanner (System.in);
		int year = scanner.nextInt();
	if (year== 1789) {
		System.out.println("Enter gender");
		String gender = scanner.next();
		if (gender.equals("male")) 
			System.out.println("Enter race");
		
		else
			System.out.println("You cannot vote"); 
			
			String race = scanner.next();
			if (race.equals("white"))
				System.out.println("Are you a landOwner?");
			
			else
				System.out.println("You cannot vote"); 
			
			String landOwner = scanner.next();
			if (landOwner.equals("yes"))
			System.out.println("You can vote!");
			
			else 
				System.out.println("You cannot vote");
	if (year== 2017)
		System.out.println("Enter gender");
		String genderr = scanner.next();
		if (genderr.equals ("male || female"))
			System.out.println("Enter age");
		int age = scanner.nextInt();
			if (age>=18)
				System.out.println("You can vote!");
			else
				System.out.println("You are not old enough to vote");
		}

		}
	}
