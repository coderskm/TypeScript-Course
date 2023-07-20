const user: [string, number, boolean] = ["skm", 5879, false];
console.log(user);
user[1] = 34;
console.log(user);

type User = [number, string];
const newUser: User = [112, 'example@google.com'];
console.log(newUser);


export { };