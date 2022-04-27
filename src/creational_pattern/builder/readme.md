# Builder Pattern
* The builder pattern is a creational pattern whose intent to separate the construction of a complex object from its representation so that you can use the same construction process to create different representation

## Roles
* Product: The product being built
* Builder interface: The interface that the concrete builder should implement
* Builder: Provides methods to build and retrieve the concrete product. Implements the **Builder interface**
* Director: has a `construtor` method that when called creates a customized product using the methods of the **Builder**

[![](https://mermaid.ink/img/pako:eNrNksFqwzAMhl_F6NTS5gVCCbTrDoEdSnf1RbOV1JDYwVYOpc2710maLNCxXaeT-PXJ-rF0A-U0QQqqwhCOBkuPtbQihjaeFBtnxcd5VAZGHAfdeXEb1T42ytnAvu311VqcvNMxH-udtMv2Q2sqTYvuzVevnNDzfsXXhtaCLya8Vg-_Vt9-qpbEZwptxX94yl9M7Xa5ZfIFKsqyf-F0spgk92w2nIq8biqqyTL2qxrReUMuSTIxo_uy9FQuuO8ns2lopEJwygwUbKEmX6PR8UCGr5HAlzhNQhpTTQVGxxKk7SLaNhqZ3rWJkyEtsAq0BWzZfV6tgjReB03Q886eVPcAW3PRmg)](https://mermaid.live/edit#pako:eNrNksFqwzAMhl_F6NTS5gVCCbTrDoEdSnf1RbOV1JDYwVYOpc2710maLNCxXaeT-PXJ-rF0A-U0QQqqwhCOBkuPtbQihjaeFBtnxcd5VAZGHAfdeXEb1T42ytnAvu311VqcvNMxH-udtMv2Q2sqTYvuzVevnNDzfsXXhtaCLya8Vg-_Vt9-qpbEZwptxX94yl9M7Xa5ZfIFKsqyf-F0spgk92w2nIq8biqqyTL2qxrReUMuSTIxo_uy9FQuuO8ns2lopEJwygwUbKEmX6PR8UCGr5HAlzhNQhpTTQVGxxKk7SLaNhqZ3rWJkyEtsAq0BWzZfV6tgjReB03Q886eVPcAW3PRmg)

## References

* [設計模式—建造者模式 (Builder Design Pattern)](https://medium.com/wenchin-rolls-around/%E8%A8%AD%E8%A8%88%E6%A8%A1%E5%BC%8F-%E5%BB%BA%E9%80%A0%E8%80%85%E6%A8%A1%E5%BC%8F-builder-design-pattern-7c8eac7c9a7)

