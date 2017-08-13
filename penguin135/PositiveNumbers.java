import java.util.Scanner;

public class PositiveNumbers{
	public static void main(String[] args){
		System.out.println("Enter a number:");
		Scanner input = new Scanner(System.in);
		int number = input.nextInt();
		if(number > 0){
			if(number%2 == 0){
				System.out.println(number + " is positive and even.");
			}else{
				System.out.println(number + " is odd and positive.");
			}
		}else{
			System.out.println(number + " is not positive.");
		}
	}
}