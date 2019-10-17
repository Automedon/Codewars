/*
Description:
When no more interesting kata can be resolved, I just choose to create the new kata, to solve their own, to enjoy the process --myjinxin2015 said

Description:
A little kata, just for fun ;-)

Do you want to talk to an array? ;-)

Give you an array what. Return what's you should talking about according to what is what.

What's in the [...what] and what's you should talking about?
(Priority level from top to down)

If no element in what, return "Nothing here!"
If every element is "OK", return "Everything is OK!"
If "Nice" and "you" are adjacent elements, return "Nice to meet you!"
If array contains exactly four "Waiting" and a "girl", return "Waiting for a girl!"
If all elements are starting with letter "f", return "Array is full!"
If there are some "child", return "We have nnn children!"(nnn is the numbers of "child")
If "myjinxin" appear, return "Really handsome!"(Please stop vomiting ;-))
If "problem" appear in array, return "Array has problem!"; Else, return "No problem!"
Too many things you should return, this is the last one: If what is not an array, return "What?" ;-)
All the words mentioned above should ignore the case.
Some Examples
what=[]
talkingAbout(what) === "Nothing here!"

what=["ok"]
talkingAbout(what) === "Everything is OK!"

what=["ok","Ok","OK","oK"]
talkingAbout(what) === "Everything is OK!"

what=["nice","you"]
talkingAbout(what) === "Nice to meet you!"

what=["Waiting","waiting","Girl","waiting","waiting"]
talkingAbout(what) === "Waiting for a girl!"

what=["fox","Fine","for"]
talkingAbout(what) === "Array is full!"

what=["child","child","man","woman","children"]
talkingAbout(what) === "We have 2 children!"

what=["myjinxin"]
talkingAbout(what) === "Really handsome!"

what=["problem","others"]
talkingAbout(what) === "Array has problem!"

//No problem!

what=["ok","ok","not ok"]
talkingAbout(what) === "No problem!" //Something is not ok

what=["nice","to","meet","you"]
talkingAbout(what) === "No problem!"  // "nice" doesn't meet "you"

what=["Waiting","waiting","Girl","waiting"]
talkingAbout(what) === "No problem!" //Your waiting too short

what=["Waiting","waiting","Girl","waiting","waiting","waiting"]
talkingAbout(what) === "No problem!" //Your waiting too long

what=["Waiting","waiting","waiting","waiting","waiting"]
talkingAbout(what) === "No problem!" //Where is the girl?

what=["fox","Fine","for","not f"]
talkingAbout(what) === "No problem!" //array isn't "full"

what=["child1","child2","child3","children"]
talkingAbout(what) === "No problem!" //only "child" is child

what=["mxyzjinxin","myjinxin2015","smile67"]
talkingAbout(what) === "No problem!" //only "myjinxin" is handsome ;-)

what=["problem1","problem2","not a problem"]
talkingAbout(what) === "No problem!" //only "problem" is problem

//What?
what=null
talkingAbout(what) === "What?"

what={"what":"what"}
talkingAbout(what) === "What?"

what="what"
talkingAbout(what) === "What?"

what=/what/
talkingAbout(what) === "What?"

what="what".charCodeAt()
talkingAbout(what) === "What?"
*/
function talkingAbout(what){
  if (!Array.isArray(what)) return "What?"
  what=what.map(v=>v.toLowerCase())
  if (what.length===0) return "Nothing here!"
  if (what.every(v=>v==='ok')) return "Everything is OK!"
  for (let i=0;i<what.length-1;i++){
    if (what[i]==='nice'&&what[i+1]==='you') return "Nice to meet you!"
    if (what[i]==='you'&&what[i+1]==='nice') return "Nice to meet you!"
  }
  let waiting = 0;
  let girl = 0;
  what.map(v=>v==='waiting'?waiting++:v==='girl'?girl++:v)
  if (waiting===4&&girl===1) return 'Waiting for a girl!'
  if (what.every(v=>v[0]==='f')) return "Array is full!"
  let child=0
  what.map(v=>v==='child'?child++:v)
  if (child>0) return `We have ${child} children!`
  if (what.some(v=>v==="myjinxin")) return "Really handsome!"
  if (what.some(v=>v==="problem")) return "Array has problem!"
  else return "No problem!"
}
