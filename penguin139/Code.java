import java.util.Scanner;
	class Code{
	public static void main(String[]args){
	//System.out.println("Got the code?! (yes/no)")
	Scanner scanner = new Scanner(System.in);
	System.out.println("Well then gimme the four digit code!");
	int response1= scanner.nextInt();
	int code = 1337;
	for(int tries = 5; tries>0; tries--) {
		if (response1==code) {
			System.out.println ("Secret unlocked!");
			break;
		}
		System.out.println ("Wrong, " + tries + " tries left.");
		response1= scanner.nextInt();
	}
	}
	
}