/*
Description:
Rings are the most distinct item in the Sonic the Hedgehog franchise, Rings are considered as a health system where the sole purpose to protect Sonic from all damage (except crushing) no matter how strong and powerful in shape or form, today you are making a Ring counter which stores your Rings in Sonic's Ring Bank.

In Sonic the Hedgehog games, most thing Sonic will encounter are rings, collecting a ring will add to Sonic's Ring Bank 1 ring and protects him from all damage, getting hit will cause Sonic to lose all rings and start back to 0, having a shield which can be found in monitors around the level will cause Sonic to lose the shield instead of all his rings.

Ring currencies in this Kata are based over Sonic 3 & Knuckles Ring Counter which goes with the following:

Ring = 1, Monitor Ring = 10, Giant Ring = 50

If Sonic doesn't have 7 Chaos Emeralds, Giant Rings do NOT count so basically if Sonic already collected 7 Chaos Emeralds, any Giant Ring collected is now worth 50 rings.

Use the function below to solve the kata:

function ringBank(rings, monitors, giantrings, chaosEmeralds, sonicHit, sonicShield){

}
Good luck! and remember to use the Example Tests if you ever got stuck! ;)
*/
function ringBank(
  rings,
  monitors,
  giantRings,
  chaosEmeralds,
  sonicHit,
  sonicShield
) {
  return sonicHit && !sonicShield
    ? 0
    : rings + monitors * 10 + (chaosEmeralds === 7 ? giantRings * 50 : 0);
}
