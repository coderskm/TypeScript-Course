class User {
  private _courseCount = 1;
  readonly city: string = `agra`;
  constructor(public email: string, public name: string, private userId: string) {}
    private deleteToken() {
        console.log(`Token Deleted`);
  }
    get getAppleEmail(): string {
    return `apple-${this.email}`;
    }
    get courseCount(): number{
        return this._courseCount;
    }
    set courseCount(courseNum) {
        if(courseNum<=1) throw new Error(`course count should be more than 1`)
        this._courseCount = courseNum
    }
}

const user = new User(`he@mail.com`, 'hemang badani', 'AUqw234');
console.log(user.city)
console.log(user.getAppleEmail)
user.courseCount = 4;
console.log(user.courseCount)

export { };
