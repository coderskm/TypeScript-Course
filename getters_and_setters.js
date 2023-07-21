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
const user = new User(`he@mail.com`, 'hemang badani', 'AUqw234');
console.log(user.city);
console.log(user.getAppleEmail);
user.courseCount = 4;
console.log(user.courseCount);
