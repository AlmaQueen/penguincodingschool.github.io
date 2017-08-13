import java.util.Scanner;
class Adventure{

	public static void main(String[]args){
		Scanner scanner = new Scanner (System.in);
		Room[] rooms = loadRoomsFromFile("rooms.txt");
		//System.out.println("You wake up, the sun dancing against your bedroom curtains. Do you want to fall back to sleep?(yes/no)")
			int currentRoom = 0;
			String answer;
			while ( currentRoom >= 0 ) {
				System.out.print( rooms[currentRoom].description );
				System.out.print("> ");
				boolean found = false;
				for (int i=0; i<rooms[currentRoom].numExits; i++ ) {
					if (rooms[currentRoom].exits[i].equals(answer) ) {
						currentRoom = rooms[currentRoom].destinations[i];
						found = true;
						break;

					}
				}

				if (! found )
					System.out.println("Sorry, that is not an option.");
			}
	}

	public static Room[] loadRoomsFromFile( String filename ) {
		Scanner file = null;
		
		file = new Scanner(new java.io.File(filename));

			
			

}
public static Room getRoom( Scanner f ) {
	Room r = new Room();
	String line;

	r.roomNumber = f.nextInt();
	f.nextLine(); 
	r.description = "";
	while (true) {
		line = f.nextLine();
		if (line.equals("%%"))
			break;
		r.description += line + "\n";
	}
	return r;


}




}









class Room{
	int roomNumber;
	String roomName;
	String description;
	String[] exits = new String[10];
	int[] destinations = new int[10];
	int numExits;
}
