import java.util.Scanner;

public class IfLoops{
	public static void main(String[] args){
		Scanner input = new Scanner(System.in);
		System.out.print("Enter your age. (in years):");
		double age = input.nextDouble();
		if(age<16){
			System.out.println("You are to young to drive.");
		}else{
			System.out.printlnl("You can drive.");
		}
	}
}