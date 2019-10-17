/*
Description:
I highly recommend listening Vivaldi's Four Seasons as an inspiration to solve this Kata :)

In the UK, winter begins on 21 December and ends on 20 March. Spring begins on 21 March and ends on 20 June. Summer begins on 21 June and ends on 20 September. Autumn begins on 21 September and ends on 20 December.

Given a date day from 1 (January 1st) to 365 (December 31th) your task is to return the season of the year that corresponds to that day. If the number given is greater than 365, return "The year flew by!".

Note: We are not considering leap years.
*/
function fourSeasons(d){
  if (d>365) return "The year flew by!"
  if (d>355) return 'Winter Season'
  if (d<80) return 'Winter Season'
  if (d<173) return 'Spring Season'
  if (d<260) return 'Summer Season'
  return 'Autumn Season'
}
