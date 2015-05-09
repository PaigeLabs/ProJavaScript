function getMeSomething(){
	return someAsyncCall()
		.then(function(result){
			return result;
		})
		.then(function(result){
			somethingElse()
		})
		.then(function(result){
			somethingEvenMore();
		});
}