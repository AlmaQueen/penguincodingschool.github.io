import java.util.Scanner;

public class AdventureGame{
	public static void main(String[] args) {
		Scanner scanner = new Scanner(System.in);
		Room[] rooms = loadRoomsFromFile("rooms.txt");
		int currentRoom = 0;
		String answer;
		while(currentRoom >= 0){
			System.out.print(rooms[currentRoom].description);
			System.out.print(">");
			answer = scanner.nextLine();
			boolean found = false;
		}
		for(int i = 0; i<rooms[currentRoom].numExits; i++){
			if(rooms[currentRoom].exits[i].equals(answer)){
				currentRoom = rooms[currentRoom].destinations[i];
				found = true;
			}
		}
	}
	public static Room[] loadRoomsFromFile(String filename){
		Scanner file = null;
		try{
			file = new Scanner(new java.io.File(filename));
		}catch(java.io.IOException e){
			System.err.println("Can't open " + filename + " for reading.");
			System.exit(1);
		}
		while(file.hasNext()){
			Room r = getRoom(file);
			rooms[roomNum] = r;
			roomNum++;
		}
		file.close();
		return rooms;
	}
}
public class Room{
	int roomNumber;
	String roomName;
	String description;
	String[] exits = new String[10];
	int[] destinations = new int[10];
	int numExits;

}