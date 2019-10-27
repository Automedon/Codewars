Quickz;
function bump(str) {
  return str.replace(/_/g, "").length > 15 ? "Car Dead" : "Woohoo!";
}
