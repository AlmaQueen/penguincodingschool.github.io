import java.util.Scanner;

class Battleship {
	public static void main(String [] args) {

		System.out.println("Battleship Game");

		Scanner scanner = new Scanner(System.in);

		int row;
		int column;
		int numShips=3;
		int tries = 0;
		int hits=0;
		boolean win = true;

		int board[][]=new int[5][5];
		int ships[][]=new int[numShips][3];

		for (int i=0; i<numShips; i++) {
			ships[i][0]=(int)(4*Math.random());
			ships[i][1]=(int)(4*Math.random());
			ships[i][2]=2;
			for(int j=0;j<ships[i][2];j++) {
				board[ships[i][0]+j][ships[i][1]] =1;
			}
			System.out.println(ships[i][0]+","+ships[i][1]);
		}



		do {
			System.out.println("Enter a row (0-4)");
		    row = scanner.nextInt();
			System.out.println("Enter a column (0-4)");		
		    column = scanner.nextInt();

		    tries++;

		    if (board[row][column]==1){
			    System.out.println("You hit the ship at "+row+
			    	", "+column);
			    hits++;
		    } 
		    else
			    System.out.println("Miss!");
			if (tries==8) {
				System.out.println("Game over");
				win = false;
			}
	    } while (hits<6 && tries<8);

	    if (win){
	    	System.out.println("You hit all the ships! You win!! :)");
	    }
	}

	void printboard(int[5][5] board) {
		for (int row = 0; row<board.length; row++) {
			for (int col = 0; col<board[row].length; col++){
				System.out.print(col);
			}
		}
	}
}