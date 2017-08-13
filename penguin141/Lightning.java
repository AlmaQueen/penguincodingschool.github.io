import java.util.Scanner;
class Lightning {
	public static void main(String[] args) {
		System.out.println("How many seconds have passed since you heard the thunder?");
		Scanner scanner = new Scanner(System.in);
		double seconds = scanner.nextDouble();
		double distance = seconds*1100;
		System.out.println("The lightning is "+distance+" feet away");
	}
}