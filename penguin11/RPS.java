import java.util.Scanner;

class RPS {
	public static void main(String[] args) {
		System.out.println("Enter rock, paper, or scissors.");

		Scanner scanner = new Scanner(System.in);
		String choice = scanner.next();

		int computer = (int)(3*Math.random());
		int player;
        String[] weapons = {"rock", "paper", "scissors"};

		System.out.println(weapons[computer]);

		if (choice.equals("rock"))
			player = 0;
		else if (choice.equals("paper"))
			player = 1;
		else
			player = 2;


        switch ((player - computer + 3) % 3) {
            case 0:
                System.out.println("You tie");
                break;
            case 1:
                System.out.println("You win");
                break;
            case 2:
                System.out.println("You lose");
                break;
        }

       /* if (player == computer)
            System.out.println("You tie");
        else if (player > computer) {
            if (player == 3 && computer == 1)
                System.out.println("You win");
            else 
                System.out.println("You lose");
        } else {
            if (player == 1 && computer == 3)
                System.out.println("You lose");
            else 
                System.out.println("You win");
        }*/

/*
		if (player==1){
                if (computer == 1)
                    System.out.println("You tie");
                else if (computer ==2)
                    System.out.println("You win");
			else 
                    System.out.println("You lose");
		} else if (player==2) {
                if (computer == 1)
                    System.out.println("You lose");
                else if (computer ==2)
                    System.out.println("You tie");
			else 
                    System.out.println("You win");
		} else {
                if (computer ==1)
                    System.out.println("You win");
                else if (computer == 2)
                    System.out.println("You lose");
                else
                    System.out.println("You tie");
          }
*/
	}
}