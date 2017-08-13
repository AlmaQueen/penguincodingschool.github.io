import java.util.Scanner;

class PINCode {
	public static void main(String[ ] args) {
	Scanner scanner = new Scanner (System.in);
	int pin;
	int guess;

	pin = 12345;

	System.out.println("Enter your pin");
	guess = scanner.nextIn();



	
	for(int i =0; i<5; i++ ){
		if (guess != pin) {
			System.out.println("Incorrect pin");
			System.out.println("Enter your pin");
				guess = scanner.nextIn();}
			
	}
	}
}