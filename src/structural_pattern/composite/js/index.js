const Leaf = function(name) {
    return {
        referenceToParent: undefined,
        name: name,
        method: function() {
            console.log(`name: ${this.name}`);
        },
        detach: function() {
            if (this.referenceToParent) {
                //Delete the reference from the parent
                this.referenceToParent.delete(this);
                this.referenceToParent = undefined;
            }
        }
    }
}

const Composite = function(name) {
    return {
        referenceToParent: undefined,
        name: name,
        components: [],
        method: function() {
            console.log(`name: ${this.name}`);
            console.log('components:');
            for(let c of this.components) {
                console.log(c)
            }
        },
        detach: function() {
            if (this.referenceToParent) {
                //Delete the reference from the parent
                this.referenceToParent.delete(this);
                this.referenceToParent = undefined;
            }
        },
        attatch(component) {
            component.detach();
            component.referenceToParent = this;
            this.components.push(component);
        },
        delete(component) {
            const index = this.components.indexOf(component);
            if (index > -1) {
                this.components.splice(index, 1);
            }
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

/* will print:
name: component 1
components:
<ref *1> {
  referenceToParent: {
    referenceToParent: undefined,    
    name: 'component 1',
    components: [ [Circular *1], [Object] ],
    method: [Function: method],      
    detach: [Function: detach],      
    attatch: [Function: attatch],    
    delete: [Function: delete]       
  },
  name: 'leaf A',
  method: [Function: method],        
  detach: [Function: detach]
}
<ref *1> {
  referenceToParent: {
    referenceToParent: undefined,    
    name: 'component 1',
    components: [ [Object], [Circular *1] ],
    method: [Function: method],      
    detach: [Function: detach],      
    attatch: [Function: attatch],    
    delete: [Function: delete]       
  },
  name: 'leaf B',
  method: [Function: method],        
  detach: [Function: detach]
}
 */