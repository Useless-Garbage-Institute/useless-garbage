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

function consoleLog() {
	console.log("Log");
}

/*
TO DO
-Object.syek()
-stackoverflow
-hasPrototype
-Object.notAFunction
-dishonest
-throwThisAway
-isThisUseful
*/
