"use strict";
exports.__esModule = true;
function addTwo(num) {
    return num + 2;
}
console.log(addTwo(5));
function getUpper(val) {
    return val.toUpperCase();
}
console.log(getUpper('dazed and confused'));
function signUpUser(name, email, isPaid) {
    return "Name:".concat(name, " Email:").concat(email, " Fee Status:").concat(isPaid);
}
var loginUser = function (name, email, isPaid) {
    if (isPaid === void 0) { isPaid = true; }
    return "Name:".concat(name, " Email:").concat(email, " Fee Status:").concat(isPaid);
};
console.log(signUpUser("sunil", "sunilt@dev.com", false));
console.log(loginUser("sunil", "sunilt@dev.com"));
