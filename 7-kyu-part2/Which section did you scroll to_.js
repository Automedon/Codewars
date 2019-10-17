/*
Description:
Your website is divided vertically in sections, each can be of different size (height). You need to establish the section index (starting at 0) you are at, given the scrollY and sizes of all sections. Sections start with 0, so if first section is 200 high, it takes 0-199 "pixels" and second starts at 200

Example:
getSectionIdFromScroll(300,[300,200,400,600,100])

will output number 1 as it's the second section.

getSectionIdFromScroll(1600,[300,200,400,600,100])

will output number -1 as it's past last section.

Given the scrollY integer (always positive) and an array of positive integers (with at least one element) calculate the index (starting at 0) or -1 if scrollY falls beyond last section (indication of an error)
*/
function getSectionIdFromScroll(scrollY,sizes){
     let sum=0
     for (let i=0;i<sizes.length;i++){
       if (sum-1>=scrollY) return i-1
       else sum+=sizes[i]
       if (sum-1>=scrollY) return i
     }
     return -1
}
