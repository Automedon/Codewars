/*
Description:
We have a broken message machine that introduces noise to our incoming messages. We know that our messages can't be written using %$&/#·@|º\ª and white characters (like spaces or tabs). Unfortunately our machine introduces noise, which means that our message arrives with characters like: %$&/#·@|º\ª within our original message.

Your mission is to write a function which removes this noise from the message.

Notice that noise can only be
%$&/#·@|º\ª
charaters, other characteres are not considered noise

For example:

removeNoise("h%e&·%$·llo w&%or&$l·$%d")
// returns hello world
*/

function removeNoise(str) {
  return str.replace(/[%$&/#·@|º\\ª]/gi, "");
}
