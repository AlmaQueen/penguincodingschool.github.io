import java.util.Scanner;

 class VotingEligibility{
 	public static void main(String[]args){
 		Scanner scanner = new Scanner(System.in);
 		System.out.println("What is the year?");
 			int year = scanner.nextInt();
 		if(year >= 1789 && year < 1971){
 			System.out.println("Are you male or female?");
 				String gender = scanner.next();
 			System.out.println("Is your ethnicity/race white?");
 				String race = scanner.next();
 			System.out.println("Do you own land?");
 				String land_ownership = scanner.next();
 			System.out.println("How old are you?");
 				int age = scanner.nextInt();
 			if(gender.equals("male") && race.equals("yes") && land_ownership.equals("yes") && age >= 21){
 				System.out.println("Yes you can vote");
 				System.out.println("");
 			}
 			else{
 				System.out.println("No, you cannot vote");
 				System.out.println("");
 			}
 		}
 		if(year >= 1971){
 			System.out.println("How old are you?");
 				int age = scanner.nextInt();
 			if(age >= 18){
 				System.out.println("Yes you can vote");
 				System.out.println("");
 			}
 			else{
 				System.out.println("No, you cannot vote");
 				System.out.println("");
 			}
 		}
 		else{
 			System.out.println("There was no voting in this year");
 			System.out.println("I am not able to calculate your voting eligibility for this year");
 			System.out.println("");
 		}
 	}
 }