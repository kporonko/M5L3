var counter = calcSum();
counter(3);
counter(5);
console.log(counter(228));
function calcSum() {
    var count = 0;
    return function (accumulator) {
        return count += accumulator;
    };
}
function accumulateArray() {
    var arr = [];
    return function (toAdd) {
        if (toAdd !== undefined) {
            arr.push(toAdd);
        }
        else {
            arr = [];
        }
        return arr;
    };
}
var getUpdatedArray = accumulateArray();
console.log(getUpdatedArray(3));
console.log(getUpdatedArray(5));
console.log(getUpdatedArray({ name: 'Vasya' }));
console.log(getUpdatedArray());
console.log(getUpdatedArray(4));
