import java.util.Scanner;

class Room{
	int roomNumber;
	String roomName;
	String description;
	String [] exits = new String[10];
	int [] destinations = new int[10];
	int numExits;
}

public class Game{
	public static void main(String[] args) {
		Scanner scan = new Scanner(System.in);
		Room[]rooms = loadRoomsFromFile("room.txt");
		int currentRoom = 0;
		String answer = "";
		while(currentRoom >= 0)
			System.out.println(rooms[currentRoom].description);
			System.out.println(">");
			boolean found = false;
		for (int i = 0; i<rooms[currentRoom].numExits; i++){
			if (rooms[currentRoom].exits[i].equals(answer)){
				currentRoom = rooms[currentRoom].destinations[i];
					found = true; break;
			}
		}
		if (! found)
			System.out.println("You cannot do that.");
	}

public static Room[] loadRoomsFromFile(String filename){
	Scanner file = null;
	try {
		file = new Scanner(new java.io.File(filename));
	}
	catch (java.io.IOException e) {
		System.err.println("This doesn't work");
	}
	int numRooms= file.nextInt();
	Room[] rooms = new Room[numRooms];
	int roomNum = 0;
	while (file.hasNext()){
		Room r = getRoom(file);
		rooms[roomNum] = r;
		roomNum++;
	}
	file.close();
	return rooms;
}

public static Room getRoom(Scanner f) {
	Room r = new Room();
	String line;
	//Scanner f = new Scanner();
	r.roomNumber = f.nextInt();
	f.nextLine();
	r.description = "";
	while (true) {
		line = f.nextLine();
		if (line.equals("%%") )
			break;
		r.description += line + "\n";
	}

	return r;
}


}