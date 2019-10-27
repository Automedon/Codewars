/*
Description:
Mrs Miggins is one fussy lady! There are certain words that drive her MAD.

These are: dog, rain, children, broccoli, pension.

If there’s one thing Mrs Miggins loves, it’s cats. She LOVES them. Rumour has it she owns over 100 cats now.

I need your help to prevent Mrs Miggins for getting angry by returning a string with ‘cat’ replacing the words she hates.
*/
function mrsMiggins(str) {
  return str.replace(/dog|rain|children|broccoli|pension/gi,'cat')
}
