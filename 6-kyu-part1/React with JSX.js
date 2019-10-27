/*
Description
In the Creating Elements with React kata, we explored how simple it is to create elements with React.

But.. didn't that look like a lot of JavaScript with some HTML mixed in? It makes it kinda impossible for someone who only knows HTML to modify templates and can make the code kinda tough to read. Fortunately for us, React works with JSX

JSX essentially extends normal JavaScript syntax to allow us to create XML nodes directly in our JavaScript files. This makes it super easy to create React elements on the fly! Check this hello world out:

var helloWorld = <div>Hello World</div>
Clean, huh? Let's also experiment with the React Components. React gives us access to "components", which can be leveraged to modularize reusable functionality that will render out HTML templates. Let's take a look at how that works. Here's a simple example:

var Person = React.createClass({
  render: function() {
    return (
      <div>Hello, my name is {this.props.name}!</div>
    );
  }
});
Now we have a re-usable person component that will render out a div with content depending on the person's props. Notice the capital letter for the Person var? This is how JSX determines whats an HTML tag and what's a React Component. So now we can write

var dan = <Person name={'dan'}/>
And it will create a React element that when rendered will look like: <div>Hello, my name is dan!</div>. Sweet!

Your Task
1) First task, I want you to tell me who your three favorite codewarriors are. And not only do I want to hear it, but I want you to YELL it at me with an <h1> header. Store that in the myHeader variable stubbed out for you and I will be a happy man.

Be sure to follow this format:

<h1>My three favorite codewarriors are noLan, jhoffner and OverZealous</h1>
2) Next I want you to create a CodewarsLink that is an anchor tag and will link to a Codewarriors profile. That means that if it were for my a link for my username, you should create an anchor tag like so:

<a href="http://www.codewars.com/users/noLan">noLan</a>
The username will be supplied to you as user, which will be part of the elements props.

3) Finally, task number three! Expand on this concept further and create a Leaderboard that will create an abridged version of the current Codewars leaderboard! I've preloaded the top 100 users in the leaderboard array which will be passed to your Leaderboard component as leaders:

var leaders = ['Sch3lp', 'nplus']
<Leaderboard leaders={leaders}/>
Your task is to create a leaderboard of all 100 anchor tags wrapped in a div. So if we were to take just the top 3 users, it would look something like this (minus the formatting):

<div>
  <a href="http://www.codewars.com/users/jhoffner">jhoffner</a>
  <a href="http://www.codewars.com/users/GiacomoSorbi">GiacomoSorbi</a>
  <a href="http://www.codewars.com/users/ZozoFouchtra">ZozoFouchtra</a>
</div>
HINT - This is certainly not the only way of doing it, but mapping over dynamic children could definitely help you out here.

Oh, and finally, don't forget to add a key property to each codewarrior's anchor tag. It should be unique for each codewarrior, so choose a key wisely! =)
*/
var myHeader = <h1>My three favorite codewarriors are noLan, jhoffner and OverZealous</h1>

var CodewarsLink = React.createClass({
  render: function() {
    let href = `http://www.codewars.com/users/${this.props.user}`
    return <a key={this.props.user} href={href}>
      {this.props.user}
    </a>
  }
});

var Leaderboard = React.createClass({
  render: function() {
    let links = leaderboard.map((user) => {
      return <CodewarsLink key={user} user={user}/>
    });
    return <div>{links}</div>
  }
});
