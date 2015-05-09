function getMeSomething(){
	return someAsyncCall()
		.then(
			// success
			function(result){
				return result;
			},
			//error
			function(err){
				console.log(err.statusText);
			});
}