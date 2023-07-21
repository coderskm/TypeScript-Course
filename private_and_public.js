"use strict";
exports.__esModule = true;
var User = /** @class */ (function () {
    function User(email, name, userId) {
        this.email = email;
        this.name = name;
        this.userId = userId;
        this.city = "agra";
    }
    return User;
}());
var user = new User("st@mail.com", "Sunil", "IA234");
console.log(user.city);
console.log(user);
