function timeCorrect(str) {
  const date = new Date(); 
  if (str == '') return str;
  if (!/^\d{2}\:\d{2}\:\d{2}$/g.test(str)) return null;
  date.setUTCHours(...str.split(':'));
  return date.toLocaleTimeString('en', {hour12: false});
}
