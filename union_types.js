var score = 33;
score = 44;
score = "55";
score = true;
var hitesh = { name: "sumit", id: 334 };
function getDbId(id) {
    if (typeof id === 'string') {
        id.toLowerCase();
        console.log("DB id is ".concat(id));
    }
    if (typeof id === "number") {
        id = id * 10;
        console.log("DB id is ".concat(id));
    }
}
getDbId(9);
getDbId("9");
var data = [1, 2, 3, 4, 5, "hi", 'hola', false];
console.log(data);
