import java.util.Scanner;
import java.util.ArrayList;

class arrayList{

public static void main(String args[]){

ArrayList<Integer> number = new ArrayList<>();

for (int i = 0; i < 10; i++){

	number.add((int)(30*Math.random()));
}

number.set(5, 5);

for (int x = 0; x < 10; x++){

	int data = number.get(x);

	if (data%2 == 1){
		System.out.print(number.indexOf(number.get(x)) + ".");

	}
System.out.println(data);
}

Integer[] numArray = number.toArray(new Integer[number.size()]);
int total = 0;
for (int w = 0; w <10; w++){

	total += numArray[w];
	
}
System.out.println("Total = " + total);	
}
}