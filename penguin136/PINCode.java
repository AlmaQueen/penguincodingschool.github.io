import java.util.Scanner;

class PINCode {
	public static void main(String[ ] args){
		int x = 23456;
		Scanner scanner = new Scanner (System.in);
		System.out.println("Enter a five digit number");
		int y = scanner.nextInt();
		while(x!=y){
			System.out.println("Incorrect");
			y = scanner.nextInt();

			while(x==x){
				System.out.println("Correct");
			}
		}
	}
}