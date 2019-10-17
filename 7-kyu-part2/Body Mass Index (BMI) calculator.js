/*
Description:
The body mass index (BMI) or Quetelet index is a value derived from the mass (weight) and height of an individual.
https://en.wikipedia.org/wiki/Body_mass_index

A function to work out the body mass index and associated BMI category.

w = weight in kg h = height in metres

BMI = w/h/h

Very severely underweight <=15

Severely underweight <=16

Underweight <=18.5

Normal (healthy weight) <=25

Overweight <=30

Moderately obese <=35

Severely obese <=40

Very severely obese >40
*/
function bmi(w, h) {
  let b = w/h/h
  if (b>40) return "Very severely obese"
   if (b<=15) return "Very severely underweight"
    if (b<=16) return "Severely underweight"
     if (b<=18.5) return "Underweight"
      if (b<=25) return "Normal (healthy weight)"
       if (b<=30) return "Overweight"
       if (b<=35) return "Moderately obese"
       if (b<=40) return "Severely obese"
}
