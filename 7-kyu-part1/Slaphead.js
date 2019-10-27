/*
Description:
Being a bald man myself, I know the feeling of needing to keep it clean shaven. Nothing worse that a stray hair waving in the wind.

You will be given a string(x). Clean shaved head is shown as "-" and stray hairs are shown as "/". Your task is to check the head for stray hairs and get rid of them.

You should return the original string, but with any stray hairs removed. Keep count of them though, as there is a second element you need to return:

0 hairs --> "Clean!"
1 hair --> "Unicorn!"
2 hairs --> "Homer!"
3-5 hairs --> "Careless!"
>5 hairs --> "Hobo!"

So for this head: "------/------" you should return:

["-------------", "Unicorn!"]
*/

function bald(x) {
  let count = x.split("/").length - 1;
  const z = Array(x.length)
    .fill("-")
    .join("");
  if (count < 1) return [z, "Clean!"];
  if (count < 2) return [z, "Unicorn!"];
  if (count < 3) return [z, "Homer!"];
  if (count < 6) return [z, "Careless!"];
  return [z, "Hobo!"];
}
