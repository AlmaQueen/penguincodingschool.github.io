class FavoriteAnimals{
	public static void main(String[] args){
		String [] favoriteAnimals = {"dog", "dolphin", "lion", "cat", "flamingo"};
		int[] numbers = new int[10];

		for (String f :favoriteAnimals){
			char [] characteranimals = f.toCharArray();
			for (int i = 0; i < characteranimals.length; i+=2){
				System.out.println(Character.toUpperCase(characteranimals[i]));
				//(characteranimals[i]);
			}
		}

		
	}
}