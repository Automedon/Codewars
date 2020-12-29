/*
Description:
Your friend has recently started using Codewars to learn more advanced coding. They have just created their first kata, and they want to write a proper description for it, using codeblocks, images and hyperlinks.

However, they are struggling to understand how to use Markdown formatting properly, so they decide to ask for your help, by having you write a program that will generate some of the syntaxes for you.

Markdown syntaxes
links: [displayed text](url address)
images: ![replacement message](url address)
codeblocks: we'll use multiline codeblocks like the following
```language
code
```
Task
Your task is to create a function called generate_markdowns or generateMarkdowns. It will take three parameters:

markdown - The type of markdown to return. It can be "link", "img" or "code".
text - The text,message or code to display
url_or_language or urlOrLanguage - gives either the url address to use or the name of the language for the codeblock.
Examples
generate_markdowns('link','Github Codewars','https://github.com/codewars')
# returns: "[Github Codewars](https://github.com/codewars)"
When used in the description: Github Codewars


*/
function generateMarkdowns(markdown,text,urlOrLanguage) {
  if (markdown==='link'){
    return `[${text}](${urlOrLanguage})`
  }
  if (markdown==='img'){
    return `![${text}](${urlOrLanguage})`
  }
  return `\`\`\`${urlOrLanguage}\n${text}\n\`\`\``
};
