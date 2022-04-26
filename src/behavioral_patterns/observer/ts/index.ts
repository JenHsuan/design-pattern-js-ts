interface IObserver {
    subscribe(key: string, observable: IObserverable): void;
    notify(...args: unknown[]): void;
}

interface IObserverable {
    subscribe(event: string, observer: IObserver): void;
    notify(...args: unknown[]): void;
}

class Subject implements IObserverable {
    #observerables: { [key: string]: Array<IObserver> } = {};

    subscribe(event: string, observer: IObserver): void {
        if (!this.#observerables[event]) {
            this.#observerables[event] = [];
        }
        this.#observerables[event].push(observer);
    }

    notify(...args: unknown[]): void {
        let key = Array.prototype.shift.call(args),
            fns = this.#observerables[key];

        if (!fns || fns.length === 0) {
            return;
        }

        fns.forEach((observer: IObserver) => observer.notify(...args))
    }
}

class Observer implements IObserver {
    constructor(private callback: (args: number[]) => void) {}

    subscribe(key: string, observable: IObserverable): void {
        observable.subscribe(key, this)
    }

    notify(...args: number[]): void {
        this.callback(args);
    }
}


const total = 'total'
const totalCalculator = (data: number[]) => console.log(data.reduce((a: number, b: number) => a + b, 0));

//Create an observer and subscribe the subject with the specific event key and the callback function
const subject = new Subject()
const observer = new Observer(totalCalculator)
observer.subscribe(total, subject);

//Notify observers which subscribes total event with data
const data = [1, 2, 3];
subject.notify(total, ...data)

//Will print 6
