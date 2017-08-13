import java.net.URL;
import java.util.ArrayList;
import java.util.Scanner;
import java.net.MalformedURLException;
import java.io.IOException;

class RetrievingWords3 {
	public static void main(String[] args) {
		Scanner scanner = new Scanner(System.in);

		Scanner webInput=null;
		String url = "http://www.gutenberg.org/cache/epub/120/pg120.txt"; // link to book
		//String userUrl = scanner.nextLine();
		ArrayList<String> book = new ArrayList<String>();

		char[] specChar = {'.' , ',' , '"' , '-', '?'}; //special character to remove

		try {
			URL u = new URL(url);
			webInput = new Scanner(u.openStream());


		} catch (MalformedURLException e) {
			System.out.println("error on MalformedURLException");
		} catch (IOException e) {
			System.out.println("error on IOException");
		}

		while(webInput.hasNext()) {
			book.add(webInput.next());
		}

		ArrayList<String> words = new ArrayList<String>();
		for (String str :book) {
			str = str.toUpperCase();
			boolean there = words.contains(str);
			if (there==false) {
				words.add(str);
			}
		} 
		System.out.println("There are "+words.size()+" different words in the book");

		System.out.println("Pick a word to search");
		String search = scanner.next();
		int pos = book.indexOf(search);

		int count=0;
		String str2;
		String letter;

		for (String str :book) {
			str2="";
			boolean replaced;
			for (int i=0; i<str.length(); i++){
				replaced = false;
				for (int j=0; j<specChar.length; j++){
					if(str.charAt(i)==specChar[j]) {
						str2=str2;
						replaced=true;
					}
				}
				if (!replaced) {
					str2+=str.charAt(i);
				}
			} str=str2;
			if (str.equalsIgnoreCase(search)) {
				count++;
			}
		}
		System.out.println("The word "+search+" appears "+count+" times.");

		if(pos>0&&pos<book.size()-2){
			System.out.println("Word number: "+(pos+1)+" "+book.get(pos-1)+" "+book.get(pos)+" "+book.get(pos+1));}

	}
}