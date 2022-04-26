interface IStrategyConstructor {
    // A Constructor for the IStrategy
    new (): IStrategy
}

interface IStrategy {
    // A strategy Interface
    requestToken(): void
}

class facbook implements IStrategy {
    requestToken() {
    }
}

class google implements IStrategy {
    requestToken() {
    }
}

class Client {
    inject(strategy: IStrategyConstructor) {
        return new strategy();
    }
}
// let util = {
//     facebook: {
//         requestToken: function () {

//         }
//     },
//     google: {
//         requestToken: function () {

//         }
//     }
// }

let client = new Client();
client.inject(facbook).requestToken();
// util['facebook'].requestToken();

