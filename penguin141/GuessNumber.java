import java.util.Scanner;

class GuessNumber{
	public static void main(String[] args){
		int randomnumber = 1 + (int)(10*Math.random());
		Scanner scanner = new Scanner(System.in);
		int guess = 0;
	
		// for (int x = 0; x < 10; x++) {
		// 	if (guess != randomnumber){
		// 		System.out.println("Guess a random number and see if it matches the one the computer wants!");
		// 		guess = scanner.nextInt();
		// 	}
		// 	else{
		// 		System.out.println("You guessed the number!");
		// 		break;
		// 	}
		// }

		while (guess != randomnumber){
			System.out.println("Guess a random number between 1-10");
			guess = scanner.nextInt();
		}

		System.out.println("You guessed the number!");
	}
}