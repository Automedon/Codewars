/*
Description:
Zebulan has worked hard to write all his python code in strict compliance to PEP8 rules. In this kata, you are a mischevious hacker that has set out to sabatoge all his good code.

Your job is to take PEP8 compatible function names and convert them to camelCase. For example:

zebulansNightmare('camel_case') == 'camelCase'
zebulansNightmare('zebulans_nightmare') == 'zebulansNightmare'
zebulansNightmare('get_string') == 'getString'
zebulansNightmare('convert_to_uppercase') == 'convertToUppercase'
zebulansNightmare('main') == 'main'
*/

function zebulansNightmare(functionName) {
  return (
    functionName.toLowerCase()[0] +
    functionName
      .split("_")
      .map(v => v.toUpperCase().slice(0, 1) + v.toLowerCase().slice(1))
      .join("")
      .slice(1)
  );
}
