import java.util.Scanner;

class PINcode{
	public static void main(String[]args){
		Scanner scanner = new Scanner(System.in);
		int code = 12345;
		System.out.println("Please enter the code");
		int enterCode = scanner.nextInt();
		int tries = 1;
		while(enterCode != code){
			System.out.println("Please enter the code");
			enterCode = scanner.nextInt();
			tries++;
			if(tries == 5){
				System.out.println("You are not allowed anymore tries");
				break;
			}
		}
		if(enterCode == code){
			System.out.println("You go the code!");
		}

		//for(int x=1 ; x<=5 ; x++){
			//System.out.println(x);
		}
	}
}

