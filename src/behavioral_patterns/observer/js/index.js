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

let Subject = {};
Subject = Object.create(IObserverable)

let Observer = {};
Observer = Object.create(IObserver)

const interestedEvent = 'interestedEvent'

Observer.addEventListener(Subject, interestedEvent, (args) => {
    console.log(JSON.stringify(args))
})
Subject.trigger(interestedEvent, [1, 2, 3])
