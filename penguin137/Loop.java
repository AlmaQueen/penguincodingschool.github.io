import java.util.Scanner;

class Loop{
	public static  void main(String[] args) {
		Scanner scanner = new Scanner (System.in);
		int x = 78798;
		System.out.println("Enter the code");
		int pin = scanner.nextInt();
		
		while (x!= pin){
			System.out.println("Enter the code");
			 pin = scanner.nextInt();
				
		}
	}
}