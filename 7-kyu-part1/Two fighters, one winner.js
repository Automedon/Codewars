function declareWinner(fighter1, fighter2, firstAttacker) {
  const f1 = Math.ceil(fighter1.health / fighter2.damagePerAttack);
  const f2 = Math.ceil(fighter2.health / fighter1.damagePerAttack);
  return f1 < f2 ? fighter2.name : f2 < f1 ? fighter1.name : firstAttacker;
}
