$(init);




var recipemb = [
	'sukkermb',
	'limemb',
	'myntemb',
	'mortermb',
	'ismb',
	'rommb',
	'danskvandmb',
];

var glassmb = [];

 function init (){
	 
	 $('#centerwrappermb div').click(function(){
		 
		 var clickedIngredient = $(this).attr("id");
		 
		 glassmb.push(clickedIngredient);
		 
		 if (checkRecipemb(glassmb, recipemb)) {
			 if (clickedIngredient == 'sukkermb') {
				 document.getElementById('stepByStepmb').src = "interaktiv/billeder/glas1.png";
			 } else if (clickedIngredient == 'limemb') {
				 document.getElementById('stepByStepmb').src = "interaktiv/billeder/glas2.png";
			 } else if (clickedIngredient == 'myntemb') {
				 document.getElementById('stepByStepmb').src = "interaktiv/billeder/glas3.png";
			 } else if (clickedIngredient == 'mortermb') {
				 document.getElementById('stepByStepmb').src = "interaktiv/billeder/glas4.png";
			 } else if (clickedIngredient == 'ismb') {
				 document.getElementById('stepByStepmb').src = "interaktiv/billeder/glas5.png";
			 } else if (clickedIngredient == 'rommb') {
				 document.getElementById('stepByStepmb').src = "interaktiv/billeder/glas6.png";
			 }	else if (clickedIngredient == 'danskvandmb') {
				 document.getElementById('stepByStepmb').src = "interaktiv/billeder/glas7.png";
			 }
		} else if (glassmb.length > 0) {
			glassmb.splice(glassmb.length -1, 1);
		}
		 
	 });
	 
	 
 };

function checkRecipemb(glassmb, recipemb) {
	var rightIngredientsmb = true;
	//En loop der kigger på hvor mange ingredienser der er i glasset løbende
	for(var i = 0; i < glassmb.length; i = i + 1) {
		var ingredientmb = glassmb[i];
		
		//En if funktion der siger: hvis glassets længde er større end recipe længden ELLER hvis ingredient numeret og reciepe nummeret ikke er ens, så vil den være false og resultere i at ingredienten ryger tilbage på sin plads og ikke bliver tilføjet i glasset
		if(recipemb.length < glassmb.length || ingredientmb != recipemb[i]) {
			rightIngredientsmb = false;
		}
	}
	return rightIngredientsmb;
}

function restartmb (){
	document.getElementById("stepByStepmb").src = "interaktiv/billeder/glas.png";
	glassmb = [];	
}