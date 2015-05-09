var main = (function(){
	var output = document.getElementById('output'),
			codeOutput = document.getElementById('codeOutput'),
			log = function(message){
				if(typeof message === 'object'){
					output.value += JSON.stringify(message) + '\n';
				}else{
					output.value += message + '\n';
				}
			},
			clear = function(){
				output.value = '';
			},
			dualLog = function(func){
				codeOutput.innerHTML = func;
				func();
			};

	return {
		log: log,
		clear: clear,
		dualLog: dualLog
	};

}());

