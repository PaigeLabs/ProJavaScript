function thisDemo(){

	var thisButton = document.getElementById('thisButton');
	thisButton.addEventListener('click', tellMe, false);


	function tellMe(e){
		main.log(this === e.currentTarget);
		main.log(this === e.target);
		this.firstChild.data = 'me';
	}
}