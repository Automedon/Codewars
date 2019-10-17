/*
Once a keen blogger has finished writing a post in Word, she then has to crawl through it and edit out some of the punctuation marks, so that she can upload his new post with correct spacing and symbols. You need to create a Regexp that will help him with this task.

She will enter her post one paragraph at a time, so each non-empty string given to the function must be returned with <p> preceding it and a </p> at the end of it.

Only the following punctuation marks must also be ammended:

Punctuation	Char	Encoded
dash	
–
&ndash;
apostrophe	
’
&rsquo;
ampercant	
&
&amp;
open quotation marks	
“
&ldquo;
close quotation marks	
”
&rdquo;
Important note
In order to pass the tests, you will need to copy the exact punctuation mark and its corresponding html code from the following site: https://www.utexas.edu/learn/html/spchar.html

My punctuation marks and corresponding html codes have been formatted by codewars.

Example:

htmlify("Jess says “Frank & Joe aren’t the best bloggers”");
Returns:

<p>Jess says & ldquo;Frank & amp; Joe aren& rsquo;t the best bloggers& rdquo;</p>
Additional note
If you want to actually use this function you can adapt it to suit your preferred word processor's punctuation marks into it.


*/
function htmlify(string) {
  let dict = {
    "–": "&ndash;",
    "’": "&rsquo;",
    "&": "&amp;",
    "“": "&ldquo;",
    "”": "&rdquo;"
  };
  return `<p>${string.split(``).map(v => (dict.hasOwnProperty(v) ? dict[v] : v))
    .join``}</p>`;
}
