/*
Description:
Rectangles

Write a function - called `rectangle` - that creates a rectangle using a specific character, with a specific width and height.

Newlines should be used for the height: `\n`

Your output cannot end with a newline.

Example

```javascript rectangle("*",5,3); /* => ***** ***** ***** */ ```
*/
function rectangle(char, width, height) {
    let arr = [];
    for (let i=0;i<height;i++){
      arr.push(`${char}`.repeat(width))
    }
    return arr.join`\n`
}
