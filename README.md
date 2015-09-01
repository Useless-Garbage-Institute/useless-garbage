# useless-garbage

The useless-garbage library is the only npm module that is guaranteed to have no redeemable functionality whatsoever. There are plenty of helpful JavaScript libraries out there, and some that are of questionable utility, but none that are share our commitment to utter uselessness. 

Useless-garbage was created with the goal of providing an ample set of counterproductive functions, and by that we mean functions that are of absolutely no worth.

If you have found any of these functions to be anything but pointless, please let us know so that we may take steps to address that.

# getting started
With [npm](http://npmjs.org) do:

```
npm install useless-garbage -g --save --save-dev
```

We recommend including all of the flags in the above example. Only the -g will apply, which makes the rest useless. Just the way we want it.


# examples

Useless-garbage offers a large selection of worthless functions. Here are just a few examples. 

#### Array.prototype.wrongIndexOf
Extends the Array prototype. Returns anything but the correct index of an element. If the element is not present, returns one of any of the valid index numbers in the array.

```
var ug = require('useless-garbage');
var numArray = [1, 2, 3, 4, 5];
numArray.wrongIndexOf(1) !== 0;
//-> returns an integer between 1 and 4 (numArray.length-1). Anything but zero.
numArray.wrongIndexOf(10) !== -1;
//-> returns an integer between 0 and 4. Anything but -1.
```

#### Array.prototype.forNone

The iterators from ES5 and ES6 are so yawn. Array.prototype.forNone iterates over exactly **none** of the items in the array. Perfect for when you are trying to get absolutely nothing accomplished.

```
var ug = require('useless-garbage');
var numArray = [1, 2, 3, 4, 5];
numArray.forNone(function(element){element * 2;});
console.log(numArray);
//-> [1, 2, 3, 4, 5]
```

# contributing
The Useless Garbage Institute welcomes contributions from the community. First and foremost, if you find any of these functions to be of use, no matter how limited the circumstances or how tangential the utility, please log this as an issue. 

Secondly, we also encourage suggestions on how to make the existing library even more hopeless, and for new ideas too add even more disfunctionality to useless-garbage. To submit your contribution for consideration, just send us a pull request.

## Guidelines for pull requests
Your pull request is most likely to be accepted if it adheres to the following guidelines:
* It is thoroughly useless, or implements something useful in a much more inefficient way than already available in built-in methods.
* It is not malicious or ill-intentioned in anyway. Please stick to **uselessness** as a guiding principle.