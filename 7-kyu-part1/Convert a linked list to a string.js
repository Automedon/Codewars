function stringify(list) {
  return list === null ? "null" : `${list.data} -> ${stringify(list.next)}`; 
}
