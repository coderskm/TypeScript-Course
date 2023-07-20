let score: number | string | boolean = 33;
score = 44;
score = "55";
score = true;

type User = {
    name: string;
    id: number;
}
type Admin = {
    username: string;
    id: number;
}
let hitesh: User | Admin = { name: "sumit", id: 334 };

function getDbId(id: number | string) {
    if (typeof id === 'string') {
        id.toLowerCase();
        console.log(`DB id is ${id}`);
    }
    if (typeof id === "number") {
        id = id * 10;
      console.log(`DB id is ${id}`);
    }
}
getDbId(9);
getDbId("9");

const data: (number | string | boolean)[] = [1, 2, 3, 4, 5, "hi", 'hola', false];
console.log(data);

let seatType: 'window' | 'side' | 'upper';
seatType = "window";

export { };
