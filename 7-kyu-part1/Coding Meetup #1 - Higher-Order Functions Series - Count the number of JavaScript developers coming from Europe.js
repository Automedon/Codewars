function countDevelopers(list) {
  return list.filter(x => x.continent == "Europe" && x.language == "JavaScript")
    .length;
}
