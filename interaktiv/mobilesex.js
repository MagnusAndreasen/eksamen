$(init);




var recipemb = [
	'ismb',
	'vodkamb',
	'ferskenmb',
	'appelsinmb',
	'tranebmb',
];

var glassmb = [];

 function init (){
	 
	 $('#centerwrappermb div').click(function(){
		 
		 var clickedIngredient = $(this).attr("id");
		 
		 glassmb.push(clickedIngredient);
		 
		 if (checkRecipemb(glassmb, recipemb)) {
			 if (clickedIngredient == 'ismb') {
				 document.getElementById('stepByStepmb').src = "billeder/glasis.png";
			 } else if (clickedIngredient == 'vodkamb') {
				 document.getElementById('stepByStepmb').src = "billeder/glaseftervodka.png";
			 } else if (clickedIngredient == 'ferskenmb') {
				 document.getElementById('stepByStepmb').src = "billeder/glasefterfersken.png";
			 } else if (clickedIngredient == 'appelsinmb') {
				 document.getElementById('stepByStepmb').src = "billeder/glasefterjuice.png";
			 } else if (clickedIngredient == 'tranebmb') {
				 document.getElementById('stepByStepmb').src = "billeder/glasdone.png";
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
	document.getElementById("stepByStepmb").src = "billeder/glas.png";
	glassmb = [];	
}