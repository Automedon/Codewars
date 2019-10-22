/*
Description:
##Overview

Write a helper function that takes in a Time object and converts it to a more human-readable format. You need only go up to '_ weeks ago'.

toPretty(0) => "just now"

toPretty(40000) => "11 hours ago"
##Specifics

The output will be an amount of time, t, included in one of the following phrases: "just now", "[t] seconds ago", "[t] minutes ago", "[t] hours ago", "[t] days ago", "[t] weeks ago".
You will have to handle the singular cases. That is, when t = 1, the phrasing will be one of "a second ago", "a minute ago", "an hour ago", "a day ago", "a week ago".
The amount of time is always rounded down to the nearest integer. For example, if the amount of time is actually 11.73 hours ago, the return value will be "11 hours ago".
Only times in the past will be given, with the range "just now" to "52 weeks ago"
*/
function toPretty(seconds){
  if (seconds===0) return 'just now'
  let sec = 1;
  let min = 60;
  let hour = min*60;
  let days = hour*24
  let week = days*7
  let s=0,m=0,h=0,d=0,w=0;
  while (seconds>=week){
    seconds-=week
    w++
  }
  if (w>0) return w===1?'a week ago':`${w} weeks ago`
    while (seconds>=days){
    seconds-=days
    d++
  }
    if (d>0) return d===1?'a day ago':`${d} days ago`
    while (seconds>=hour){
    seconds-=hour
    h++
  }
    if (h>0) return h===1?'an hour ago':`${h} hours ago`
    while (seconds>=min){
    seconds-=min
    m++
  }
    if (m>0) return m===1?'a minute ago':`${m} minutes ago`
    while (seconds>=sec){
    seconds-=sec
    s++
  }
    if (s>0) return s===1?'a second ago':`${s} seconds ago`
}
