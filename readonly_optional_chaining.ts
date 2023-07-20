type User = {
  readonly _id: string;
  name: string;
  email: string;
  isActive: boolean;
  cardDetails?: string;
};

let myUser: User = {
    _id: "34",
    name: "Sumit Kumar Mishra",
    email: "sm@gmail.com",
    isActive: false,
}
console.log(myUser.email)
myUser.email = "sm412387@gmail.com"
console.log(myUser.email);

type cardNumber = {
  num:string
}
type cardDate = {
  date:string
}
type cardDetails = cardNumber & cardDate & { cvv: number };

export{}