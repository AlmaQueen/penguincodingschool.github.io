import java.net.URL;
import java.util.ArrayList;
import java.util.Scanner;
import java.net.MalformedURLException;
import java.io.IOException;

class WordCounter{
	public static void main(String [] args){
		ArrayList<String> words = new ArrayList<String>();
		int count = 0;
		int thecount = 0;

		Scanner webInput = null; //nothing in webInput yet
		try{
			URL bookurl = new URL("http://www.gutenberg.org/cache/epub/120/pg120.txt"); //type: URL variable name: bookurl --> just like any other variable is declared
			webInput = new Scanner(bookurl.openStream()); //instead of System.in, its bookurl.openStream()
		}
		catch(MalformedURLException e){
			System.out.println("Just a message");
		}
		catch(IOException e){
			System.out.println("Just a message");
		}
		

		while (webInput.hasNext()){ //while the url has another word keep doing this //probably something similar to reading from files
			String word = webInput.next(); //"counts" each word one by one
			words.add(word); // adds into the words array which later can be used to do whatever
		}

		count = words.size();
		System.out.println("Number of words: " + count);

		for(int a = 0; a < words.size(); a++){
			if(words.get(a).equals("the")){
				thecount++;
			}
		}

		System.out.println("Number of the's: " + thecount);

	}
}