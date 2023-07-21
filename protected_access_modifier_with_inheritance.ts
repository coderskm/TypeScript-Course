class User {
  protected _courseCount = 1;
  readonly city: string = `agra`;
  constructor(public email: string, public name: string, private userId: string) {}
  private deleteToken() {
    console.log(`Token Deleted`);
  }
  get getAppleEmail(): string {
    return `apple-${this.email}`;
  }
  get courseCount(): number {
    return this._courseCount;
  }
  set courseCount(courseNum) {
    if (courseNum <= 1) throw new Error(`course count should be more than 1`);
    this._courseCount = courseNum;
  }
}

class SubUser extends User{
    isFamily: boolean = true
    changeCourseCount() {
        this._courseCount = 5;
        return this._courseCount;
    }
}

const user = new SubUser(`sm@mail.com`, `Sumit KM`, `AQTU97`)
console.log(user.changeCourseCount());

export { };