function sortList (sortBy, list) {
  return [...list].sort((a,b)=>b[sortBy]-a[sortBy])
}
