function lostSheep(friday, saturday, total) {
  return (
    total -
    friday.reduce((acc, next) => acc + next, 0) -
    saturday.reduce((acc, next) => acc + next, 0)
  );
}
