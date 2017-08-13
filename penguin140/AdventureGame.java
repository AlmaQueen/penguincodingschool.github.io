//taking (title?)
//wakes up in a room filled with 5 other people and doesn't remember anything
//doesn't see any other people on the streets
//finds out about alien epidemic through searching around town
import java.util.Scanner;

class Room{
	//describing a room
	int roomNumber;
	String roomName;
	String description;
	String[] exits = new String[10/*num of rooms*/];
	int[] destinations = new int[10/*num of rooms*/];
	int numExits;
}

public class AdventureGame{
	public static void main(String[]args){
		Scanner scanner = new Scanner(System.in);
		Room[] rooms = loadRoomsFromFile("rooms.txt");
		//game logic
		int currentRoom = 0;
		String answer;
		while(currentRoom >= 0){
			System.out.print(rooms[currentRoom].description);
			System.out.print("> ");
			answer = scanner.nextLine();
			//if exit is found then turn found to true
			boolean found = false;
			//trying to find if answer has a match
			for(int i = 0 ; i < rooms[currentRoom].numExits ; i++){
				if(rooms[currentRoom].exits[i].equals(answer)){
					currentRoom = rooms[currentRoom].destinations[i];
					found = true;
					break;
				}
			}
			if(!found){
				System.out.println("Sorry, I don't understand");
			}	
		}
	}
	//defining 'loadRoomsFromFile' for the main method
	public static Room[] loadRoomsFromFile(String filename){
		Scanner file = null;
		try{
			file = new Scanner(new java.io.File(filename));
		}
		catch(java.io.IOException e){
			System.err.println("Can't open '" + filename + "' for reading");
			System.exit(1);
		}
		int numRooms = file.nextInt();
		Room[] rooms = new Room[numRooms];
		int roomNum = 0;
		//creating empty rooms
		while(file.hasNext()){
			Room r = getRoom(file);
			rooms[roomNum++] = r;
		}
		file.close();
		return rooms;
	}
	//creating a room
	public static Room getRoom(Scanner f){
		Room r = new Room();
		String line = "";
		r.roomNumber = f.nextInt();
		f.nextLine();
		r.description = "";
		int i = 0;
		line = f.nextLine();

		while(true) {
			line = f.nextLine();
			if (line.equals("%%")) {
				break;
			}
			r.description += line + "\n";
		}

		while(true) {
			line = f.nextLine();
			if (line.equals("%%")) {
				break;
			}
			String[] parts = line.split(":");
			r.exits[i] = parts[0];
			r.destinations[i] = Integer.parseInt(parts[1]);
			i++;
		}



		/*while(!line.equals("%%")) {
			System.out.println(line);
			r.description += line + "\n";
			line = f.nextLine();

		}
		while(!line.equals("%%")){
			line = f.nextLine();
			String[] parts = line.split(":");
			/*for (String part : parts) {
				System.out.println(part);
			}
			r.exits[i] = parts[0];
			//r.destinations[i] = Integer.parseInt(parts[1]);
			i++;
		}*/
		r.numExits = i;
		return r;
	}
}
