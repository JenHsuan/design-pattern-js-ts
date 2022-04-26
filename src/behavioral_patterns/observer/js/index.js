let IObserverable = {
    observerables: [],
    listen: function (event, callback) {
        if (!this.observerables[event]) {
            this.observerables[event] = [];
        }
        this.observerables[event].push(callback)
    },
    trigger: function (...args) {
        let key = Array.prototype.shift.call(args),
            fns = this.observerables[key];
        if (!fns || fns.length === 0) {
            return false;
        }
        console.log(args)
        console.log(fns)
        fns.forEach(fn => fn.apply(this, args))
    }
}

let IObserver = {
    addEventListener: function (IObserverable, event, callback) {
        if (IObserverable && typeof IObserverable.listen === "function") {
            IObserverable.listen(event, callback);
        }
    }
};

const total = 'total'
function totalCalculator(data) {
    console.log(data.reduce((a, b) => a + b, 0));
}

//Create an observer and subscribe the subject with the specific event key and the callback function
let Subject = Object.create(IObserverable)
let Observer = Object.create(IObserver)
Observer.addEventListener(Subject, total, totalCalculator);

//Notify observers which subscribes total event with data
const data = [1, 2, 3];
Subject.trigger(total, data)

//Will print 6
