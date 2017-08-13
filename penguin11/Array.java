import java.util.Scanner;

class Array {
	public static void main(String[] args) {
		Scanner scanner = new Scanner(System.in);
		String[] colors = {"red", "blue", "green", "yellow", "orange"};
		System.out.println("Enter a color to see if it is in the array");
		String findThis = scanner.next();
		boolean found = false;
		for (String p :colors) {
			if (p.equals(findThis)){
				System.out.println("You got it.");
				found = true;
			}
/*
			char[] word = p.toCharArray();
			for (int i=0; i<word.length; i++) {
				if (i % 2 == 0) {
					System.out.print((char) (word[i] - 32));

				} else {
					System.out.print(word[i]);

				}
			}
			System.out.println(" " + p.toUpperCase()); */
		}
		if (found == false) {
			System.out.println("Not in there.");
		}
	}
}