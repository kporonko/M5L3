let counter = calcSum();
counter(3);
counter(5);
console.log(counter(228));


function calcSum(): (accumulator: number) => number {
    let count: number = 0;
    return function(accumulator: number): number{
        return count += accumulator;
    }
}


function accumulateArray(): (toAdd?: any) => any[]{
    let arr: any[] = [];
    return function(toAdd: any){
        if(toAdd !== undefined){
            arr.push(toAdd);
        }
        else{
            arr = [];
        }
        return arr;
    }
}

let getUpdatedArray = accumulateArray();
console.log(getUpdatedArray(3));
console.log(getUpdatedArray(5));
console.log(getUpdatedArray({name: 'Vasya'}));
console.log(getUpdatedArray());
console.log(getUpdatedArray(4));