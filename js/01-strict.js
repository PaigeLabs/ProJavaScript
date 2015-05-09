function strictDemo(){
	'use strict';

	var obj = {firstName:'Jim', firstName:'Davis'};

	main.log(obj);

	var x = 17;
	var obj = { x: 10 };

	with(obj){
		x = 5;
		y = 10;
	}

	main.log(x);
	main.log(obj.y);

	eval('Object.prototype = {}');
}