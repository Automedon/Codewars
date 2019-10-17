/*
Description:
Most of us love Game of Thrones, but whether you have watched it or not, you can do the kata. Let's help Jon Snow meet his original parents.

Write a function that will receive 2 arguments: dad and mom. If both are correct it will return "Jon Snow you deserve the throne"; otherwise it will return "You know nothing, Jon Snow".

Note: Jon Snow's dad is Rhaegar Targaryen and his mother is Lyanna Stark.

Example:

jonSnowParents("Ned Stark", "Cersei Lannister") // return "You know nothing, Jon Snow"

jonSnowParents("Rhaegar Targaryen", "Lyanna Stark") // return "Jon Snow you deserve the throne"

jonSnowParents("Robert Baratheon", "Catelyn Stark") // return "You know nothing, Jon Snow"

Have fun !!
*/
function jonSnowParents(dad, mom){
  if (dad==="Rhaegar Targaryen"&&mom==="Lyanna Stark") return "Jon Snow you deserve the throne"
  return "You know nothing, Jon Snow"
}
