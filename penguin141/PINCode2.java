import java.util.Scanner;

class PINCode2{
	public static void main(String[] args){
		int pin = 45092;
		Scanner scanner = new Scanner(System.in);
		int guess = 0;

		for (int x = 0; x<3; x++) {
			System.out.println("Enter the PIN Code: ");
			guess = scanner.nextInt();

			if (guess == pin) {
				System.out.println("You unlocked the secret!");
				break;
			}
			System.out.println("Terminated");			
		}
		
	}
}