import java.util.Scanner;

class Battleship {
	public static void main(String[ ] args){
		Scanner scanner = new Scanner(System.in);
		int board [][] = new int [5][5];

		int row = (int) (Math.random() * 5);
		int col = (int) (Math.random() * 5);
		board[row][col] = 1;

	for 
		System.out.println("Enter a row and column.");

		int guessRow = scanner.nextInt();
		int guessColumn = scanner.nextInt();

		if (board[guessRow][guessColumn] == 1)
			System.out.println("You won!");

	}
}