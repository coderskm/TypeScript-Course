class User {
    constructor(email, name, userId) {
        this.email = email;
        this.name = name;
        this.userId = userId;
        this._courseCount = 1;
        this.city = `agra`;
    }
    deleteToken() {
        console.log(`Token Deleted`);
    }
    get getAppleEmail() {
        return `apple-${this.email}`;
    }
    get courseCount() {
        return this._courseCount;
    }
    set courseCount(courseNum) {
        if (courseNum <= 1)
            throw new Error(`course count should be more than 1`);
        this._courseCount = courseNum;
    }
}
class SubUser extends User {
    constructor() {
        super(...arguments);
        this.isFamily = true;
    }
    changeCourseCount() {
        this._courseCount = 5;
        return this._courseCount;
    }
}
const user = new SubUser(`sm@mail.com`, `Sumit KM`, `AQTU97`);
console.log(user.changeCourseCount());
export {};
