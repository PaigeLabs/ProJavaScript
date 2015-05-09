function sayHey(){
	console.log(this.name);
}

var me = {name:'Lee'};
var jon = {name:'Jon'};

var sayHey2 = sayHey;
sayHey = function(){ sayHey2.call(me); };

sayHey();
sayHey.call(jon);