import java.io.IOException;
import java.net.MalformedURLException;
import java.net.URL;
import java.util.ArrayList;
import java.util.Scanner;

class WordCounting{
	public static void main(String[]args){
		Scanner scanner = new Scanner(System.in);
		System.out.println();
		System.out.println("enter the url of the text version of a book");
		String url = scanner.nextLine();
		//http://www.gutenberg.org/files/2701/2701-h/2701-h.htm = moby dick
		//http://www.gutenberg.org/files/345/345-h/345-h.htm = dracula
		Scanner web_input = null;
		try{
			URL u = new URL(url);
			web_input = new Scanner(u.openStream());
		}
		catch(MalformedURLException e){
			System.out.println("Malformed URL");
		}
		catch(IOException e){
			System.out.println("IOException");
		}
		ArrayList<String> book = new ArrayList<>();
		while(web_input.hasNext()){
			String word = web_input.next();
			book.add(word);
		}
		int book_length = book.size();

		System.out.println(book_length);
	}
}