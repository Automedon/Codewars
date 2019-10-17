/*
Description:
We're given some typical *nix commands and want to parse them into their arguments. We'll ignore quoted arguments and other special characters, although if any of the characters &, ;, >, | show up, those signify that a new command has started (so we can ignore any arguments after it).

##Examples

ls -R /

 ["ls", "-R", "/"]
   cat   /tmp/data.txt | less

  ["cat", "/tmp/data.txt"]
(note that we ignored the extra leading spaces on that last example)
*/
function args(cmd) {
  return cmd.replace(/[&;>|].*$/,'').trim().split(' ');
}
