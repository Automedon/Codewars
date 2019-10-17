function bandNameGenerator(str) {
if (str.slice(0,1)!=str.slice(-1)) return 'The '+str.slice(0,1).toUpperCase()+str.slice(1)
return str.slice(0,1).toUpperCase()+str.slice(1)+str.slice(1)
}
