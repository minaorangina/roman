//var input = document.getElementById('input').split("");

// takes first element of array
// returns false if type mismatch amongst all elements
// else returns true and typeof element
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
			return [false];
		}
	}
	return [true, typeExpected];
}

// check for numbers or Roman numerals
var matchResult = elementsMatch(input[0]);
if (!matchResult[0]){
	alert("Don't mix your numbers with your numerals");
	//input.value = "";
	return;
}
else{
	matchResult[1] == 'number' ? toRoman() : toNumber();
}

var roman = {
			I : 1,
			V : 5,
			X : 10,
			L : 50,
			C : 100,
			D : 500,
			M : 1000
		};


// toNumber
function toNumber(){
	var result = "";
	return;
}
// toRoman
function toRoman(){
	var result = "";
	return;
}