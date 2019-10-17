function getNiceNames(people){
  return people.filter(p => p.wasNice).map(p => p.name);
}

function getNaughtyNames(people){
   return people.filter(p => !p.wasNice).map(p => p.name);
}
