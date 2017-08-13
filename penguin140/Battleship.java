import java.util.Scanner;

class Battleship{
	public static void main(String[]args){
		Scanner scanner = new Scanner(System.in);
		System.out.println();
		//System.out.println("enter the board size you would like:");
		//int board_size = scanner.nextInt();
		int board_size = 2;
		//int num_ships = 2;
		//int ships[][] = new int[num_ships][2];
		int board[][] = new int[board_size][board_size];
		int pos_row = (int)(board_size*Math.random());
		int pos_col = (int)(board_size*Math.random());
		//for(int i = 0 ; i <= ships.length ; i++){
			//for(int j = 0 ; j <= ships[0].length){
				//int pos = (int)(board_size*Math.random());
			//}
		//}
		board[pos_row][pos_col] = 1;
		System.out.println("");
		System.out.println("Welcome to Battleship");
		System.out.println("the size of the board is " + board_size + " by " + board_size);
		System.out.println("enter the row number that you think the ship is on");
		int guess_row = scanner.nextInt();
		System.out.println("now enter the column number you think the ship is on");
		int guess_col = scanner.nextInt();
		if(guess_row == pos_row+1){
			if(guess_col == pos_col+1){
				System.out.println("You hit the ship!\n");
			}
			else{
				int row = pos_row + 1;
				int col = pos_col + 1;
				System.out.println("You did not hit the ship");
				System.out.println("The ship was on row " + row + " and column " + col);
				System.out.println();
			}
		}
		else{
			int row = pos_row + 1;
			int col = pos_col + 1;
			System.out.println("You did not hit the ship");
			System.out.println("The ship was on row " + row + " and column " + col);
			System.out.println();
		}
	}
}