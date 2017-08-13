import java.util.Scanner;
import java.util.Calendar;
import java.util.Random;

public class MultiplyGame {
	public static void main(String[] args) {
		System.out.println("How many questions do you want?");
		Scanner user = new Scanner(System.in);
		int questions;
		questions = user.nextInt();
		if (questions <= 0){
			System.out.println("You need to do at least some questions, here is your punishment for trying to cheat the game:");
			questions = 100;
		}
		System.out.println("You will recieve "+questions+" multiplication questions.");
		int starttime;
		int starttimemin;
		Calendar cal = Calendar.getInstance();
		starttime = cal.get(Calendar.SECOND);
		starttimemin = cal.get(Calendar.MINUTE);
		int answer;
		int num1;
		int num2;
		int correct = 0;
		int counter = questions;
		while (counter > 0){
			Random num = new Random();
			num1 = 1 + num.nextInt(12);
			num2 = 1 + num.nextInt(12);
			System.out.print(num1+" X "+num2+"=");
			answer = user.nextInt();
			if (answer == num1 * num2){
				System.out.println("Correct!");
				++correct;
			}else{
				System.out.println("Incorrect");
			}
			--counter;
		}
		int endtime;
		int endtimemin;
		int totalmin;
		int totaltime;
		System.out.println("You have finished the questions!");
		cal = Calendar.getInstance();
		endtimemin = cal.get(Calendar.MINUTE);
		endtime = cal.get(Calendar.SECOND);
		totalmin = endtimemin-starttimemin;
		totaltime = endtime-starttime+totalmin*60;
		System.out.println("Your score was: "+correct+"/"+questions);
		System.out.println("Your time was "+totaltime+" seconds.");
	}
}