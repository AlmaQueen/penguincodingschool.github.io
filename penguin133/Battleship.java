import java.util.Scanner;
class Battleship{
	public static void main(String[] args){
		Scanner scanner= new Scanner(System.in);
		int [][] board =new int[5][5];
		
		int row=(int)(5*Math.random());
		int col=(int)(5*Math.random());
		board[row][col]=1;
		System.out.println("Guess the row.");
		int guessrow =scanner.nextInt();
		System.out.println("Guess the column.");
		int guesscol =scanner.nextInt();

		if(row==guessrow){
			if(col==guesscol){
				System.out.println("You sunk the ship.");
			}
		}
		
	}

}