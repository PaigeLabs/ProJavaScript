function iifeDemo(){
	var SimpleMan = (function(me){

		this.logMe = function(){
			return me + ' is a simple man.';
		};

		return this;

	}('Ronnie Van Zant'));

	main.log(SimpleMan.logMe()); //Ronnie Van Zant is a simple man.
}