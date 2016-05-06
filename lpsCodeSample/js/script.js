'use strict';

function find(elem, func) {
    var results = myFunctions.find(elem, func),
        returnString = '';
    results.forEach(function (data) {
        returnString += data.toString() + '\n';
    });
    document.getElementById('results').innerText = returnString;
}