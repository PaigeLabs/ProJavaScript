function someAsyncCall(){
	var deferred = $q.defer();	

	if(iHaveSomething){
		deferred.resolve(someResult);
	}else{
		deferred.reject({statusText:'I got nothing.'});
	}

	return deferred.promise();
}

function getMeSomething(){
	return someAsyncCall()
		.success(function(result){
			return result;
		})
		.error(function(err){
			console.log(err.statusText);
		})
		.finally(function(){
			//something I ALWAYS want to do
		})
		.catch(function(err){
			// I had an error in one of the success/error/finally blocks
		});
}