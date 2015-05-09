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
		.then(
			//success
			function(result){
				return result;
			},
			//error
			function(err){
				console.log(err.statusText);
			});
}