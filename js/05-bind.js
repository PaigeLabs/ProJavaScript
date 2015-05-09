function bindDemo(){
	function f(){ 
		return this.a; 
	}
	var g = f.bind({a:"azerty"});
	var h = f.call({a:"qwerty"});
	var z = f.apply({a:'poiuy'});

	main.log(g());
	main.log(h);
	main.log(z);
}
