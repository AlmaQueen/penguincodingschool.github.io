import java.net.MalformedURLException;
import java.net.URL;
import java.util.ArrayList;
import java.util.Scanner;
public class RetrievingWords{
	public static void main(String[]args){
		String huckfinn="www.gutenberg.org/cache/epub/32325/pg32325.txt";
		HowManyWords wc=new HowManyWords(book);
		System.out.println(wc.getcount("water"))
		System.out.println(wc.getcount("WATER"))
		System.out.println(wc.getcount("Water"))

	}
}

class HowManyWords{
	private ArrayList<String> words;

	public HowManyWords(String url);
	Scanner webInput = null;
	URL u=new URL 




		webInput=new Scanner(huckfinn.openStream());
		Scanner webInput=null;
		ArrayList<String> words=new ArrayList<String>();
		Scanner.next();

}