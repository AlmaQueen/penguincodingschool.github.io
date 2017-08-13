import java.util.Scanner;

class RPS{

public static void main(String args[]){

	String user = "none";
	String comp = "none";
	int randnum = (int)(3*Math.random());
	int win=0;
	Scanner scanner = new Scanner (System.in);

	System.out.println("Play Rock, Paper, Scissors against the computer! Choose your play!");
	user = scanner.next();


	switch(randnum){
		case 0: comp = "rock";
		case 1: comp = "paper";
		case 2:	comp = "scissors";
		break;
		default: System.out.println("Something went wrong");

	}


if (randnum == 0 && user.equals("rock") )
win = 0;

else if (randnum == 1 && user.equals("paper") )
win = 0;

else if (randnum == 2 && user.equals("scissors") )
win = 0;

else if (randnum == 0 && user.equals("scissors") )
win = 1;

else if (randnum == 0 && user.equals("paper") )	
win = 2;

else if (randnum == 1 && user.equals("scissors") )
win = 2;

else if (randnum == 1 && user.equals("rock") )
win = 1;

else if (randnum == 2 && user.equals("paper") )
win = 1;

else if (randnum == 2 && user.equals("rock") )
win = 2;

System.out.println(comp);


if (win == 0)
	System.out.println("It's a tie!");

else if (win == 1)
	System.out.println("Sorry, the computer won");

else if (win == 2)
	System.out.println("You win!!!");
}
}