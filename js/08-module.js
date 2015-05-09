function moduleDemo(){
	var CarService = function(){
		var svc = this;
		svc.pickUp = function(){
				main.log('Picking you up.');
		};
		svc.dropOff = function(){
				main.log('Dropping you off.');
		};
		return svc;
	};

	var myCarService = new CarService();
	myCarService.pickUp();
	myCarService.dropOff();
}