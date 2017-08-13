import java.util.Scanner;

public class Search{
	public static void main(String[] args){
		System.out.println("             ###                  8");
		System.out.println("           ##   #                 8");
		System.out.println("          ##       00   @@   #### 8  000");
		System.out.println("          ##  ### 0  0 @  @ #   # 8 0ooo0");
		System.out.println("          ##    # 0  0 @  @ #   # 8 0   ");
		System.out.println("           #####   00   @@   #### 8  000");
		System.out.println("                                #");
		System.out.println("                            #   #");
		System.out.println("                             ### ");
		System.out.println("");
		Scanner input = new Scanner(System.in);
		boolean found = false;
		String[] stuff = {"trash", "rubbish", "garbage", "waste", "refuse", "debris", "litter", "junk", "ruin", "scrap", "sediment", "excess", "residue", "scum", "droppings", "rubble"};
		String answer =input.next();
		for(int counter = 0; counter<stuff.length; counter++){
			if(answer.equalsIgnoreCase(stuff[counter])){
				System.out.println("Found!");
				found = true;
				break;
			}else{
				System.out.println("Searching...");
			}
		}
		if(! found){
			System.out.println("Not found");
		}
	}
}