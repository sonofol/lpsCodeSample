'use strict';

Number.prototype.isInteger = function () {
    if (Number.isNaN(this)) {
        return false;
    }
    return Math.floor(this) === this;
};

Number.prototype.isOdd = function () {
    if (Number.isNaN(this)) {
        return false;
    }
    return this.valueOf() % 2 > 0;
};

Number.prototype.isEven = function () {
    if (Number.isNaN(this)) {
        return false;
    }
    return this.valueOf() % 2 === 0;
};

Number.prototype.isPrime = function () {
    if (Number.isNaN(this)) {
        return false;
    }

    if (this.valueOf() <= 2) {
        return false;
    }

    for (var i = 2; i <= Math.floor(Math.sqrt(this.valueOf())); i++) {
        if (this.valueOf() % i === 0) {
            return false;
        }
    }
    return true;
};