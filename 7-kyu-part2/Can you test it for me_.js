/*
Description:
tl;dr; jump to Your Task and see the 9 tests you have to create.

Mocha is a feature-rich JavaScript test framework running on Node.js and the browser, making asynchronous testing simple and fun. Mocha tests run serially, allowing for flexible and accurate reporting, while mapping uncaught exceptions to the correct test cases. Hosted on GitHub.

With mocha you describe what you are testing by calling the describe function which accepts the test name and test code.

describe('Testing class Foo', function() { });
Inside the function parameter of describe you define your test cases calling the function it. it receives the test description and code that runs the assertions.

describe('Testing class Foo', function() {
  it('foo should contain a value', function() {
    Test.expect(foo);
  });

  it('foo should do something', function() {
    Test.expect(...);
  });
});
The assertion methods you have available on Code Wars are the following (msg is optional in all functions except the expect error ones):

Test.expect(passed, msg)

Test.assertEquals(actual, expected, msg)
Test.assertNotEquals(actual, unexpected, msg)

Test.assertSimilar(actual, expected, msg)
Test.assertNotSimilar(actual, unexpected, msg)

Test.expectError(msg, fn)
Test.expectNoError(msg, fn)
expect: expects true or false, test fails if the value was false
assertEquals: expects actual to be equal expected
assertNotEquals: expects actual to be different from expected
assertSimilar: expects actual to be equal expected (can be used to compare arrays)
assertNotSimilar: expects actual to be different from expected (can be used to compare arrays)
expectError: expects a function that will execute and it has to throw an error
expectNoError: expects a function that will execute and it is not expected to throw an error
Your Task
There is a pre-loaded class Foo and an instance of it in the foo variable, you have to create test cases for:

if foo is an instance of Foo
if foo.value starts at 0
if foo.array matches [1, 2, 3]
if foo.add throws for params that are not numbers
if foo.add works for params that are numbers
if foo.value is the initial value plus what was added
if foo.push throws for params that are not numbers
if foo.push works for params that are numbers
if foo.array contains the pushed number
But note that you are going to use _describe rather than describe, this will allow your code to be tested to pass the kata.

Pre-loaded code:

class Foo {
  constructor() {
    this.value = 0;
    this.array = [1, 2, 3];
  }

  add(n) {
    if (typeof n !== 'number') {
      throw new Error(`${n} is not a number`);
    }
    this.value += n;
  }

  push(n) {
    if (typeof n !== 'number') {
      throw new Error(`${n} is not a number`);
    }
    this.array.push(n);
  }
}

const foo = new Foo();
Note: for the sake of backend test simplicity do not use variables when calling methods.
*/
_describe('Foo', function() {
  it('instanceof', function() {
    Test.expect(foo instanceof Foo);
  });
  it('value should start at 0', function() {
    Test.expect(foo.value===0)
  });
  it('array should start with 1, 2, 3', function() {
    Test.assertSimilar(foo.array,[1, 2, 3])
  });
  it('', function() {
    Test.expectError('', ()=>foo.add(false));
  });
  it('', function() {
    Test.expectNoError('',()=> foo.add(5));
  });
  it('', function() {
    Test.assertEquals(foo.value,5)
  });
  
  it('', function() {
    Test.expectError('', ()=>foo.push(''));
  });
  

  it('', function() {
    Test.expectNoError('',()=> foo.push(5));
  });
});
