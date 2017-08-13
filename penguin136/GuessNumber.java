import java.util.Scanner;

class GuessNumber {
	public static void main(String[ ] args){
	Scanner scanner = new Scanner (System.in);
	int x;
	int y;
	System.out.println("Enter a number from 1-100");
	x = (int)(100*Math.random());
	y = scanner.nextInt();
	while(y!=x){
		System.out.println(x);
		break;
	}
	}
}