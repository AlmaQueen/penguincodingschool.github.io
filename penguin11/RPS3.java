import java.util.Scanner;

class RPS3 {
	public static void main(String[] args) {

		int n = 3 + 2*(int)(4*Math.random());
		System.out.println("Enter a number from 1 to " + n + ".");
		int player = 0;

		Scanner scanner = new Scanner(System.in);
		try {
			player = scanner.nextInt();
		} catch (java.util.InputMismatchException e) {
			System.out.println("You didn't choose a number");
			return;
		}
		if (player < 1 || player > n) {
			System.out.println("You didn't choose a number between 1 and "+n);
			return;
		}
		//int pInt = player.compareTo("0"); //converts the player's input from string to int

// decides what the player and computer chose
		System.out.println("You chose " + player);
		int computer = 1 + (int)(n*Math.random());
		System.out.println("Computer chose " + computer);


//decides who won
		int difference = computer - player;
		if (difference<0) {
			difference+=n;
		}

		if (difference==0)
			System.out.println("You tie");
		else {
			if (difference<=n/2)
				System.out.println("You win");
			else 
				System.out.println("You lose");
		}
	
	}
}