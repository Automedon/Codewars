/*
Description:
When a warrior wants to talk with another one about piece or war he uses a smartphone. In one distinct country warriors who spent all time in training kata not always have enough money. So if they call some number they want to know which operator serves this number.

Write a function which accepts number and return name of operator or string "no info", if operator can't be defined. number always looks like 8yyyxxxxxxx, where yyy corresponds to operator.

Here is short list of operators:

039 xxx xx xx - Golden Telecom
050 xxx xx xx - MTS
063 xxx xx xx - Life:)
066 xxx xx xx - MTS
067 xxx xx xx - Kyivstar
068 xxx xx xx - Beeline
093 xxx xx xx - Life:)
095 xxx xx xx - MTS
096 xxx xx xx - Kyivstar
097 xxx xx xx - Kyivstar
098 xxx xx xx - Kyivstar
099 xxx xx xx - MTS Test [Just return "MTS"]
*/
function detectOperator(a) {
  const number = ("" + a).slice(1, 4);
  if (number === "039") return "Golden Telecom";
  if (number === "050") return "MTS";
  if (number === "063") return "Life:)";
  if (number === "066") return "MTS";
  if (number === "067") return "Kyivstar";
  if (number === "068") return "Beeline";
  if (number === "093") return "Life:)";
  if (number === "095") return "MTS";
  if (number === "096") return "Kyivstar";
  if (number === "097") return "Kyivstar";
  if (number === "098") return "Kyivstar";
  if (number === "099") return "MTS";
  return "no info";
}
