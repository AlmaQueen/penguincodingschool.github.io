import java.util.Scanner;
import java.util.Random;

class Guessnumber{
	public static void main(String[] args) {
		Scanner scanner = new Scanner (System.in);
		Random rand = new Random();
	int answer = rand.nextInt(10);
	int guess = scanner.nextInt();	
		while(answer != guess){
			System.out.println("Can you guess the number?");
			guess = scanner.nextInt();	
				if (answer == guess){
				System.out.println("You got it!"); break;}
				else {continue;}

		}
			
	}

}