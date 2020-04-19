/*
Description:
Learning TypeScript. Advanced Types. Union Types
Overview
Union types are closely related to intersection types, but they are used very differently. Occasionally, you’ll run into a library that expects a parameter to be either a number or a string. For instance, take the following function:

/**
 * Takes a string and adds "padding" to the left.
 * If 'padding' is a string, then 'padding' is appended to the left side.
 * If 'padding' is a number, then that number of spaces is added to the left side.
 */
function padLeft(value: string, padding: any) {
    if (typeof padding === "number") {
        return Array(padding + 1).join(" ") + value;
    }
    if (typeof padding === "string") {
        return padding + value;
    }
    throw new Error(`Expected string or number, got '${padding}'.`);
}

padLeft("Hello world", 4); // returns "    Hello world"
The problem with padLeft is that its padding parameter is typed as any. That means that we can call it with an argument that’s neither a number nor a string, but TypeScript will be okay with it.

let indentedString = padLeft("Hello world", true); // passes at compile time, fails at runtime.
In traditional object-oriented code, we might abstract over the two types by creating a hierarchy of types. While this is much more explicit, it’s also a little bit overkill. One of the nice things about the original version of padLeft was that we were able to just pass in primitives. That meant that usage was simple and concise. This new approach also wouldn’t help if we were just trying to use a function that already exists elsewhere.

Instead of any, we can use a union type for the padding parameter:

/**
 * Takes a string and adds "padding" to the left.
 * If 'padding' is a string, then 'padding' is appended to the left side.
 * If 'padding' is a number, then that number of spaces is added to the left side.
 */
function padLeft(value: string, padding: string | number) {
    // ...
}

let indentedString = padLeft("Hello world", true); // errors during compilation
A union type describes a value that can be one of several types. We use the vertical bar (|) to separate each type, so number | string | boolean is the type of a value that can be a number, a string, or a boolean.

Task
Let’s have a look at some properties of TypeScript union types:

Identity: A|A is equivalent to A
Commutativity: A|B is equivalent to B|A
Associativity: (A|B)|C is equivalent to A|(B|C)
Subtype collapsing: A|B is equivalent to A if B is a subtype of A
I.e. if we have a value that has a union type, we can only access members that are common to all types in the union. If a value has the type A | B, we only know for certain that it has members that both A and B have.

Your task is to create function join(tokens: string | string[], glue?: string): string which can accept both string and string[] and return one string in which tokens are concatenated with the glue.

Hint: Use typeof before calling join method.

P.S. Solved this kata? Take a look at other katas in "Learning TypeScript" collection.
*/
export function join(tokens: string | string[], glue?: string): string {
  return typeof tokens === 'string' ? tokens : tokens.join(glue)
}
