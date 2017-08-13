import java.util.Scanner;

class Search{
	public static void main(String[] args){
		Scanner scanner = new Scanner(System.in);

		String [] food = {"pizza", "macaroni and cheese", "chips", "waffles", "pancakes", "strawberries", "mango", "apple", "toast", "chicken", "sandwiches"};
		boolean foundFood = false;

		System.out.println("Type in your favorite food.");
		String answer = scanner.next();

		for(String f: food)
		{
			if(f.equalsIgnoreCase(answer)){
				foundFood = true;
			}
		}

		if (foundFood){
			System.out.println("We found your favorite food!");
		}
		else{
			System.out.println("We did not find your favorite food");
		}
	}
}