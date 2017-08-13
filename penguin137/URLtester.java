import java.net.URL; 
import java.util.ArrayList;
import java.util.Scanner;
import java.net.MalformedURLException;
import java.io.IOException;

class URLtester{
	public static void main(String[] args) {
		
		Scanner scan = null;
		ArrayList <String> gutenburger = new ArrayList<>();
		String url = args.length > 0 ? args[0] : "http://www.gutenberg.org/files/55303/55303-0.txt";
		try{
			URL earl = new URL(url);
		scan = new Scanner(earl.openStream());
		} catch(MalformedURLException e){
			System.out.print("MalformedURLException");
		} catch(IOException e){
			System.out.print("IOException");
		}
			while (scan.hasNext())
				gutenburger.add(scan.next());
			int size = gutenburger.size();
			System.out.println(size);

	}
}