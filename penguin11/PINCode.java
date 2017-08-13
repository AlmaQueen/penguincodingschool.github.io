import java.util.Scanner;
class PINCode {
	public static void main(String[] args) {
		Scanner scanner = new Scanner(System.in);
		System.out.println("Enter a five-digit code");
		int choice = scanner.nextInt();
		for (int i=0; i<5; i++) {
			if (choice == 12345) {
		        System.out.println("You guessed the code");
		        break;
		        } else {
		    	    System.out.println("Guess again!");
		    	    choice = scanner.nextInt();

		        }
        
		}
		if (choice != 12345)
	        System.out.println("Too many incorrect tries");
	}
}