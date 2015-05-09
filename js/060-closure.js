function closureDemo(){
	var add = (function(){
		var counter = 0;
		return function(number){
			main.log(counter += number);
		};
	})();

	for (var i = 0; i < 10; i++) {
		add(1);		
	}
}