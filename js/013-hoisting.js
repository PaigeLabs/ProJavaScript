function girl(){
	if(dad.cantTakeItAnyMore){
		return dad.hangUp();
	}
	console.log('No, you hang up.');
	boy();
}

function boy(){
	console.log('No, you hang up.');
	girl();
}