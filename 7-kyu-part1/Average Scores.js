function average(scores) {
    return Math.round(scores.reduce((first,next)=>(first+next),0)/scores.length)
}
