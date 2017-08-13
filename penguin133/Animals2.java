class Animals{
	public static void main(String args[]){
		String[] animals={"orangutan ", "fox ", "dog ", "axolotl ", "rabbit"};
		for(String a :animals){
			System.out.println(a.toCharArray());
			for(Char b :animals)
			System.out.println(b.toUppercase());
		}
	}
}