class AnimalsArray {
	public static void main(String[ ] args) {
		String[] animals = {"Dog", "Cat", "Elephant", "Dolphin", "Bird"};
		for (int i = 0; i <animals.length; i++){
		System.out.println(animals[i].toUpperCase()+ " ");
		}
		for (int k = 0; k <animals.length; k++){
		System.out.println(animals[k].toCharArray()+ " ");
		}
	}
}