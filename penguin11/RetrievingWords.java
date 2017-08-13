import java.net.URL;
import java.util.ArrayList;
import java.util.Scanner;
import java.net.MalformedURLException;
import java.io.IOException;

class RetrievingWords {
	public static void main(String[] args) {
		Scanner scanner = new Scanner(System.in);

		Scanner webInput=null;
		String url = "http://www.gutenberg.org/cache/epub/120/pg120.txt";
		String userUrl = scanner.nextLine();
		ArrayList<String> book = new ArrayList<String>();

		try {
			URL u = new URL(userUrl);
			webInput = new Scanner(u.openStream());


		} catch (MalformedURLException e) {
			System.out.println("error on MalformedURLException");
		} catch (IOException e) {
			System.out.println("error on IOException");
		}

		while(webInput.hasNext()) {
			book.add(webInput.next());
		}

		System.out.println("Pick a word to search");
		String search = scanner.next();
		boolean exists = book.contains(search);
		int count=0;
		if (exists) {
			for (String str :book) {
				if (str.equals(search))
					count++;
			}
			System.out.println("The word "+search+" appears "+count+" times.");
			int pos = book.indexOf(search);
			if(pos>0&&pos<book.size()-2)
				System.out.println((pos+1)+" "+book.get(pos-1)+" "+book.get(pos)+" "+book.get(pos+1));
		} else {
			System.out.println(search+" is not in the book");
		}

	}
}