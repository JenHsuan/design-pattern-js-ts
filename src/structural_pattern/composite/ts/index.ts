interface ICompositeComponent {
    name: string;
    referenceToParent?: Composite;
    method(): void;
    detach(): void;
}

class Composite implements ICompositeComponent {
    name: string;
    referenceToParent?: Composite | undefined = undefined;
    components: ICompositeComponent[];

    constructor(name: string) {
        this.name = name;
        this.components = [];
    }

    method(): void {
        console.log(`name: ${this.name}`);
        console.log('components:');
        for(let c of this.components) {
            console.log(c)
        }
    }

    detach(): void {
        if (this.referenceToParent) {
            this.referenceToParent.delete(this);
            this.referenceToParent = undefined;
        }
    }

    attatch(component: ICompositeComponent) {
        component.detach();
        component.referenceToParent = this;
        this.components.push(component);
    }

    delete(component: ICompositeComponent) {
        const index = this.components.indexOf(component);
        if (index > -1) {
            this.components.splice(index, 1);
        }
    }
}

class Leaf implements ICompositeComponent {
    name: string;
    referenceToParent?: Composite | undefined = undefined;
    constructor(name: string) {
        this.name = name;
    }
    method(): void {
        console.log(`name: ${this.name}`);
    }
    detach(): void {
        if (this.referenceToParent) {
            this.referenceToParent.delete(this);
            this.referenceToParent = undefined;
        }
    }
}

const leafA = new Leaf('leaf A');
const leafB = new Leaf('leaf B');
const component1 = new Composite('component 1');
const component2 = new Composite('component 2');

component1.attatch(leafA);
component1.attatch(leafB);
leafB.detach();
component1.attatch(leafB);
component1.attatch(component2);
component2.detach();
component1.method();