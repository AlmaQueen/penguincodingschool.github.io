import java.util.Scanner;
class Battleship{
	public static void main(String []args) {
	Scanner scanner = new Scanner (System.in);

	int [][] board = new int [5][5]; //this is the matrix
    int row_ship = (int)(Math.random()*5);
System.out.println("You can start.(enter in a coordinate)");
int response= scanner.nextInt();
	//board [1][1]= 6;
	for (int[]row : board) {
		for (int col : row) {
			System.out.print(col);
		}
		System.out.println();
	}

	if(response==Battleship); {
		System.out.println("You win!");

}
}
}