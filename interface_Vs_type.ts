interface User {
  readonly dbId: number;
  email: string;
  userId: number;
  googleId?: string;
  startTrail(): string;
  getCoupon(couponName: string, value: number): number;
}
interface User{
    githubPublicToken:string
}
const sumit: User = {
  dbId: 12,
    email: "skm@gm.com",
  githubPublicToken:'V6okJ2hb2Jv0^sthVqKzl^v$ejP',
  userId: 12,
  startTrail() {
    return `trial started`;
  },
  getCoupon(name: "sumit", value: 23) {
    return value * 10;
  },
};
console.log(sumit);

interface Admin extends User{
    role: "admin" | "TA" | "user";
}
export { };
