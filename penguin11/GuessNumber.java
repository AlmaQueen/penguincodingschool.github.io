import java.util.Scanner;

class GuessNumber {
	public static void main(String[] args) {
		int answer = 1 + (int)(10*Math.random());
		System.out.println("Enter an integer");
		Scanner scanner = new Scanner(System.in);
		String guess = scanner.next(); 
		while (!guess.equals(""+answer) && !guess.equals("q")) {
			System.out.println("Incorrect");
			guess = scanner.next();
		}
		if(guess.equals(""+answer))
			System.out.println("You win");
		else 
			System.out.println("Quit");
	}
}