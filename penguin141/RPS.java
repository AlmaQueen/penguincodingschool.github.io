import java.util.Scanner;

class RPS{
	public static void main(String [] args){
		Scanner scanner = new Scanner(System.in);

		for( ; ;){
			System.out.println("Choose either rock(1), paper(2), or scissors(3)");
			int choice = scanner.nextInt();
			int randomguess = 1 + (int)(3*Math.random());

			if ((randomguess == 1 && choice == 2) || (randomguess == 2 && choice == 3) || (randomguess == 3 && choice ==1)){

				System.out.println("You Win!");
			}
			else if (randomguess == choice){
				System.out.println("You Tie!");
			}
			else if ((randomguess == 1 && choice == 3) || (randomguess == 2 && choice == 1) || (randomguess == 3 && choice == 1)){
				System.out.println("You Lose!");
			}


		}	
	}
}