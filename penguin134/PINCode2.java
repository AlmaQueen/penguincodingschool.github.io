import java.util.Scanner;

class PINCode2 {

	public static void main(String args[]){
 int x = 1;
 int y = 0;
 Scanner scanner = new Scanner (System.in);


for (int z = 1; z <= 3; z++){

	System.out.println("Enter the 5 digit Password: ");
	x = scanner.nextInt();
	if (x==54321) {
	System.out.println("You unlocked the secret password!");
	System.exit(0);
	}
	System.out.println("Too many failed attempts");

}
}
}