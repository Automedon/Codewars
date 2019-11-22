/*
Description:
Mary wrote a recipe book and is about to publish it, but because of a new European law, she needs to update and include all measures in grams.

Given all the measures in tablespoon (tbsp) and in teaspoon (tsp), considering 1 tbsp = 15g and 1 tsp = 5g, append to the end of the measurement the biggest equivalent integer (rounding up).

Examples
"2 tbsp of butter"    -->  "2 tbsp (30g) of butter"

"1/2 tbsp of oregano" -->  "1/2 tbsp (8g) of oregano"

"1/2 tsp of salt"     -->  "1/2 tbsp (3g) of salt"

"Add to the mixing bowl and coat well with 1 tbsp of olive oil & 1/2 tbsp of dried dill" -->
"Add to the mixing bowl and coat well with 1 tbsp (15g) of olive oil & 1/2 tbsp (8g) of dried dill"
*/
function convertRecipe(recipe){
  return recipe.replace(/(\d*?\/?\d+ tb?sp)/g,v=>{
    let a = v.split` `
    if (a[1]==='tbsp'){
      if (a[0]==a[0]*1){
        return a[0]+' '+a[1]+` (${a[0]*15}g)`
      } else {
        let n = a[0].split`/`
        return a[0]+' '+a[1]+` (${Math.ceil((n[0]/n[1])*15)}g)`
      }
    } else if (a[1]==='tsp') {
          if (a[0]==a[0]*1){
        return a[0]+' '+a[1]+` (${a[0]*5}g)`
      } else {
        let n = a[0].split`/`
        return a[0]+' '+a[1]+` (${Math.ceil((n[0]/n[1])*5)}g)`
      }
    }
  })
}
