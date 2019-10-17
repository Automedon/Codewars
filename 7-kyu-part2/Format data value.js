/*
Description:
You get input data as a number (of megabytes). Your task is to convert it to the string adding 'MB' or 'GB' or 'TB' correctly.

Find the details below:

900 -> '900MB'
1900 -> '1GB 900MB'
568200 -> '568GB 200MB'
1000000 -> '1TB'
1234567 -> '1TB 234GB 567MB'
P.S. 0 <= input number < 1000000000
*/
function formatDataValue(data) {
  if (data === 0) return "0MB";
  let tb = 0;
  let gb = 0;
  let mb = 0;
  while (data >= 1000000) {
    tb++;
    data -= 1000000;
  }
  while (data >= 1000) {
    gb++;
    data -= 1000;
  }
  mb = data;
  return `${tb ? tb + "TB" : ""} ${gb ? gb + "GB" : ""} ${
    mb ? mb + "MB" : ""
  }`.trim();
}
