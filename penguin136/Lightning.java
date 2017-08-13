import java.util.Scanner;
class Lightning {
	public static void main(String[ ] args)  {
		Scanner scanner =new Scanner(System.in);
		System.out.println(scanner.nextLine());
		double seconds = 7.2;
		double distance = seconds * 1100;
		System.out.println("Lightning is "+distance+" \n feet away");
	}
}