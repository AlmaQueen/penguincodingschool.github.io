import java.util.Random;
import java.util.Scanner;
//you can also use math.getRandom

public class GuessNum{
	public static void main(String[] args){
		System.out.println("I'm thinking of a number 1 to 50. Guess it!");
		Random num = new Random();
		int answer = num.nextInt(50) + 1;
		int input = 0;
		int tries = 0;
		boolean ask = true;
		while(ask){
			Scanner rohan = new Scanner(System.in);
			try{
				input = rohan.nextInt();
			} catch(java.util.InputMismatchException e){
				System.out.println("You quit.");
				System.exit(0);
			}
			if(input == answer){
				System.out.println("you got it!");
				ask = false;
			}else{
				tries++;
				System.out.println("Nope. You took " + tries + " tries.");
			}
		}
	}
}
