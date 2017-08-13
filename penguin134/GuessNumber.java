import java.util.Scanner;

class GuessNumber{

	public static void main(String args[]){

	int randnum = (int)(11*Math.random());
	int guessnum = 0;
	int n = 0;
	Scanner scanner = new Scanner (System.in);

	do{

		System.out.println("Enter your guess! (from 0 to 10) ");
		try {
			guessnum = scanner.nextInt();
		} catch (java.util.InputMismatchException e) {
			System.out.println("Quitting!");
			System.exit(0);
		}
		n++;

	}while(randnum != guessnum);
	System.out.println("Good Job you guessed the answer in " +n+ " guesses!");

	}

}