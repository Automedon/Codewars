/*
Description:
What is React?
React is a library for building user interfaces created by Facebook. A keyword here is *library*, meaning that it gives you more power, freedom and responsibility when choosing what other libraries/technologies you want to use with it.

React is built on JavaScript. If you know JS, it's (relatively) easy to start with React - all you have to learn is React-specific stuff and you are good to go.

So, let's dive in!

In React, everything is based on components. There are two kinds of components. Function components that work with nothing but props passed to them and class components that can work with both state and props.

Don't worry about state and props for now, we'll get to them later. ;)

Function components and component nesting
These components are usually defined as pure functions. Meaning that for the same input, they have the same output - no side effects.

They are usually used to display data. They don't change the data they receive, they just render it.

Here is an example:

function Title(){
    return <h1>Hello</h1>;
}
Or, with arrow function:

const Title=()=><h1>Hello</h1>;
NOTE: These tags are not mere HTML. They are JSX, a standard that gets transpiled to JavaScript to generate HTML. To learn more about them, hop here. This will also introduce you to the syntax to create components that was used before. However, I won't get into details about it since the goal of this kata is a bit different :)

If you would like to use this component somewhere, let's say inside another component you'll have to do something like this:

const Title=()=><h1>Hello</h1>;
const Nest=()=><div> <Title /> </div>; //nesting Title
Simple, isn't it? :)

Here, Nest became a parent component of Title, which in turn, is referred to as the child of Nest.

Notice the <div> tag. In this case, it's not necessary, we could just return the <Title /> directly but if we want to have more components returned by one, or repeat the same component, they all need to be wrapped within one tag.

BAD: const Nest=()=><Title /><Title />; This will cause an error.

GOOD: const Nest=()=><div><Title /><Title /></div>;

TIP: Always start component names with a capital letter. For example, <div /> is a DOM tag but <Title /> would be recognised as a component and would require Title to be in scope.

Class components
Since ES6 introduced advanced class features, React also introduced a way to create components using those same features. Let's look at an example:

class TitleClass extends React.Component {
    render() {
        return <h1>Hello</h1>;    
    }
}
<Title /> and <TitleClass /> are, in this case, doing the same thing - returning Hello wrapped with <h1>.

However, there is one big difference between class components and function components.

Class components give you more power. They can have their own state and they can control their own outputs and outputs of its children. This is a story for another kata.

Time for your task!

Task
Create three components. Following the provided rules
One component should be named Hello and it should return 'Hello' wrapped inside of h1.
The second component should be named World and it should return 'World!' wrapped inside of h2.
Create a parent component using class syntax called Greet and nest previous two components inside of it, wrapping them with a div.
If you are stuck, refer to examples provided here. Good luck! :)

There might be some problem with spaces (like you've inserted some extra spaces that make tests fail). It's easy to solve them by reading the error message. So it's never a problem. :)

More info: here.

NOTE (20.12.2017): I am not sure if there was an issue because of CW updates or something else. Regardless, the issue TypeError: jsdom.jsdom is not a function should be solved now.

If anyone is interested in how I fixed it, here's the link to GitHub issue. Look for Mike26372 comment. I also left the old code in tests commented out as a reference for anyone interested.

Due to CW not supporting React to a degree I would like it to, I will not continue with the series. I have tried to make a few more, but they either take ages or timeout. However, it was fun to figure how to setup and test this one. :)
*/
const React = require('react');
const Hello =()=> <h1>Hello</h1>
const World =()=> <h2>World!</h2>
class Greet extends React.Component{
  render(){
    return <div><Hello/><World/></div>
  }
}
