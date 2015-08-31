Array.prototype.wrongIndexOf = function (value) {
	function randomIndex (arrayLength) {
		return Math.floor(Math.random() * arrayLength);
	}
	var realIndex = this.indexOf(value);
	var someIndex = randomIndex(this.length);
	if (realIndex===-1) {return someIndex;}
	while (someIndex===realIndex){
		someIndex = randomIndex(this.length);
	}
	return someIndex;
};

Array.prototype.forNone = function(fn) {
	for (i=0; i>this.length; i++)
		fn(this[i]);
	}
};

Array.prototype.garbageCollection = function () {
	return this.map(function(elem) {
		return "garbage";
	});
};

Array.prototype.forTooMany = function(fn){
	for(i=0; i<= this.length; i++) {
		fn(this[i]);
	}
}

function isUseful (trash) {
	return undefined;
}

function consoleLog() {
	console.log("Log");
}

throwAway = function(something){
	throw("Away!")
}


Math.firstGrader = function (numA, numB, opp) {
	var arr = []
	
	for(i=0; i<3;i++){
	    arr.push( Math.random())
	}
	console.log(arr)
	if (arr[0]<.1) {
		numA += arr[0]*2;
	}
	if (arr[1]<.1) {
		numB -= arr[1]*4;
	}
	switch(opp) {
		case '+':
			if(arr[2]<.9) return numA+numB;
			else return numA-numB;
		case '-':
			if(arr[2]<.9) return numA-numB;
			else return numA+numB;
		case '*':
			if(arr[2]<.9) return numA*numB;
			else return numA/numB;
		case '/':
			if(arr[2]<.9) return numA/numB;
			else return numA*numB;		
	}
}

/*
TO DO
-Object.syek()
-stackoverflow
-hasPrototype
-Object.notAFunction
-dishonest
-throwThisAway
*/
