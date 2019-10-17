function wordSearch(query, seq){
 let a= seq.filter((element)=> new RegExp(query, 'i').test(element))
  if (a.length==0)return ['Empty'];
  return a
  
}
