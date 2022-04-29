# Design pattern in JavaScript and TypeScript

## Usages

* Compile the TypeScript files

```
npm install
npm start
```

## Patterns

* behavioral pattern
  * [observer](src/behavioral_patterns/observer/readme.md)
  * [strategy](src/behavioral_patterns/strategy/readme.md)
* creational pattern
  * [builder](src/creational_patterns/builder/readme.md)
  * [singleton](src/creational_patterns/singleton/readme.md)
* structural pattern
  * [composite](src/structural_patterns/composite/readme.md)

## UML

### Association

* ClassA uses ClassB or an object of classB

[![](https://mermaid.ink/img/pako:eNpVjzEOwjAMRa8SeW4vkAEJARsDgtWLlbgQqUmQ4wyo6t1JaZHAi7_-f5btCVz2DBbcSKUcA92FIiYfhJ2GnMz5ism0-uTmwlKaOWFa3Xltv8iB5C9fxTbY97sFsGZfSna0bIAOIkuk4NsV00Ij6IMjI9gmPQ9UR0XANDe0Pj0pn3zQLGAHGgt3QFXz7ZUcWJXKX2h7ZqPmNwhxTa8)](https://mermaid.live/edit#pako:eNpVjzEOwjAMRa8SeW4vkAEJARsDgtWLlbgQqUmQ4wyo6t1JaZHAi7_-f5btCVz2DBbcSKUcA92FIiYfhJ2GnMz5ism0-uTmwlKaOWFa3Xltv8iB5C9fxTbY97sFsGZfSna0bIAOIkuk4NsV00Ij6IMjI9gmPQ9UR0XANDe0Pj0pn3zQLGAHGgt3QFXz7ZUcWJXKX2h7ZqPmNwhxTa8)

### Extension/Inheritance

[![](https://mermaid.ink/img/pako:eNpdj7sKwzAMRX_FaE5-wEOXPqDQqV29CFtpDLFcHHkIbv69TpPSUi26cM4FqYCNjkCDHXAcDx7vCYNh5xNZ8ZHV5WpY1XlzdUK2k9pjUsXwCuZ1_Vr_fA3fbts-d0vQ6sw9JS-VEDQQKAX0rl5TlooB6SmQAV2jow7zIAYMz1XND4dCR-clJtAdDiM1gFnibWILWlKmj7Q9tVnzCy6CT-E)](https://mermaid.live/edit#pako:eNpdj7sKwzAMRX_FaE5-wEOXPqDQqV29CFtpDLFcHHkIbv69TpPSUi26cM4FqYCNjkCDHXAcDx7vCYNh5xNZ8ZHV5WpY1XlzdUK2k9pjUsXwCuZ1_Vr_fA3fbts-d0vQ6sw9JS-VEDQQKAX0rl5TlooB6SmQAV2jow7zIAYMz1XND4dCR-clJtAdDiM1gFnibWILWlKmj7Q9tVnzCy6CT-E)

### Implementation/Realization

* A class that implements an interface must implement all of the methods declared in the interface

[![](https://mermaid.ink/img/pako:eNpdj7sOwjAMRX8l8lz1AzKwAAMSU1m9WIkLkfJAqTOU0n8nfSAhvPjq3mPLnsAky6DBeBqGk6N7poDRusxGXIrq2mFUtdZcXY6U1YRx8-at_QL_-SYWt23fh3Veq47Juxct-6GBwDmQs_WGaaER5MGBEXSVlnsqXhAwzhUtT0vCZ-skZdA9-YEboCLpNkYDWnLhL7S_slPzBwL2TGs)](https://mermaid.live/edit#pako:eNpdj7sOwjAMRX8l8lz1AzKwAAMSU1m9WIkLkfJAqTOU0n8nfSAhvPjq3mPLnsAky6DBeBqGk6N7poDRusxGXIrq2mFUtdZcXY6U1YRx8-at_QL_-SYWt23fh3Veq47Juxct-6GBwDmQs_WGaaER5MGBEXSVlnsqXhAwzhUtT0vCZ-skZdA9-YEboCLpNkYDWnLhL7S_slPzBwL2TGs)

### Aggregation

* Library aggregates books. Books and library can exist independently

[![](https://mermaid.ink/img/pako:eNpVjz0OwjAMha8SeW4vkAEJBFsnWLOYxA0RTYLcZKii3p30TwIvfrK_p2cX0NEQSNADjuPVoWX0KhjHpJOLQXR3FUStdS8692TkSRQVtvG8tV_mEuP7D9jEYY1te1oZKc7WMllccqABT-zRmXpLWRwK0os8KZBVGuoxD0mBCnNF88dgoptxKTLIHoeRGsCc4mMKGmTiTAe0v7RT8xcVWFAY)](https://mermaid.live/edit#pako:eNpVjz0OwjAMha8SeW4vkAEJBFsnWLOYxA0RTYLcZKii3p30TwIvfrK_p2cX0NEQSNADjuPVoWX0KhjHpJOLQXR3FUStdS8692TkSRQVtvG8tV_mEuP7D9jEYY1te1oZKc7WMllccqABT-zRmXpLWRwK0os8KZBVGuoxD0mBCnNF88dgoptxKTLIHoeRGsCc4mMKGmTiTAe0v7RT8xcVWFAY)

### Composition

* Airplane can be composed of Wings and other parts. But the plane are no longer really a plane without its wings

[![](https://mermaid.ink/img/pako:eNpVjz0OwjAMha8SeUTtBTIgIWBjgoEli5W4xVLiVGkyoKp3J_1BAi9-sr-nZ09goyPQYD2O44WxTxiMOE5kM0dRt7sRVWvdqxOnwaOQmoxs83lrv9CTpf8DNvH1Htr2uDJanWMY4shLEDQQKAVkV4-ZFoeB_KJABnSVjjosPhswMle0DA4zXR3nmEB36EdqAEuOj7dY0DkV-kL7Tzs1fwB_XFCh)](https://mermaid.live/edit#pako:eNpVjz0OwjAMha8SeUTtBTIgIWBjgoEli5W4xVLiVGkyoKp3J_1BAi9-sr-nZ09goyPQYD2O44WxTxiMOE5kM0dRt7sRVWvdqxOnwaOQmoxs83lrv9CTpf8DNvH1Htr2uDJanWMY4shLEDQQKAVkV4-ZFoeB_KJABnSVjjosPhswMle0DA4zXR3nmEB36EdqAEuOj7dY0DkV-kL7Tzs1fwB_XFCh)



