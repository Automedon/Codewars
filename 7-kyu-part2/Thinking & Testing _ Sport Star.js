/*
Description:
No Story

No Description

Only by Thinking and Testing

Look at result of testcase, guess the code!
*/
function testit(act, s) {
  return s
    .split("")
    .map((v, i) =>
      v === "_" && act[i] === "jump"
        ? (v = "x")
        : v === "|" && act[i] === "run"
        ? (v = "/")
        : v
    )
    .join(``);
}
