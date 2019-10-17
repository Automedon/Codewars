/*
Description:
My granny has several cats. Most of them are wicked, some are normal and some of them are the likes of ^(~_~)^ aka holy cats. So my granny asked me to separate the holy cats from the rest of the crew. But I don't know how to do it. Can you help me separate the holy cats from the rest? In case there are no holy cats in the group, return an empty array.
*/
function holycats(input) {
  return input.filter(v => v != "wicked").filter(v => v != "normal");
}
