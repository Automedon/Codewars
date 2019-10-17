function myParseInt(str) {
if (str.trim().match(/[\D]/)) return 'NaN'
return parseInt(str)
}
