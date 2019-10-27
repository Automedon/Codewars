/*
Description:
Learn how to use recompose's withProps higher-order component (HOC) for React JS.

https://recompose.docsforhumans.com/api/withprops.html
https://reactjs.org/docs/higher-order-components.html
Your challenge:

Use the withProps HOC to transform the supplied props

Create a new HOC called WithTitle using withProps HOC
It should accept the param props and return a new object with a property called title
The title prop should be set to "Your basket is empty", when props.items has a length of 0
The title prop should be set to "You have ${props.items.length} items in your basket", when props.items is greater than 0
NB. Study the tests to see how your WithTitle HOC will be used. In particular the Page component and PageWithTitle, which is composed by wrapping Page with WithTitle.

Enjoy!
*/
const WithTitle = withProps((props) => {
  let title = props.items.length?`You have ${props.items.length} items in your basket`:"Your basket is empty"
  return {...props,title};
});
