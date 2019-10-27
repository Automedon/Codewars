/*
Description:
You have a set of books. Some of these books have errors, and an error notice must be attached to them. Write a function that will handle this task.

Example book:

{ title: "Adventures of Cthulhu" }
A book with errors:

{ title: "A Buggy Book", errors: true }
Corrected book:

{ title: "A Buggy Book", errors: true, errorNotice: true }
Ramda functions to be used:

map
when
propEq
merge
__
The Ramda library is preloaded and accessible under R (e.g. R.map).
*/
const issueErrorNotice = books => {
  return books.map(v => (v.errors === true ? { ...v, errorNotice: true } : v));
};
