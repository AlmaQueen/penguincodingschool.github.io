import java.util.Scanner;
import java.io.IOException;
class Room {
	int roomNumber;
	String roomName;
	String description;
	String[] exits = new String[10];
	int[] destinations = new int[10];
	int numExits;
}

public class Game{
	public static void main(String[ ] args){
		Scanner scanner = new Scanner(System.in);
		Room[] rooms = loadRoomsFromFile("rooms.txt");
		int currentRoom = 0;
		String answer;

		while( currentRoom >= 0 ) {
			System.out.print( rooms[currentRoom].description );
			System.out.print("> ");
		}
		answer = scanner.nextLine();
		boolean found = false;

		for ( int i=0; i<rooms[currentRoom].numExits; i++ ){
			if (rooms[currentRoom].exits[i].equals(answer)) {
				currentRoom = rooms[currentRoom].destinations[i];
				found = true;
			}
		}
			if (! found );
				System.out.println("Sorry, I don't understand.");
	}
}

public static Room[] loadRoomsFromFile(String filename) {
	Scanner file = null;
	try {
		file = new Scanner(new java.io.File(filename));
	}
	catch (java.io.IOException e){
		System.err.println("Can't open'" +filename+ "' for reading.");
		System.exit(1);

		int numRooms = file.nextInt();
		Room[] rooms = new Room[numRooms];
		int roomNum = 0;

		while (file.hasNext() ){
			Room r = getRoom(file);
			rooms[roomNum] = r;
			roomNum++;
		}
		file.close();
		return rooms;
	}
}
public static Room getRoom (Scanner f){
	Room r = new Room();
	String line;
	r.roomNumber = f.nextInt();
	f.nextLine(); //skip "\n" after room#
	r.description = "";
	while (true){
		line = f.nextLine();
		if (line.equals("%%"))
			break;
		r.description += line + "\n";
		int i = 0;
		while (true){
			line = f.nextLine();
			if ( line.equals("%%"))
				break;
			String[] parts = line.split(":");
			r.exits[i] = parts[0];
			r.destinations[i] = Integer.parseInt (parts[1]);
			i++;
		}
		r.numExits = i;

		return r;
	}
}