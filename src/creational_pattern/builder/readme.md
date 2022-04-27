# Builder Pattern
* The builder pattern is a creational pattern whose intent to separate the construction of a complex object from its representation so that you can use the same construction process to create different representation
    * Product: The product being built
    * Builder interface: The interface that the concrete builder should implement
    * Builder: Provides methods to build and retrieve the concrete product. Implements the **Builder interface**
    * Director: has a `construtor` method that when called creates a customized product using the methods of the **Builder**