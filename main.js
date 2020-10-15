// Your code here.
const getFirstName = function (obj) {
  return obj.firstName
}

const getLastName = function (obj) {
  return obj.lastName
}

const getFullName = function (obj) {
  return obj.firstName + ' ' + obj.lastName
}

const setFirstName = function (obj, firstName) {
obj.firstName = firstName
}

const setAge = function (obj, age) {
  obj.age = age
}

const giveBirthday = function (obj) {
  if (obj.age === undefined) {
    obj.age = 1
    
  } else {
    obj.age = obj.age += 1
  }
  
}

const marry = function (obj, obj2) {
  obj.married = true;
  obj2.married = true;
  obj.spouseName = getFullName(obj2);
  obj2.spouseName = getFullName(obj);
}





const divorce = function (obj, obj2) {
  obj.married = false;
  obj2.married = false;
  delete obj.spouseName;
  delete obj2.spouseName;
}















// Our code here. Don't touch!
if (typeof getFirstName === 'undefined') {
  getFirstName = undefined
}

if (typeof getLastName === 'undefined') {
  getLastName = undefined
}

if (typeof getFullName === 'undefined') {
  getFullName = undefined
}

if (typeof setFirstName === 'undefined') {
  setFirstName = undefined
}

if (typeof setAge === 'undefined') {
  setAge = undefined
}

if (typeof giveBirthday === 'undefined') {
  giveBirthday = undefined
}

if (typeof marry === 'undefined') {
  marry = undefined
}

if (typeof divorce === 'undefined') {
  divorce = undefined
}


module.exports = {
  getFirstName,
  getLastName,
  getFullName,
  setFirstName,
  setAge,
  giveBirthday,
  marry,
  divorce,
}
