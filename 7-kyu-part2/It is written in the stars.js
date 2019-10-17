/*
Description:
Were you ever interested in the phenomena of astrology, star signs, tarot, voodoo ? (ok not voodoo that's too spooky)...
Task:
Your job for today is to finish the starSign function by finding the astrological sign, given the birth details as a Date object.
Start and end dates for zodiac signs vary on different resources so we will use this table to get consistent results:

Aquarius ------ 21 January - 19 February
Pisces --------- 20 February - 20 March
Aries ---------- 21 March - 20 April
Taurus -------- 21 April - 21 May
Gemini -------- 22 May - 21 June
Cancer -------- 22 June - 22 July
Leo ------------- 23 July - 23 August
Virgo ----------- 24 August - 23 September
Libra ----------- 24 September - 23 October
Scorpio -------- 24 October - 22 November
Sagittarius ---- 23 November - 21 December
Capricorn ----- 22 December - 20 January

Test info: 100 random tests (dates range from January 1st 1940 until now)
*/
function starSign(date) {
  const m = date.getMonth()+1
  const d = date.getDate()
  if (m===1&&d>=21||m===2&&d<=19) return 'Aquarius'
  if (m===2&&d>=20||m===3&&d<=20) return 'Pisces'
  if (m===3&&d>=21||m===4&&d<=20) return 'Aries'
  if (m===4&&d>=21||m===5&&d<=21) return 'Taurus'
  if (m===5&&d>=22||m===6&&d<=21) return 'Gemini'
  if (m===6&&d>=22||m===7&&d<=22) return 'Cancer'
  if (m===7&&d>=23||m===8&&d<=23) return 'Leo'
  if (m===8&&d>=24||m===9&&d<=23) return 'Virgo'
  if (m===9&&d>=24||m===10&&d<=23) return 'Libra'
  if (m===10&&d>=24||m===11&&d<=22) return 'Scorpio'
  if (m===11&&d>=23||m===12&&d<=21) return 'Sagittarius'
  if (m===12&&d>=22||m===1&&d<=20) return 'Capricorn'
}
