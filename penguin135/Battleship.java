import java.util.Scanner;
import java.util.Random;

public class Battleship{
	public static void main(String[] args){
		//               0 1 2 3 4 5 6 7 8 9
		int[][] cboard={{0,0,0,0,0,0,0,0,0,0},//0
						{0,0,0,0,0,0,0,0,0,0},//1
						{0,0,0,0,0,0,0,0,0,0},//2
						{0,0,0,0,0,0,0,0,0,0},//3
						{0,0,0,0,0,0,0,0,0,0},//4
						{0,0,0,0,0,0,0,0,0,0},//5
						{0,0,0,0,0,0,0,0,0,0},//6
						{0,0,0,0,0,0,0,0,0,0},//7
						{0,0,0,0,0,0,0,0,0,0},//8
						{0,0,0,0,0,0,0,0,0,0}};//9
		Random coordinates = new Random();
		int y = 0;
		int x = 0;
		int shpdir = coordinates.nextInt(4);
		if(shpdir == 0){
			x = coordinates.nextInt(10);
			y = coordinates.nextInt(9) + 1;
			cboard[x][y-1] = 1;
		}
		if(shpdir == 1){
			x = coordinates.nextInt(8);
			y = coordinates.nextInt(10);
			cboard[x+1][y] = 1;
		}
		if(shpdir == 2){
			x = coordinates.nextInt(10);
			y = coordinates.nextInt(8);
			cboard[x][y+1] = 1;
		}
		if(shpdir == 3){
			x = coordinates.nextInt(8) + 1;
			y = coordinates.nextInt(10);
			cboard[x-1][y] = 1;
		}
		
		cboard[x][y] = 1;
		Scanner input = new Scanner(System.in);
		int any = 0;
		int anx = 0;
		int tries = 0;
		boolean nothit = true;
		while(nothit){
			System.out.println("What's the x coordinate?");
			try{
				anx = input.nextInt() - 1;
			}catch(java.util.InputMismatchException e){
				System.out.println("Please enter a number (1-10)");
				System.out.println("What's the x coordinate?");
				anx = input.nextInt() - 1;
			}
			System.out.println("What's the y coordinate?");
			try{
				any = input.nextInt() - 1;
			}catch(java.util.InputMismatchException e){
				System.out.println("Please enter a number (1-10)");
				System.out.println("What's the y coordinate?");
				any = input.nextInt() - 1;
			}
			tries++;
			if(cboard[anx][any] == 5){
				System.out.println("You already hit there!");
			}
			if(cboard[anx][any] == 1){
				System.out.println("Hit");
				cboard[anx][any] = 5;
				nothit = false;
			}
			if(cboard[anx][any] == 0){
				System.out.println("miss!");
				cboard[anx][any] = 5;
			}	
		}
	}
}
/*
||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
5555555555555555555555555555555555555555555555555555555555555555555555555555
||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
5555555555555555555555555555555555555555555555555555555555555555555555555555
||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
