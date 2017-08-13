import java.util.Scanner;

class Room{
	int roomNumber;
	String roomName;
	String description;
	String[] exits = new String[10];
	int[] destinations = new int[10];
	int numExits;
}

public class Adventure{
	public static void main(String[] args){ //main function
		Scanner scanner = new Scanner(System.in);
		Room[] rooms = loadRoomsFromFile("rooms.txt"); //open all room descriptions from a text file //calling from function loadRoomsFromFile

		int currentRoom = 0; //first room in game // a convenience
		String answer; //user's answer

		while(currentRoom>=0){ //keep displaying the description and taking in the answer as long as this condition stays true, will keep coming back here as long as cR != -1
			System.out.println(rooms[currentRoom].description); //print out the currentRoom's description

			System.out.print("> ");

			answer = scanner.nextLine(); //take in the answer

			boolean found = false;

			for(int i = 0; i <rooms[currentRoom].numExits; i++){ //go through all exits of currentRoom
				if (rooms[currentRoom].exits[i].equals(answer)){ //if user's answer = one of the room's exits
					currentRoom = rooms[currentRoom].destinations[i]; //currentRoom = destination and goes through while loop again //currentRoom= new cR but [currentRoom] = old cR
					found = true; //change found to true
					break; //get out of the for loop and go back to while
				}
			}
			if (!found){ //if none of the room's exits match up with the user's answer
				System.out.println("Sorry, I don't understand"); //will go back to while loop but itll be the same room bc the room was never increased
			}
		} //end of while loop
		System.out.println("Thanks for playing!");
	}

	public static Room[] loadRoomsFromFile(String filename){ //taking information from getRoom and putting into the rooms array
		Scanner file = null; //reading the file --> right now there is nothing in the file
		try{
			file = new Scanner(new java.io.File(filename)); //try reading the file into "file"
		}
		catch (java.io.IOException e){ //if it doesn't work, this appears
			System.err.println("Can't open '" + filename + "' for reading.");
			System.exit(1);
		}
		int numRooms = file.nextInt(); //number of rooms
		Room[] rooms = new Room[numRooms]; //initializing the rooms array with the number of rooms

		int roomNum = 0;
		while (file.hasNext()){ //while there is a next line in the file
			Room r = getRoom(file); //room r gets each room one by one by going to function getRoom //r is the variable that holds everything about the room
			rooms[roomNum++] = r; //array room[index number] = that room //eg: rooms[0] = everything about MOTEL
		}
		file.close(); //close the file, end of reading
		return rooms; //return the rooms to the main function
	}

	public static Room getRoom (Scanner f){ //actually getting all the information about room
		Room r = new Room(); //data type Room variable r
		String line;

		// this is how r stores all the information about room number and description
		r.roomNumber = f.nextInt(); //room number of r is the integer
		f.nextLine(); //skip "\n" after room # //take in the next line
		r.description = "";
		while (true){ //while there is a description, keep taking in lines until there is a %%
			line = f.nextLine(); 
			if(line.equals("%%")){
				break;
			}
			r.description += line + "\n";
		}

		int i = 0; //takes the destinations and number of exits
		while(true){
			line = f.nextLine();
			if (line.equals("%%")){
				break;
			}
			String[] parts = line.split(":"); //splits the line into with colon as the middle
			r.exits[i] = parts[0]; //the exit trigger
			r.destinations[i] = Integer.parseInt(parts[1]); //saves the number as an integer and not string
			i++; //goes through all of the destinations
		}

		r.numExits = i;

		return r; //returns everything about the room is sent to the main function //r is the whole room: room number, description, destination, exits
	}
}