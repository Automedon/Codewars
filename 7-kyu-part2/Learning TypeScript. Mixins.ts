/*
Description:
Learning TypeScript. Mixins
Overview
Along with traditional object-oriented hierarchies, another popular way of building up classes from reusable components is to build them by combining simpler partial classes. You may be familiar with the idea of mixins or traits for languages like Scala, and the pattern has also reached some popularity in the JavaScript community.

Introduction to mixins
Generally speaking a mixin class is a class that implements a distinct aspect of functionality. Other classes can then include the mixin and access its methods and properties. That way, mixins provide a form of code reuse that is based on composing behavior.

Now let’s see how you can model mixins in TypeScript. First of all we’ll define two classes Disposable and Activatable that will act as our mixins. You can see each one is focused on a particular activity or capability. We’ll later mix these together to form a new class from both capabilities.

/** Disposable Mixin. */
class Disposable {
    isDisposed: boolean;
    dispose() {
        this.isDisposed = true;
    }
}

/** Activatable Mixin. */
class Activatable {
    isActive: boolean;
    activate() {
        this.isActive = true;
    }
    deactivate() {
        this.isActive = false;
    }
}
Next, we’ll create the class that will handle the combination of the two mixins. Let’s look at this in more detail to see how it does this:

class SmartObject implements Disposable, Activatable {
The first thing you may notice in the above is that instead of using extends, we use implements. This treats the classes as interfaces, and only uses the types behind Disposable and Activatable rather than the implementation. This means that we’ll have to provide the implementation in class. Except, that’s exactly what we want to avoid by using mixins.

To satisfy this requirement, we create stand-in properties and their types for the members that will come from our mixins. This satisfies the compiler that these members will be available at runtime. This lets us still get the benefit of the mixins, albeit with some bookkeeping overhead.

// Disposable
isDisposed: boolean = false;
dispose: () => void;
// Activatable
isActive: boolean = false;
activate: () => void;
deactivate: () => void;
Finally, we mix our mixins into the class, creating the full implementation.

applyMixins(SmartObject, [Disposable, Activatable]);
Lastly, we create a helper function that will do the mixing for us. This will run through the properties of each of the mixins and copy them over to the target of the mixins, filling out the stand-in properties with their implementations.

function applyMixins(derivedCtor: any, baseCtors: any[]) {
    baseCtors.forEach(baseCtor => {
        Object.getOwnPropertyNames(baseCtor.prototype).forEach(name => {
            derivedCtor.prototype[name] = baseCtor.prototype[name];
        });
    });
}
Hint: You can find the complete source code for this sample here: https://www.typescriptlang.org/docs/handbook/mixins.html

Task
You're required to implement mixin Serializable which should contain:

method public serialize(): string - this method must serialize all properties of the object (i.e. return object converted to string).
method public deserialize(source: string): void - this is the opposite method, that converts string to object properties and assigns them to current object.
For simplicity's sake let's consider that objects won't contain any circular references. The function applyMixins is defined in tests and you don't need to change it.

P.S. Solved this kata? Take a look at other katas in "Learning TypeScript" collection.
*/
export class Serializable{
  serialize(): string {
    return JSON.stringify(this)
  }
   deserialize(source: string):void {
   Object.assign(this,JSON.parse(source))
  }
}
