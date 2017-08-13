import java.util.Scanner;

class PINcode{
	public static  void main(String[] args) {
		Scanner scanner = new Scanner (System.in);
		int x = 78798;
		int pin = scanner.nextInt();
		
		while (x!= pin){
			System.out.println("Enter the code");
			 pin = scanner.nextInt();
				System.out.println("You won nothing!");
		}
	}
}S