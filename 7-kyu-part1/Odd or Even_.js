function oddOrEven(array) {
   return array.reduce((start,next)=>start+next,0)%2==0?`${'even'}`:`${'odd'}`
}
