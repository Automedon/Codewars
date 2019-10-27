/*
Description:
Interest in Beats Electronics' headphones and speakers has declined. Critics are arguing that there are more "durable" and "better-sounding" products available for the same price. They've accused the company of emphasizing "appearance" over "quality and functionality". To generate more hype for their product Apple and Beats' founders plan to start a new marketing campaign.

As a member of Beats' marketing team, you are forming variations of the current slogans to see what looks best. Convert the following slogans to uppercase, lowercase, also add an exclamation mark to the end of the slogan.

Return a dictionary/hash/object of the variations.

Examples
beatsMarketing("How will you BE HEARD").upCase  // "HOW WILL YOU BE HEARD"
beatsMarketing("People aren't hearing all the music").lowCase  // "people aren't hearing all the music"
beatsMarketing("You choose the beats").exClamated  // "You choose the beats!"
*/
function beatsMarketing(slogan) {
  /* Edit the values of "variation" object,
  to fit the specifications of the problem. */
  var variation = {
    upCase: slogan.toUpperCase(),
    lowCase: slogan.toLowerCase(),
    exClamated: slogan+'!'
  };
  return variation;
}
