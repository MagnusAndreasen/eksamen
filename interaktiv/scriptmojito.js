$(init);

function init () {
	//En funktion der gør ingredienserne draggable. Revert får dem til at glide tilbage på plads, enhederne kan kun dragges inden for #content diven ved hjælp af containment. zIndex gør at div'en placeres over billedet som div'en indeholder
	$('#centerwrapper div').draggable( {
		revert: true,
		containment: '#content',
		zIndex: 100
	});
	
	//En funktion der gør glasset droppable. Den acceptere kun #centerwrapper div's, altså ingredienserne. Drop: billedeSkift er en funktion der sker når et element er blevet droppet.
	$('#glas').droppable( {
		accept: '#centerwrapper div',
		drop: billedeSkift
	});
}

//En variabel der definere hvilke ingredienser der findes og i hvilken rækkefølge de skal dragges over i glasset
var recipe = [
	'sukker',
	'lime',
	'mynte',
	'morter',
	'is',
	'rom',
	'danskvand'
];

//En variabel der svarer til glasset. Den er [] da glasset fra starten er tomt og løbende bliver fyldt med ingredienser.
var glass = [];

//Funktionen billedeSkift er den handling der sker når et element bliver droppet.
function billedeSkift(event, ui) {
	console.log(event);
	console.log(ui);
	//En variabel der definerer den draggede enheds id
	var draggedIngredient = ui.draggable[0].id;
	
	//en funktion der tilføjer den draggede enhed ved hjælp af push
	glass.push(draggedIngredient);
	
	//En if funktion der kigger på om id'et åp den draggede enhed passer med det rigtige id der skal til ofr at den er korrekt. Hvis id'et er korrekt skifter glas billedet til det næste billede i processen og den draggede enhed mister sin draggable funktion.
	if(checkRecipe(glass, recipe)) {
		if (draggedIngredient == 'sukker') {
			ui.draggable.draggable('disable');
			document.getElementById("stepByStep").src = "interaktiv/billeder/glas1.png";
		} else if(draggedIngredient == 'lime') {
			ui.draggable.draggable('disable');
			document.getElementById("stepByStep").src = "interaktiv/billeder/glas2.png";
		} else if(draggedIngredient == 'mynte') {
			ui.draggable.draggable('disable');
			document.getElementById("stepByStep").src = "interaktiv/billeder/glas3.png";
		} else if(draggedIngredient == 'morter') {
			ui.draggable.draggable('disable');
			document.getElementById("stepByStep").src = "interaktiv/billeder/glas4.png";
		} else if(draggedIngredient == 'is') {
			ui.draggable.draggable('disable');
			document.getElementById("stepByStep").src = "interaktiv/billeder/glas5.png";
		} else if(draggedIngredient == 'rom') {
			ui.draggable.draggable('disable');
			document.getElementById("stepByStep").src = "interaktiv/billeder/glas6.png";
		} else if(draggedIngredient == 'danskvand') {
			ui.draggable.draggable('disable');
			document.getElementById("stepByStep").src = "interaktiv/billeder/glas7.png";
		}
	//Hvis ikke den har det korrekte id vil den blive trukket fra glasset og ryge tilbage på sin plads
	} else if(glass.length > 0) {
		glass.splice(glass.length - 1, 1);
	}
}
//En funktion der holder styr på hvor mange ingredienser der er i glasset
function checkRecipe(glass, recipe) {
	var rightIngredients = true;
	//En loop der kigger på hvor mange ingredienser der er i glasset løbende
	for(var i = 0; i < glass.length; i = i + 1) {
		var ingredient = glass[i];
		//En if funktion der siger: hvis glassets længde er større end recipe længden ELLER hvis ingredient numeret og reciepe nummeret ikke er ens, så vil den være false og resultere i at ingredienten ryger tilbage på sin plads og ikke bliver tilføjet i glasset
		if(recipe.length < glass.length || ingredient != recipe[i]) {
			rightIngredients = false;
		}
	}
	
	return rightIngredients;
}

function restart (){
	//var button = document.getElementById("knap");
	document.getElementById("stepByStep").src = "interaktiv/billeder/glas.png";
	$(".ingredient").draggable('enable');
	glass = [];
	//glass.splice(glass.length - 1, 1);
	
	
}

	
