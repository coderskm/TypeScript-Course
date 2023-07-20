const User = { name: "sumit", email: "sumit@dev.com", isActive: true };

function createUser({ name: string, isPaid: boolean }) {
    
};
let user = { name: "sumit", isPaid: false, email: "sumit@dev.com" };
createUser(user);

function createCourse(): { name: string; price: number } {
  return {name:'reactJS', price:399};
}
console.log(createCourse());

export { };