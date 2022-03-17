const employee = {
    name: "worker1",
    streetAddress: "house1"
};
function updateEmployeeWithKeyAndValue(obj, key, value) {
    const newEmployee = { ...obj };
    newEmployee[key] = value;

    return newEmployee;
}

function destructivelyUpdateEmployeeWithKeyAndValue(obj, key, value) {
    obj[key] = value;

    return obj;
}
function deleteFromEmployeeByKey(obj, key) {
    const newEmployee = { ...obj, key };
    delete newEmployee[key];
    return newEmployee;
}
function destructivelyDeleteFromEmployeeByKey(obj, key) {
    delete obj[key];

    return obj;
}