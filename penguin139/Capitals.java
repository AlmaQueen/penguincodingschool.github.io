import java.util.Scanner;
	class Search{
	public static void main(String[]args){
		Scanner scanner= new Scanner(System.in);
		String[] capital = {"Boston","Manchester"};
		String findThis;
		System.out.println("What are the capital cities of Massachusetts and New Hampshire respectively?");
		findThis=scanner.next();

		for ( String c : capital ) {
			if (c.equals (findThis) ) {
				System.out.println("Correct!");
			}
		}
	}	
}