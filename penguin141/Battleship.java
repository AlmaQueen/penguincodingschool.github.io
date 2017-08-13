import java.util.Scanner;

class Battleship{
	public static void main(String[] args){
		int board [][] = new int [5][5];
		Scanner scanner = new Scanner(System.in);
		int randomrow = 0;
		int randomcol = 0;
		int ships [][] = new int[2][1]; //WORK ON THIS


		for(int r = 0; r < board.length; r++){            //PRINT OUT OG BOARD
			for (int c = 0; c < board[r].length; c++){
				board[r][c] = 0;
				System.out.print("X");
			}
			System.out.println();
		}

		for(int r = 0; r < board.length; r++){
			for (int c = 0; c < board[r].length; c++){
				System.out.print(board[r][c]);
			}
			System.out.println();
		}

	for ( ; ;){
			int rowguess = scanner.nextInt();
			int colguess = scanner.nextInt();

			if ((randomrow == rowguess) && (randomcol == colguess)){
				System.out.println("You hit the ship!");
			}

			else{
				System.out.println("Try again."); //try again
				board[rowguess][colguess] = 2; //change value of already hit guess

				for(int r = 0; r < board.length; r++){            //PRINT OUT NEW BOARD
					for (int c = 0; c < board[r].length; c++){
						if(board[r][c] == 0){
							System.out.print("X");
						}
						if(board[r][c] == 1){
							System.out.print("X");
						}
						if(board[r][c] == 2){
							System.out.print("M");
						}
					}
					System.out.println();
				}
			}
		}
	}
}
/*for(int r = 0; r < board.length; r++){
			for (int c = 0; c < board[r].length; c++){
				System.out.print(board[r][c]);
			}
			System.out.println();
		}*/

				/*for(int r = 0; r < board.length; r++){            
			for (int c = 0; c < board[r].length; c++){
				randomrow = 1 + (int)(4*Math.random());  //CREATING SHIP
				randomcol = 1 + (int)(4*Math.random());
				}
			board[randomrow][randomcol] = 1;
			}*/
