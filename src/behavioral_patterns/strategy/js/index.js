let strategies = {
    facebook: {
        requestToken: () => console.log('retrieved the token from Facebook')
    },
    google: {
        requestToken: () => console.log('retrieved the token from Google')
    }
}

let Client = (type) => strategies[type].requestToken();
Client('facebook');

//will print: retrieved the token from Facebook
