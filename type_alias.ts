type User = {
    name: string;
    email: string;
    isActive: boolean;
}

function createUser(user:User) :User{
    return{
    name: "",
    email: "sim@gmail.com",
    isActive: false
}
};

console.log(createUser({
  name: "",
  email: "sm@gmail.com",
  isActive: false,
}));

export { };