class ArrayLearning{
	public static void main(String[]args){
		String[] horses = {"bourbon","gracie","herbie","fiona","scout"};
		for(String h : horses){
			System.out.println(h.toUpperCase());
			char[] p = h.toCharArray();
			for(int i = 0 ; i < p.length ; i++){
				System.out.println(p[i]);
			}
		}
	}
}