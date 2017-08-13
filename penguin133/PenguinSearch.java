import java.util.Scanner;
public class PenguinSearch{
	public static void main(String[] args){
		Scanner scanner= new Scanner(System.in);
		String[] astates={"Alabama ", "Alaska","Arizona", "Arkansas"};

		String findThis;
		boolean found = false;

		
		System.out.println("Which US states begin with A?");
		findThis = scanner.next();

		for (String a : astates){
			if (a.equals(findThis)){
				System.out.println(a+" is one of the four states!");
				found=true;
			}
			if (!a.equals(found))
			System.out.println("Not found.");
		}

}

}