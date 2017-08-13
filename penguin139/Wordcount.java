import java.net.URL;
import java.util.ArrayList;
import java.util.Scanner;	
	class WordCount{
	public static void main(String[]args);
	String book =
	"https://www.gutenberg.org/files/18269/18269-0.txt" //<----that's the URL, (make sure it is not malformed or else the WHOLE PROGRAM will not compile)
	Scanner webInput = null;
	URL u = new URL();
	webInput = new Scanner(u.openStream());

}	
