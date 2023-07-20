function addTwo(num:number) {
    return num + 2;
}
console.log(addTwo(5));

function getUpper(val: string) {
    return val.toUpperCase()
}
console.log(getUpper('dazed and confused'));

function signUpUser(name:string, email:string, isPaid:boolean) {
    return `Name:${name} Email:${email} Fee Status:${isPaid}`;
}
console.log(signUpUser(`sunil`, "sunilt@dev.com", false));

let loginUser = (name: string, email: string, isPaid: boolean = true) => `Name:${name} Email:${email} Fee Status:${isPaid}`;
console.log(loginUser(`sunil`, "sunilt@dev.com"));


export { };