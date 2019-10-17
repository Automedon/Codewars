/*
In a moment of daydreaming about coding in the office, you realise that your number one bootcamp option (available through the sabbatical you requested in kata 6), require a pre-application expression of interest.

You decide to quickly ping this out. Thing is, depending on the device you use, the link to achieve this does not always work! Nightmare!

The correct link looks like this: 

'...expressinterest....'


Given a string (x), and details of the device you are using (device), decide if the link works for you. The rules are as follows: 
Test x to make sure it is the correct link. To be correct the link simply needs to be the same length as that provided above (22 characters) (links look different on different browsers after all).

Then, work as follows:

Device:

iPhone: 
link correct? 
return 'Damn'
link incorrect? 
return 'Damn'.

Desktop: 
link correct? 
return 'Sent' 
link incorrect? 
return 'Sent'.

Laptop: 
link correct? 
return 'Sent' 
link incorrect? 
return 'Damn'.

Macbook: 
link correct? 
return 'Damn' 
link incorrect? 
return 'Sent'.
*/
function express(x, d) {
  let l = x.length === 22;
  let Laptop = d === "Laptop";
  let Desktop = d === "Desktop";
  let iPhone = d === "iPhone";
  let Macbook = d === "Macbook";
  if (l && Laptop) return "Sent";
  if (!l && Laptop) return "Damn";
  if (l && Desktop) return "Sent";
  if (!l && Desktop) return "Sent";
  if (l && iPhone) return "Damn";
  if (!l && iPhone) return "Damn";
  if (l && Macbook) return "Damn";
  if (!l && Macbook) return "Sent";
}
