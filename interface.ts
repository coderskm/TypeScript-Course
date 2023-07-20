interface User {
  readonly dbId: number;
  email: string;
  userId: number;
  googleId?: string;
  startTrail(): string;
  getCoupon(couponName: string, value: number): number;
}
const sumit: User = {
  dbId: 12,
    email: "skm@gm.com",
  userId: 12,
  startTrail() {
    return `trial started`;
  },
  getCoupon(name: "sumit", value: 23) {
    return value * 10;
  },
};
sumit.email = `code@mail.com`;

console.log(sumit)

export { };