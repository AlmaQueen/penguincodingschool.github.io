import java.util.Scanner;
import java.net.URL;
import java.util.ArrayList;

public class BookDownload{
	public static void main(String[] args) {
		String bookurl = "http://www.gutenberg.org/cache/epub/120/pg120.txt";
		Scanner webInput = null;
		ArrayList<String> words = new ArrayList<String>();
		try{
			URL u = new URL(bookurl);
			webInput = new Scanner(u.openStream());
		}catch(Exception e){
			System.out.println("Error");
		}
		while(webInput.hasNext()){
			words.add(webInput.next());
		}
		System.out.println(words);
	}
}