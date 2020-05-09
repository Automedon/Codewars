/*
Description:
Algorithmic predicament - Bug Fixing #9
Oh no! Timmy's algorithim has gone wrong! help Timmy fix his algorithim!

Task
Your task is to fix timmy's algorithim so it returns the group name with the highest total age.
You will receive two groups of people objects, with two properties name and age. The name property is a string and the age property is a number.
Your goal is to make the total the age of all people having the same name through both groups and return the name of the one with the highest age. If two names have the same total age return the first alphabetical name.
*/
function highestAge(g1, g2){
  let peopleObj = {};
  let peopleArr = [];

  [...g1, ...g2].forEach(({ name, age }) => {
    peopleObj[name] = peopleObj.hasOwnProperty(name)
      ? peopleObj[name] + age
      : age;
  });

  for (let name in peopleObj) {
    peopleArr.push([name, peopleObj[name]]);
  }

  return peopleArr.sort((a, b) => {
    return a[1] === b[1] ? a[0].localeCompare(b[0]) : b[1] - a[1];
  })[0][0];
}
