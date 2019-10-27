/*
function clockDegree(s){
  let n1=0;
  let n2=0;
  let str=s.split(':')
  if (str[0]*1>23||str[1]*1>59||str[0]*1<0||str[1]*1<0) return "Check your time !"
  if (str[0]==='00'&&str[1]==='00') return "360:360"
  if (str[1]==='00') n2=360;
  else  n2=str[1]*1*6
  if (str[0]*1>12) str[0]=str[0]*1-12
  n1=str[0]*1*30
  if (isNaN(n1)||isNaN(n2)) return "Check your time !"
  return `${n1}:${n2}`
}
*/
function clockDegree(s) {
  let n1 = 0;
  let n2 = 0;
  let n3 = false;
  let str = s.split(":");
  if (str[0] * 1 > 23 || str[1] * 1 > 59 || str[0] * 1 < 0 || str[1] * 1 < 0)
    return "Check your time !";
  if (str[0] === "00") n3 = 360;
  if (str[1] === "00") n2 = 360;
  else n2 = str[1] * 1 * 6;
  if (str[0] * 1 > 12) str[0] = str[0] * 1 - 12;
  n1 = str[0] * 1 * 30;
  if (isNaN(n1) || isNaN(n2)) return "Check your time !";
  return `${n3 ? n3 : n1}:${n2}`;
}
