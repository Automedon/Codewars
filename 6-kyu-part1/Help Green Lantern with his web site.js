/*
Description:
The Story
Green Lantern's long hours of study and practice with his ring have really paid off -- his skills, focus, and control have improved so much that now he can even use his ring to update and redesign his web site. Earlier today he was focusing his will and a beam from his ring upon the Justice League web server, while intensely brainstorming and visualizing in minute detail different looks and ideas for his web site, and when he finished and reloaded his home page, he was absolutely thrilled to see that among other things it now displayed

In brightest day, in blackest night,
There's nothing cooler than my site!
in his favorite font in very large blinking green letters.

The problem is, Green Lantern's ring has no power over anything yellow, so if he's experimenting with his web site and accidentally changes some text or background color to yellow, he will no longer be able to make any changes to those parts of the content or presentation (because he doesn't actually know any HTML, CSS, programming languages, frameworks, etc.) until he gets a more knowledgable friend to edit the code for him.

Your Mission
You can help Green Lantern by writing a function that will replace any color property values that are too yellow with shades of green or blue-green. Presumably at a later time the two of you will be doing some testing to find out at exactly which RGB values yellow stops being yellow and starts being off-white, orange, brown, etc. as far as his ring is concerned, but here's the plan to get version 1.0 up and running as soon as possible:

Your function will receive either an HTML color name or a six-digit hex color code. (You're not going to bother with other types of color codes just now because you don't think they will come up.) If the color is too yellow, your function needs to return a green or blue-green shade instead, but if it is not too yellow, it needs to return the original color name or hex color code unchanged.

HTML Color Names
(If don't know what HTML color names are, take a look at this HTML colors names reference.)

For HMTL color names, you are going to start out trying a pretty strict definition of yellow, replacing any of the following colors as specified:

Gold => ForestGreen
Khaki => LimeGreen
LemonChiffon => PaleGreen
LightGoldenRodYellow => SpringGreen
LightYellow => MintCream
PaleGoldenRod => LightGreen
Yellow => Lime
HTML color names are case-insensitive, so your function will need to be able to identify the above yellow shades regardless of the cases used, but should output the green shades as capitalized above.

Some examples:

"lemonchiffon"    "PaleGreen"
"GOLD"            "ForestGreen"
"pAlEgOlDeNrOd"   "LightGreen"
"BlueViolet"      "BlueViolet"
Hex Color Codes
(If you don't know what six-digit hex color codes are, take a look at this Wikipedia description. Basically the six digits are made up of three two-digit numbers in base 16, known as hexidecimal or hex, from 00 to FF (equivalent to 255 in base 10, also known as decimal), with the first two-digit number specifying the color's red value, the second the green value, and the third blue.)

With six-digit color hex codes, you are going to start out going really overboard, interpreting as "yellow" any hex code where the red (R) value and the green (G) value are each greater than the blue (B) value. When you find one of these "yellow" hex codes, your function will take the three hex values and rearrange them that the largest goes to G, the middle goes to B, and the smallest to R.

For example, with the six-digit hex color code #FFD700, which has an R value of hex FF (decimal 255), a G value of hex D7 (decimal 215), and a B value of hex 00 (decimal 0), as the R and G values are each larger than the B value, you would return it as #00FFD7 -- the FF reassigned to G, the D7 to B, and the 00 to R.

Hex color codes are also case-insensitive, but your function should output them in the same case they were received in, just for consistency with whatever style is being used.

Some examples:

"#000000"   "#000000"
"#b8860b"   "#0bb886"
"#8FBC8F"   "#8FBC8F"
"#C71585"   "#C71585"
*/

function yellowBeGone(colorNameOrCode){
  let dict = {
    gold:"ForestGreen",
    khaki:'LimeGreen',
lemonchiffon : 'PaleGreen',
lightgoldenrodyellow : 'SpringGreen', 
lightyellow :'MintCream',
palegoldenrod :'LightGreen',
yellow :'Lime'
  }
  if (dict[colorNameOrCode.toLowerCase()]) return dict[colorNameOrCode.toLowerCase()]
  if (colorNameOrCode[0]==='#'){
    const r = parseInt(colorNameOrCode.slice(1,3),16)
    const g = parseInt(colorNameOrCode.slice(3,5),16)
    const b = parseInt(colorNameOrCode.slice(5,7),16)
    if (r>b&&g>b){
      if (r>g){
        return '#'+colorNameOrCode.slice(5,7)+colorNameOrCode.slice(1,3)+colorNameOrCode.slice(3,5)
      } 
      return '#'+colorNameOrCode.slice(5,7)+colorNameOrCode.slice(3,5)+colorNameOrCode.slice(1,3)  
      } 
    return colorNameOrCode
  }
    return colorNameOrCode;
}
