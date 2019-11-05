/*
Description:
SMS messages are limited to 160 characters. It tends to be irritating, especially when freshly written message is 164 characters long. Your task is to shorten the message to 160 characters, starting from end, by replacing spaces with camelCase, as much as necessary.

For example:

Original message (169 chars):

No one expects the Spanish Inquisition! Our chief weapon is surprise, fear and surprise; two chief weapons, fear, surprise, and ruthless efficiency! And that will be it.

Shortened message (160 chars):

No one expects the Spanish Inquisition! Our chief weapon is surprise, fear and surprise; two chief weapons, fear,Surprise,AndRuthlessEfficiency!AndThatWillBeIt.
*/
function shortener(message) {
  while (message.length > 160 && message.includes(' ')) {
    message = message.replace(/\s(\S)(\S*)$/, (_, c, r) => c.toUpperCase() + r);
  }
  return message;
}
