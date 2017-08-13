import java.util.Scanner;
import java.util.ArrayList;

class battleship{

public static void main(String args[]){
	int shipx = (int)(4*Math.random());
	int shipy = (int)(4*Math.random());
	int userx, usery;
	int x = 0;
	Scanner scanner = new Scanner (System.in);

	int[][] board = new int [5][5];

	System.out.println("Choose x coordinate");
	userx = scanner.nextInt();

	System.out.println("Choose y coordinate");
	usery = scanner.nextInt();

	do{

		x++;

		System.out.println("Choose x coordinate");
	userx = scanner.nextInt();

	System.out.println("Choose y coordinate");
	usery = scanner.nextInt();

	if (userx == shipx && usery == shipy)
		System.out.println("You've sunk the ship!");

	else {
		System.out.println("Try again!");
	}
	
if (x > 5)
	System.out.println("Too many tries, you lose!");

}while(userx != shipx && usery != shipy);
}
}