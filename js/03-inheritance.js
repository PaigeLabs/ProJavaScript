function inheritanceDemo(){
	
	function MyBase(){
		this.firstName = 'John';
	}

	function FamousPerson(){
		this.lastName = "Daniels";
	}

	FamousPerson.prototype = new MyBase();

	var my = new FamousPerson();

	main.log('My good friend ' + my.firstName + ' ' + my.lastName);

}