import java.util.Scanner;

class ArraySearch{
	public static void main(String[]args){
		Scanner scanner = new Scanner(System.in);
		String[] massachussets = {"john adams","john quincy adams","calvin coolidge","john f kennedy"};
		System.out.println("Who is a president that has come from Massachussets?");
		String guess = scanner.nextLine();
		boolean found = false;
		for(String m : massachussets){
			if(m.equals(guess)){
				System.out.println("That is correct");
				found = true;
				break;
			}
		}
		if(!found){
			System.out.println("That is not correct");
		}
	}
}