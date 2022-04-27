interface IStrategyConstructor {
    // A Constructor for the IStrategy
    new (): IStrategy
}

class Client {
    request(strategy: IStrategyConstructor): IStrategy {
        return new strategy();
    }
}

interface IStrategy {
    // A strategy Interface
    requestToken: () => void
}

class facebook implements IStrategy {
    requestToken = () => console.log('retrieved the token from Facebook');
}

class google implements IStrategy {
    requestToken = () => console.log('retrieved the token from Google');
}

let client = new Client();
client.request(facebook).requestToken();

//will print: retrieved the token from Facebook

