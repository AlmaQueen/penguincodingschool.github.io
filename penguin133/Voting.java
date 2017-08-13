import java.util.Scanner;
class Voting {
	public static void main(String args[]){
		System.out.println("Is the year 1789 or 2017?");
		Scanner scanner= new Scanner(System.in);
		int n= scanner.nextInt();
		System.out.println("Are you male or female?");
		String gender= scanner.next();
		System.out.println("Are you white? Enter true if you are, false otherwise.");
		String race=scanner.next();
		System.out.println("Do you own land? Enter true if you do, false otherwise.");
		String land= scanner.next();
		System.out.println("How old are you?") ;
		int age= scanner.nextInt();
	if(n==1789)
		if(gender.equals("female")){
			System.out.println("You cannot vote.");
		}
		else if(race.equals("false")) {
				System.out.println("You cannot vote.");
			}
		else if(land.equals("false")){
				System.out.println("You cannot vote.");
			}
		else if(age<=21){
			System.out.println("You cannot vote.");
		}
		else {
			System.out.println("You can vote.");
		}
	if(n==2017)	{	
		if(age<18){
			System.out.println("You cannot vote.");
		}
		else{
			System.out.println("You can vote.");
		}
		}
	}

}