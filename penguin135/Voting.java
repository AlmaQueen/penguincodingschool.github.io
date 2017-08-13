import java.util.Scanner;

public class Voting{
	public static void main(String[] args){
		boolean bdanswer = true;
		Scanner input = new Scanner(System.in);
		int year = 0, age = 0;
		String land = "", white = "", gender = "";
		//year
		while(bdanswer){
			System.out.println("Enter the year. (2017 or 1789):");
			year = input.nextInt();
			if(year == 1789 || year == 2017){
				bdanswer = false;
			}else{
				System.out.println("Please pick from the choices.");
			}
		}
		bdanswer = true;
		//gender
		while(bdanswer){
			System.out.println("Are you male or female?");
			gender = input.next();
			if(gender.equals("male") || gender.equals("female")){
				bdanswer = false;
			}else{
				System.out.println("Please type in one of the choices.");
			}
		}
		bdanswer = true;
		//race
		while(bdanswer){
			System.out.println("Are you white? (yes/no)");
			white = input.next();
			if(white.equals("yes") || white.equals("no")){
				bdanswer = false;
			}else{
				System.out.println("Please type in one of the choices.");
			}
		}
		bdanswer = true;
		//land
		while(bdanswer){
			System.out.println("Do you own land? (yes/no)");
			land = input.next();
			if(land.equals("yes") || land.equals("no")){
				bdanswer = false;
			}else{
				System.out.println("Please type in one of the choices.");
			}
		}
		bdanswer = true;
		//age
		while(bdanswer){
			System.out.println("How old are you? (in years)");
			age = input.nextInt();
			if(age>0){
				bdanswer = false;
			}else{
				System.out.println("Please type in your actual age.");
			}
		}
		if(year == 2017 && age>=18 || year == 1789 && age>=21 && white.equals("yes") && land.equals("yes") && gender.equals("male")){
			System.out.println("You can vote!");
		}else{
			System.out.println("You can't vote.");
		}
	}
}