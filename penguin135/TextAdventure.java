import java.util.scanner; 

public class TextAdventure{
	public static void main(String[] args){
		System.out.println("OOO  ");
		System.out.println("O  O   OO  O  O   O   O   O  OOO ");
		System.out.println("O  O  O  O O  O  O O  OO  O O                  oooooooo");
		System.out.println("OOO   O  O OOOO  OOO  O O O  OO               o        o");
		System.out.println("O  O  O  O O  O O   O O  OO    O             o  ooo     o");
		System.out.println("O   O  OO  O  O O   O O   O OOO            #o  o( )o     o");
		System.out.println("==================================       ###o  ooooo     o");
		System.out.println("           OOOOOOO OOOOO O   O OOOOOOO     #o  ooooo     o");
		System.out.println("              O    O      O O     O          o ooooo    o");
		System.out.println("              O    OOOO    O      O           oooooo   o");
		System.out.println("              O    O      O O     O            oooooooo");
		System.out.println("              O    OOOOO O   O    O      PENGUIN CODING SCHOOL");
		System.out.println("            =========================");
		System.out.println("                        O   OO   O   O OOOO OO  O OOOOO O  O OOO  OOOO");
		System.out.println("                       O O  O  O O   O O    O O O   O   O  O O  O O");
		System.out.println("                      OOOOO O  O O   O OOOO O O O   O   O  O OOO  OOOO");
		System.out.println("                      O   O O  O  O O  O    O  OO   O   O  O O O  O");
		System.out.println("                      O   O OOO    O   OOOO O   O   O    OO  O  O OOOO");
		System.out.println("                   ====================================================");
		System.out.println("\n\n\nYou find yourself in a dark room.do\nIn one corner is a door, on the other side is a window.");
		System.out.println("One thing is clear, you need to get out!");
		Scanner input = new Scanner(System.in);
		boolean key = false;
		String answer = "";
	}
	
	public void openDoor(){
		System.out.println("Do you try opening the door? (yes/no)");
		answer = input.next();
		if(answer.equals("yes")) {
			if(key){
				//hallway
			}else{
				System.out.println("It is locked");
				System.out.print();
				System.out.print();
				System.out.print();
				System.out.print();
				System.out.print();
			}
		}
	}
	
	public void tryWindow(){
		System.out.println("Do you try opening the window? (yes/no)");
		answer = input.next();
		if (answer.equals("yes")){
			System.out.println("You climb out of the window and fall to the ground.");
			//parkinglot
		}else{
			System.out.println("Remember, you need to get out!");
		}
	}
	
	public void parkingLot(){
		System.out.println("You find yourself in an empty parking lot.\nOn one side is a crate, on the other side is a door.");
		//room 5r889-0
		//crate
	}

	public void openCrate(){
		System.out.println("Do you open the crate?");
		answer = input.next();
		if(answer.equals("yes")){
			System.out.println("You found a key and a dead mouse.\n");
			System.out.println("       ###");
			System.out.println("#######   #");
			System.out.println("# #    ###");
			key = true;
		}else{
			//door
		}
	}

	public void hallway(){
		System.out.println("You find yourself in a hallway. There is a door at the end.");
		//door
	}

	public void enterRoom(){
		System.out.println("Do you want to re-enter the room you started out in.");
	}
}
