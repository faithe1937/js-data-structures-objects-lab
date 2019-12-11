// Write your solution in this file!
//define a driver variable and assign it to an Object
const driver = {};

//returns new driver object
function updateDriverWithKeyAndValue(driver, key, value){
    return Object.assign({}, driver, {[key]: value});
}

//returns mutated object when you pass arguments
function destructivelyUpdateDriverWithKeyAndValue(driver, key, value){
    driver[key] = value;
    return driver;
}

//argument is clone object of driver (cannot mutate), passes in key, delete new object based on key passed in
function deleteFromDriverByKey(driver, key){
    const newObj = Object.assign({}, driver);
    delete newObj[key];
    return newObj;
}
function destructivelyDeleteFromDriverByKey(driver, key) {
    delete driver[key];
  
    return driver;
  }
  