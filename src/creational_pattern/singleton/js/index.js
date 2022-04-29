//Closure
//IIFE

const CreateSingleton = function() {
    this.init();
}

CreateSingleton.prototype.init = function() {
    this.table = {};
}

CreateSingleton.prototype.addData = function(id, description) {
    this.table[id] = description;
}

CreateSingleton.prototype.print = function() {
    for (const key in this.table) {
        console.log(`|\t${key}\t|\t${this.table[key]}\t|`);
    }
}

const ProxySingletonCreateSingleton = (function() {
    let instance;
    return function() {
        if (!instance) {
            instance = new CreateSingleton();
        }

        return instance;
    }
})();

const singleton1 = new ProxySingletonCreateSingleton();
singleton1.addData(1, 'member 1');
singleton1.addData(2, 'member 2');
singleton1.addData(3, 'member 3');

const singleton2 = new ProxySingletonCreateSingleton();
singleton2.print();
console.log(singleton1 === singleton2)
/* will print:
 * |       1       |       member 1        |
 * |       2       |       member 2        |
 * |       3       |       member 3        |
 * true
 */

