import java.util.Scanner;

class PINCode{
	public static void main(String[] args){
		int pin = 45092;
		int counter = 3;
		//System.out.println("Enter the PIN Code: ");
		Scanner scanner = new Scanner(System.in);
		//int guess = scanner.nextInt();
		int guess = 0;

		while(counter > 0 && guess != pin){
			System.out.println("Enter the PIN Code: ");
			guess = scanner.nextInt();
			counter--;
		}	

		if (guess == pin) {
			System.out.println("You unlocked the secret!");
	}
}
}