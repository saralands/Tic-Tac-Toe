$(document).on('ready',function(){

	//default to playerX
	var playerXsturn = true;

	// add a click event to td
	$('td').on('click', function(){

		//If this td already has a class,
		//return falso

		if ($(this).hasClass('marked-x')|| $(this).hasClass('marked-o')){
			alert('This space is taken');
			return false;
		}

		//if it's playerXsturn,
		//update td with a class of . marked-x

		if(playerXsturn){
			$(this).addClass('marked-x');
			playerXsturn = false;
		}else {
			//else update td wth a class of .marked-o
			$(this).addClass('marked-o');
			playerXsturn = true;
		}

	}); // Ends TD click event

}); //closes