/*
Description:
Your task is to get Zodiac Sign using input day and month.

For exapmle:

getZodiacSign(1,5) => 'Taurus'
getZodiacSign(10,10) => 'Libra'
Correct answers are (preloaded):

const signs = ['Capricorn', 'Aquarius', 'Pisces', 'Aries', 'Taurus', 'Gemini', 'Cancer', 'Leo', 'Virgo', 'Libra', 'Scorpio', 'Sagittarius']
P.S. Each argument is correct integer number.

WESTERN ASTROLOGY STAR SIGN DATES

Aries (March 21-April 19)
Taurus (April 20-May 20)
Gemini (May 21-June 20)
Cancer (June 21-July 22)
Leo (July 23-August 22)
Virgo (August 23-September 22)
Libra (September 23-October 22)
Scorpio (October 23-November 21)
Sagittarius (November 22-December 21)
Capricorn (December 22-January 19)
Aquarius (January 20 to February 18)
Pisces (February 19 to March 20)
*/
const getZodiacSign = (day, month) => {
  switch (month) {
    case 1:
      return day > 19 ? "Aquarius" : "Capricorn";
      break;
    case 2:
      return day > 18 ? "Pisces" : "Aquarius";
      break;
    case 3:
      return day > 20 ? "Aries" : "Pisces";
      break;
    case 4:
      return day > 19 ? "Taurus" : "Aries";
      break;
    case 5:
      return day > 20 ? "Gemini" : "Taurus";
      break;
    case 6:
      return day > 20 ? "Cancer" : "Gemini";
      break;
    case 7:
      return day > 22 ? "Leo" : "Cancer";
      break;
    case 8:
      return day > 22 ? "Virgo" : "Leo";
      break;
    case 9:
      return day > 22 ? "Libra" : "Virgo";
      break;
    case 10:
      return day > 22 ? "Scorpio" : "Libra";
      break;
    case 11:
      return day > 21 ? "Sagittarius" : "Scorpio";
      break;
    case 12:
      return day > 21 ? "Capricorn" : "Sagittarius";
      break;
  }
};
