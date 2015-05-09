function whenYouFinish(result){
	return result;
}

function getMeSomething(){	
	return someAsyncCall(whenYouFinish);
}