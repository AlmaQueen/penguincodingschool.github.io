import java.util.Scanner;

public class Lightning{
	public static void main(String[] args){
		Scanner input = new Scanner(System.in);
		System.out.println("Enter the seconds between the thunder and lightning.");
		double time = input.nextDouble();
		double distance = time/5;
		System.out.println("The storm is "+distance+" miles away.");
	}
}