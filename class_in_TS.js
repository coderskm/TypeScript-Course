"use strict";
exports.__esModule = true;
var User = /** @class */ (function () {
    function User(email, name) {
        this.city = "agra";
        this.email = email;
        this.name = name;
    }
    return User;
}());
var user = new User("st@mail.com", "Sunil");
console.log(user.city);
console.log(user);
