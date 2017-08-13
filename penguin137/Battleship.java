import java.util.Scanner;
import java.util.Random;


class Battleship{
	public static void main(String[] args) {
		Scanner scanner = new Scanner (System.in);
		int [][] battle = new int [5][5];
		Random point = new Random();
		int x =point.nextInt(5);
		int y =point.nextInt(5);
		int q;
		int guessy;
		int guess;
			do{System.out.println("Can you guess the x coordinate?");
			guess = scanner.nextInt();} while(x != guess);
			
				
			do{ System.out.println("Now that you have the x coordinate of the enemy ship, can you find y?");
			guessy = scanner.nextInt();	}
			while (y != guessy);
							if (y == guessy){
					System.out.println("You win!");}
					System.out.println("Press q to quit");
						q = scanner.nextInt();
	}
}