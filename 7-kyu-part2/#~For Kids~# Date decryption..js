/*
Description:
#~For Kids Challenges~#
This kata is the reverse of my another: See Here!
Here your task is to write a function that takes an encrypted date in format(ASCII CODE = AC) ACAC-AC-AC(String) and return it in an deciphered format (normal date in YYYY-mm-dd), to do this you will break the string of encrypted date, for each character of date(except '-') translate it to ASCII code subtract 50 of it and return the result translated according to ASCII table with the '-' between it.
Example: "FC-3-G" ->(ASCII Translation)-> You will get 70 67 - 51 - 71 (for each of then -50)-> 20 17 - 1 - 21 -> "2017-01-21"

"Et->-9" -> "1966-12-07"
Have fun!
*/
function translateDate(dateStr) {
  return dateStr.replace(/[^-]/g, v =>
    (v.charCodeAt() - 50).toString().padStart(2, 0)
  );
}
