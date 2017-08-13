import java.util.Scanner;
class GuessNumber {
	public static void main(String args[]){
		Math.random();
		int answer= (int)(10*Math.random());
		System.out.println("What is my number (0-9)?");
		Scanner scanner= new Scanner(System.in);
		int guess = scanner.nextInt();
		while(guess!=answer){
		System.out.println("Try again:");
		guess=scanner.nextInt();
	}
if (guess==answer){
System.out.println("You guessed the number");
}
	}
}