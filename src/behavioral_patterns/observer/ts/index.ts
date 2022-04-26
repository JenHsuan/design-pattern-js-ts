interface IObserver {
    notify(...args: unknown[]): void
}

interface IObserverable {
    subscribe(event: string, observer: IObserver): void
    //unsubscribe(observer: IObserver): void
    notify(...args: unknown[]): void
}

class Subject implements IObserverable {
    #observerables: {[key: string]:Array<IObserver>}

    constructor() {
        this.#observerables = {};
    }

    subscribe(event: string, observer: IObserver) {
        if (!this.#observerables[event]) {
            this.#observerables[event] = [];
        }
        this.#observerables[event].push(observer)
    }

    // unsubscribe(observer: IObserver) {
    //     this.#observerables.delete(observer)
    // }

    notify(...args: unknown[]) {
        let key = Array.prototype.shift.call(args),
            fns = this.#observerables[key];
        if (!fns || fns.length === 0) {
            return false;
        }

        fns.forEach(observerable => observerable.notify(...args))
    }
}

class Observer implements IObserver {
    #key: string
    constructor(key: string, observable: IObserverable) {
        this.#key = key;
        observable.subscribe(key, this)
    }

    notify(...args: unknown[]) {
        console.log(JSON.stringify(args))
    }
}


const interestedEvent = 'interestedEvent'

const subject = new Subject()
const object1 = new Observer(interestedEvent, subject);

subject.notify(interestedEvent, [1, 2, 3])
