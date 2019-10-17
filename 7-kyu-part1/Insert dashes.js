function insertDash(num) {
   return num.toString().replace(/[13579](?=[13579])/g, "$&-");
}
