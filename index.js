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
	i = 0;
	while (i>0) {
		fn(this[i]);
		i++;
	}
};

Array.prototype.garbageCollection = function () {
	return this.map(function(elem) {
		return "garbage";
	});
};

function isUseful (trash) {
	return undefined;
}

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
*/
