function mainDiagonalProduct(mat){
  return mat.reduce((accum,current,index)=> accum*current[index],1)
}
