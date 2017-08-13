import java.util.Scanner;

public class Pincode {
	public static void main(String[] args){
		Scanner input = new Scanner(System.in);
		int answer = 0;
		int password = 12345;
		boolean incorrect = true;
		int tries = 0;
		while(incorrect){
			System.out.println("Type in the code:");
			answer = input.nextInt();
			if(answer == password){
				incorrect = false;
				System.out.println("Password accepted.");
			}
			tries++;
			if(tries>=10){
				incorrect = false;
				System.out.println("You have failed.");
			}
		}
	}
}