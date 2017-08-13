import java.util.Scanner;
import java.net.url;
import java.util.ArrayList;


class Favorite{

public static void main(String args[]){
Scanner webInput = null;
URL u = new URL(url);

webInput = new Scanner(u.openStream());


ArrayList<String> book = new ArrayList<String> ();

do{

book.add(webInput.next());

}while(webInput.hasNext());

}
}