'use strict';

function IntegerResult(value, lineNumber) {
    this.value = value;
    this.lineNumber = lineNumber;
    
    var toString = function () {
        return this.value + ' (line ' + this.lineNumber + ')';
    };
    
    return {
        value: value,
        lineNumber: lineNumber,
        toString: toString
    };
}
