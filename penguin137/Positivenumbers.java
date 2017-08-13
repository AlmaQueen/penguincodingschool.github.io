import java.util.Scanner;

class PositiveNumbers {
	public static void main(String args){
		System.out.println("Enter a number:");
		Scanner scanner = new Scanner(System.in);
		int n = scanner.nextInt();
	if (n>0)
		{if(n%2 == 0)
			System.out.println(n+ "is positive and even");}
			else {System.out.println(n+ "is positive and odd");}}
	else System.out.println(n+ "is not positive");


}}
