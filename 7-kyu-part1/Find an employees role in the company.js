function findEmployeesRole(name) {
  for(var i = 0; i < employees.length; i++)
    if(name === employees[i].firstName + " " + employees[i].lastName) return employees[i].role;
  return "Does not work here!";
}
