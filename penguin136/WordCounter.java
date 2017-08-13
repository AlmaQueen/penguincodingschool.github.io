import java.net.URL;
import java.util.ArrayList;
import java.util.Scanner;
import java.net.MalformedURLException;
import java.io.IOException;


class WordCounter {
	public static void main(String[ ] args) {
		Scanner scanner = new Scanner(System.in);
		Scanner webInput = null;
		String bookurl = "http://www.gutenberg.org/files/55319/55319-0.txt";

		ArrayList<String> words = new ArrayList<String>();

		try{
			URL u = new URL(bookurl);
			webInput = new Scanner(u.openStream());

		}
		
		catch(MalformedURLException e) {
			System.out.println("Invalid URL.");
		}

		catch(IOException e){
			System.out.println("IOException");
		}

		while (webInput.hasNext() );
			words.add( webInput.next() );
		webInput.close();
	}
}