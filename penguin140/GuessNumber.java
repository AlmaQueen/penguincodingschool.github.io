import java.util.Scanner;
import java.io.IOExeption;

class GuessNumber{
	public static void main(String[]args) throws java.io.IOException {
			Scanner scanner = new Scanner(System.in);
			System.out.println("Guess my number between 0 and 100");
			System.out.println("If you want to quit the game, press q");
			int number = (int)(101*Math.random());
			int guess = scanner.nextInt();
			char quit;
			for( ; ; ){
				quit = (char)System.in.read();
				if(quit == 'q'){
					break;
				}
				while(guess != number){
					System.out.println("Your guess is not correct");
					if(guess < number){
						System.out.println("My number is higher than your guess");
					}
					if(guess > number){
						System.out.println("My number is lower than your guess");
					}
					guess = scanner.nextInt();
				}
				if(guess == number){
					System.out.println("You are correct, that is my number");
				}
			}
	}
}
