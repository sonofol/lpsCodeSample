'use strict';

var myFunctions = function () {

    var getTextLines = function (elem) {
        var value = document.getElementById(elem).value,
            textLines = [],
            lineRegExp = /^.*$/gm;
        textLines = value.match(lineRegExp);
        if (value === '') {
            return textLines;
        }
        return textLines;
    };
    
    var isInteger = function (value) {
        return Number(value).isInteger();
    };

    var isOddInteger = function (value) {
        return Number(value).isOdd();
    };

    var isEvenInteger = function (value) {
        return Number(value).isEven();
    };

    var isPrimeInteger = function (value) {
        return Number(value).isPrime(); 
    };

    var test = {
        int: isInteger,
        odd: isOddInteger,
        even: isEvenInteger,
        prime: isPrimeInteger
    };

    var find = function (elem, func) {
        var textLines = getTextLines(elem);
        var returnSet = [];
        for (var i = 0; i < textLines.length; i++) {
            if (textLines[i] !== '') {
                if (func(textLines[i])) {
                    returnSet.push(new IntegerResult(textLines[i].trim(), i + 1));
                }
            }
        }
        return returnSet;
    };

    return {
        find: find,
        test: test
    };
}();