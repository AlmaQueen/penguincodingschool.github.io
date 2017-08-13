import java.util.Scanner;

class Voting {
	public static void main(String[] args) {
		System.out.println("Is it 1789 or 2017?");
		Scanner scanner = new Scanner(System.in);
		boolean vote;
		int choice = scanner.nextInt();
		if(choice==1789) { // in 1789
			System.out.println("Are you male or female?");
			String gender = scanner.next();
			if (gender.equals("male")) { // male
				System.out.println("Do you own land?");
				String land = scanner.next();
				if (land.equals("yes")) { // land-owning
					System.out.println("Are you white?");
					String white = scanner.next();
					if (white.equals("yes")) { //white
						System.out.println("How old are you?");
						int age = scanner.nextInt();
						if (age>=21) { // over 21
							vote=true;
						} else { //under 21
							vote=false;
						}
					} else { //not white
						vote = false;
					}
				} else { //doesn't own land
					vote = false;
				}
				
			} else { //female
				vote = false;
			}
		} else if (choice == 2017) {
			System.out.println("How old are you?");
			int age = scanner.nextInt();
			if (age >= 18) { // over 18
				vote = true;
			} else { //under 18
				vote = false;
			}
		} else {
			System.out.print("You must enter either 1789 or 2017. ");
			vote=false;
		}
		if (vote==true) {
			System.out.println("You can vote");
		} else {
			System.out.println("You cannot vote");
		}

	}
}