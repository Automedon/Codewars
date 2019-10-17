function getSlope(p1, p2) {
  if (p2[0]==p1[0]&&p2[1]==p1[1]||p2[0]==p1[0]){return null}
  return (p2[1] - p1[1]) / (p2[0] - p1[0])
}
