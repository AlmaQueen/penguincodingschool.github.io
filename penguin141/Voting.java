import java.util.Scanner;

class Voting{

	public static void main(String [] args){

		boolean canVote = true;

		System.out.println("Is the year 1789 or 2017?"); //1789
		Scanner scanner = new Scanner(System.in);
		String year = scanner.next();

		if (year.equals("1789")){
			System.out.println("Are you male or female?"); //gender
			String gender = scanner.next();
			if (gender.equals("female")){
				canVote = false;
			}

			else{
				System.out.println("Are you white?"); //ethnicity
				boolean white = scanner.nextBoolean();
				if (!white){
					canVote = false;
				}

				else{
					System.out.println("Do you own land?"); //land
					boolean land = scanner.nextBoolean();
					if(!land){
						canVote = false;
					}

					else{
						System.out.println("How old are you"); //age
						int age = scanner.nextInt();
						if(age < 21){
							canVote = false;
						}
						
						else{
							canVote = true;
						}
					}
				}

			}

		} //1789 brace
		

		if (year.equals("2017")){ //2017
			System.out.println("Are you 18 years or older?"); //age
			boolean nowAge = scanner.nextBoolean();
			if (!nowAge){
				canVote = false;
			}
			else{
				canVote = true;
			}

		} //2017 brace
		if (!canVote){ //shortcut for vote
				System.out.println("You cannot vote");
			}
		else {
			System.out.println("You can vote");
		}
	} //main function brace
} //class brace