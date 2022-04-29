class Singleton {
    static instance: Singleton;
    #table: { [id: number]: string } = {};

    constructor() {
        if (Singleton.instance) {
            return Singleton.instance;
        }
        Singleton.instance = this;
    }

    //Test the data will be persist
    addData(id: number, description: string): void {
        this.#table[id] = description;
    }

    print(): void {
        for (const key in this.#table) {
            console.log(`|\t${key}\t|\t${this.#table[key]}\t|`);
        }
    }
}

const singleton1 = new Singleton();
singleton1.addData(1, 'member 1');
singleton1.addData(2, 'member 2');
singleton1.addData(3, 'member 3');


const singleton2 = new Singleton();
singleton2.print();
console.log(singleton1 === singleton2)
/* will print:
 * |       1       |       member 1        |
 * |       2       |       member 2        |
 * |       3       |       member 3        |
 * true
 */