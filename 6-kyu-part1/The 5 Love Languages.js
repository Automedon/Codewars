/*
Description:
According to Gary Chapman, marriage counselor and the author of "The Five Love Languages" books, there are five major ways to express our love towards someone: words of affirmation, quality time, gifts, acts of service, and physical touch. These are called the love languages. Usually, everyone has a main language: the one that he/she "speaks" and understands best. In a relationship, it's import to find your partner's main love language, so that you get along better with each other.

Your task
Unfortunately, your relationship got worse lately... After a long discussion with your partner, you agreed to give yourself a few weeks to improve it, otherwise you split up...

You will be given a partner instance, and n weeks. The partner has a .response method, and the responses may be: "positive" or "neutral". You can try to get a response once a day, thus you have n * 7 tries in total to find the main love language of your partner!

The love languages are: "words", "acts", "gifts", "time", "touch" (available predefined as LOVE_LANGUAGES)

Note: your partner may (and will) sometimes give a positive response to any love language ("false positive"), but the main one has a much higher possibility. On the other hand, you may get a neutral response even for the main language, but with a low possibility ("false negative").

There will be 50 tests. Although it's difficult to fail, in case you get unlucky, just run the tests again. After all, a few weeks may not be enough...

Examples
main love language: "words"

partner.response("words") ==> "positive"
partner.response("acts")  ==> "neutral"
partner.response("words") ==> "positive"
partner.response("time")  ==> "neutral"
partner.response("acts")  ==> "positive"    # false positive
partner.response("gifts") ==> "neutral"
partner.response("words") ==> "neutral"     # false negative
etc.
Happy coding, and DO try this at home! :-)
*/
function loveLanguage(partner,weeks) {
  const arr = []
  for (let i=0;i<=weeks;i++){
    partner.response(LOVE_LANGUAGES[0])==='positive'&& arr.push(LOVE_LANGUAGES[0])
    partner.response(LOVE_LANGUAGES[1])==='positive'&& arr.push(LOVE_LANGUAGES[1])
    partner.response(LOVE_LANGUAGES[2])==='positive'&& arr.push(LOVE_LANGUAGES[2])
    partner.response(LOVE_LANGUAGES[3])==='positive'&& arr.push(LOVE_LANGUAGES[3])
    partner.response(LOVE_LANGUAGES[4])==='positive'&& arr.push(LOVE_LANGUAGES[4])
  }
  const obj = arr.reduce((a,b)=>(a[b]=a[b]?a[b]+1:1,a),{})
  let word = ''
  let max = Math.max(...Object.values(obj))
  for (let i in obj){
    if (obj[i]===max) return i
  }
}
