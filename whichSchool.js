function whichSchool(age) {
  if (age < 13) {
    return("Elementary School");

  } else if (age >= 13 && age <= 18){
    return("Secondary School");

  } else {
    return("Lighthouse Labs");
  }
}

console.log(whichSchool(19));
console.log(whichSchool(20));
console.log(whichSchool(40));
console.log(whichSchool(100));