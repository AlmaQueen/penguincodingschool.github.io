import java.util.Scanner;
class PINCode1{
	public static void main(String args[]) {
		System.out.println("What is the 5 digit secret code?");
		Scanner scanner= new Scanner(System.in);
		int pin;
		int guess;

		pin=64898;

for (int i=0; i<5; i++) {
		System.out.print("ENTER your pin: ");
		guess=scanner.nextInt();
		while(guess!= pin) {
			System.out.print("ENTER your pin: ");
			guess=scanner.nextInt();
		}
		System.out.print("Got it! ");

	}
}