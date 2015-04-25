//var input = document.getElementById('input').split("");
//var before = input.value;
var after;

// returns appropriate function to check element type
function elementsMatch(element0){
	// check type
	if ( isNaN(parseInt(element0)) ){ // 1st element = char
		var typeExpected = NaN;
	 	var func = isNaN;
	}else{
		var typeExpected = 'number';
		var func = parseInt;
	}
	// check rest of array
	for (var i = 1; i < input.length; i++){
		if (typeof func(input[i]) != typeExpected){
			return false;
		}
	}
	return true;
}

// check for numbers or Roman numerals
elementsMatch(input[0]);

	//toNumber();
//else
	// false --> check all elements are numbers
	for (var i = 0; i < input.length; i++){
		if(parseInt(input[i])){
			alert("Don't mix your numbers with your numerals");
			//input.value = "";
			return;
		}
	}
	//toRoman();



console.log(NaN == NaN);



// toNumber

// toRoman