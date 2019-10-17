function compare(s1, s2) {
  if (/^\D+$/gi.test(s1) && /^\D+$/gi.test(s2))
    return s1.split('').map(n => n.toUpperCase().charCodeAt()).reduce((a, b) => a + b) === 
           s2.split('').map(n => n.toUpperCase().charCodeAt()).reduce((a, b) => a + b);
  return true;
}
