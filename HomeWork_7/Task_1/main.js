// Через Array.prototype. створити власний foreach, filter

Array.prototype.forEach = function(callback) {
    for (let i = 0; i < this.length; i++) {
        callback(this[i], i, this);
    }
};

Array.prototype.filter = function(callback){
    let newArray = [];
    for (let item of this) {
        if (callback){
            newArray.push(item);
        }
    }
    return newArray;
};