
Object.prototype.even = function() {
    process.nextTick(() => console.log(this.filter(x => x % 2 === 0)));
};

Object.prototype.odd = function() {
    process.nextTick(() => console.log(this.filter(x => x % 2 !== 0)));
}

    console.log('start');
    [1,2,3,4,5,6,7,8].even();
    [1,2,3,4,5,6,7,8].odd();
    console.log('end');



