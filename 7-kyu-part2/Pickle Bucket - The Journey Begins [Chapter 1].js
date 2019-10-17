/*
Description:
Pickle Bucket [Chapter 1]
The Journey Begins
This is part 1 in a (planned) series of challenges related to pickles and buckets thereof

The Situation
You work for a popular sandwich company called Real Awesome 'Wiches (RAW). Due to rising prices in the pickle industry, RAW has begun a research project to produce its own pickles.

New pickling technology allows for RAW to create pickles one-at-a-time. Currently the pickles come in four flavors: "Dill", "Kosher", "Spicy", and "Bread and Butter (BnB)." Unfortunately, pickle production is not yet completely stable, sometimes we'll see a lot of pickles produced in a minute, sometimes we'll only see a few. Sometimes there will be more of one type of pickle, other times there will be more of a different type.

To start to understand the velocity of pickle production, you've been tasked creating a function to determine the average pickle creations.

Technical Details
You'll be provided a list of counts of pickles produced per minute. Something like this:

Input: [1, 2, 3, 4, 5, 60, 77]

The counts come in ordered sets of 4 to represent each flavor: "Dill", "Kosher", "Spicy", and "Bread and Butter (BnB)."

In the example above, the subset of [1, 2, 3, 4] refers to 1 Dill pickle, 2 Kosher pickles, 3 Spicy pickles, and 4 BnB pickles. The same ordering applies to the next subset of [5, 60, 77] and refers to 5 Dill pickles, 60 Kosher pickles, 77 Spicy pickles, and 0 BnB pickles.

Some rules to know for the input:

You won't need to keep track of the types of pickles, but you can if you want
If the list ends before completing a set of 4, it can be understood to mean 0 of any pickle types left off during that time period
Pickles will always be produced as whole, positive numbers
The output we want is a list of average counts of pickles per minute.

Continuing the example input above of [1, 2, 3, 4, 5, 60, 77], we produced 1 Dill pickle in one minute, and produced 5 Dill pickles in a second minute. This gives us an average of 3 Dill pickles per minute. Likewise we'd get 2 and 60 Koshers, for an average of 31 Kosher pickles, 3 and 77 Spicy pickles for an average of 40 Spicy pickles, and 4 and 0 BnB pickles for an average of 2 BnB pickles.

Output: [3, 31, 40, 2]

Your peer has suggested to first collect pickles in different buckets, and second to calculate the average. You can approach it any way you want, but the idea of pickles in buckets seems to stick in your mind...
*/
function getAverages(pickleCounts) {
  let f = [];
  let s = [];
  let t = [];
  let fo = [];
  let l = pickleCounts.length / 4;
  for (let i = 0; i < l; i++) {
    f.push(pickleCounts.shift() || 0);
    s.push(pickleCounts.shift() || 0);
    t.push(pickleCounts.shift() || 0);
    fo.push(pickleCounts.shift() || 0);
  }
  return [f, s, t, fo].map(v => v.reduce((a, b) => a + b, 0) / v.length);
}
