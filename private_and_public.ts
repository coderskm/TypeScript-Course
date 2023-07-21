class User {
  readonly city: string = `agra`;
    constructor(public email: string, public name: string, private userId: string) {
      
  }
}

const user = new User("st@mail.com", "Sunil","IA234");
console.log(user.city);
console.log(user);
export {};
