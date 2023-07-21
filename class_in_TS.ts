class User{
    email: string
    name: string
    city:string = `agra`
    constructor(email: string, name:string) {
        this.email = email;
        this.name = name;
    }
}

const user = new User("st@mail.com", "Sunil");
console.log(user.city)
console.log(user)
export { };