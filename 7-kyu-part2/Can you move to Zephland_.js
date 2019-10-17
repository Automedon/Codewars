/*
Description:
Good news! Zephland, a high tech modern country, is accepting applications to become Zephlish resident. The immigration office will evaluate an applicant from several aspects:

• test score of the Zephlish language: range from 0-100, 3% of the score goes to the overall score;

• test score of Math: range from 0-100, 3% of the score goes to the overall score;

• criminal history: deduct 3 points if one has committed any crime;

• investment brought to Zephland: add 2 point if applicant brings over 1 million USD cash into the country;

• whether you are a programmer: add 2 points if you are a programmer;

Please write a function to check the overall score of an applicant. Return "Welcome to Zephland!", if score is over 6; "Sorry, your application is rejected." if score is 6 or under.
*/
function immigration(a) {
  let score=0;
  if (a.investment.slice(0,-3)*1>=1000000) score+=2
  if (a.crime) score-=3
  if (a.programmer) score+=2
  score+=a.Math*0.03
  score+=a.Zephlish*0.03
  return score>=6?"Welcome to Zephland!":'Sorry, your application is rejected.'
}
