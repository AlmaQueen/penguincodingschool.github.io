import java.util.Scanner;
class Lightning {
	public static void main(String [] args) {
		System.out.println("How many seconds passed since you heard the thunder?");
		Scanner scanner = new Scanner (System.in);
		double seconds= scanner.nextDouble();
		double dist;
		dist=seconds*1100;
		System.out.println("The lightning is "+ dist +" feet away.");
	}
}