const nameStr = "Robert000Smith000123";

const createObj = (str) => {
  // str is splitted for "000" and destructured with first name last name and id
  const [firstName, lastName, id] = str.split("000");
  // return above destructure in the object below
  return { firstName: firstName, lastName: lastName, id: id };
};

console.log(createObj(nameStr));
// output: { firstName: 'Robert', lastName: 'Smith', id: '123' }