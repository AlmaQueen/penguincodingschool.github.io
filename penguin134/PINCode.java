import java.util.Scanner;

class PINCode {

	public static void main(String args[]){
 int x = 1;
 Scanner scanner = new Scanner (System.in);
	while(x != 54321){

	System.out.println("Enter the 5 digit Password: ");
	x = scanner.nextInt();

}
System.out.println("You unlocked the secret password!");
}
}