import java.util.Scanner;
class Calculator {
	public static void main(String[] args) {
		System.out.println("Enter two numbers, have the right amount of decimal places");
		Scanner num1 = new Scanner(System.in);
		Scanner num2 = new Scanner(System.in);

		double a = num1.nextDouble();
		double b = num2.nextDouble();
		System.out.println("Sum: " + (a+b));
		System.out.println("Difference: " + (a-b));
		System.out.println("Product: " + (a*b));
		System.out.println("Quotient: " + (a/b));

		/*
		System.out.println("Sum: " + (num1.nextDouble()+num2.nextDouble()));
		System.out.println("Enter two numbers to multiply");
		System.out.println("Product: " + (num1.nextDouble()*num2.nextDouble()));
		System.out.println("Enter two numbers to subtract");
		System.out.println("Difference: " + (num1.nextDouble()-num2.nextDouble()));
		System.out.println("Enter two numbers to divide, make sure that they have the correct number of decimal places");
		System.out.println("Quotient: " + (num1.nextDouble()/num2.nextDouble()));
		*/
	}
}