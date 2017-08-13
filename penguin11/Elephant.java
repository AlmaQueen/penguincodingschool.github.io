class Elephant {
	public static void main(String[] args) {
		String name = "Elephant";
		char initial = 'E';
		boolean bird = false;
		int numSpecies = 2;
		double avgWeight = 2.000;

		int x = 1/2;
		double y = 1/2;
		double z = 1.0/2.0;
		/*System.out.println(x);
		System.out.println(y);
		System.out.println(z);
*/
		int x1 = 5;
		x1++; // x1 is 6
		int y1 = 5;
		y1--; //y1 is 4

		int x2 = 5;
		int y2 = x2++; // y2 is 5, x2 is 6

		int x3 = 5;
		int y3 = x3--;

		int x4 = 5;
		int y4 = ++x4; // x4 is 6, y4 is 6

		int x5 = 5;
		int y5 = --x5;

		System.out.print("x2 is " + x2);
		System.out.println(", y2 is " + y2);

		System.out.print("x3 is " + x3);
		System.out.println(", y3 is " + y3);

		System.out.print("x4 is " + x4);
		System.out.println(", y4 is " + y4);

		System.out.print("x5 is " + x5);
		System.out.println(", y5 is " + y5);

		String p = "My name is \"Julianna\"";
		System.out.println(p);
		String pname = "John";
		System.out.println("Hi " + pname + "! " + p);
	}
}