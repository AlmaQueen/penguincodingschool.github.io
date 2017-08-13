import java.util.Scanner;
class Lightning{
	public static void main(String[]args){
		Scanner scanner = new Scanner(System.in); 
		System.out.println("About how many seconds after the lighting was the thunder?");
		double seconds = scanner.nextDouble();
		System.out.println("Do you want your answer in feet, miles, meters, or kilometers?");
		String units = scanner.next();
		if(units.equals("feet")){
			int distance_feet = (int) (seconds * 1100);
			System.out.println("The lightning is " + distance_feet + " feet away");
		}
		if(units.equals("miles")){
			double distance_miles = seconds * 0.21; 
			System.out.println("The lightning is " + distance_miles + " miles away");
		}
		if(units.equals("meters")){
			int distance_meters = (int) (seconds * 343);
			System.out.println("The lightning is " + distance_meters  + " meters away");
		}
		if(units.equals("kilometers")){
			double distance_kilometers = seconds * 0.343;
			System.out.println("The lightning is " + distance_kilometers + " kilometers away");
		}
	}
}


/* Speed of sound:

1100 ft/s
0.21 mi/s
343 m/s */