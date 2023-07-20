function addTwo(num: number):number {
  return num+2;
}
console.log(addTwo(5));

// function getValue(myVal: number):boolean {
//     if (myVal > 5) {
//         return true;
//     }
//     return "200 OK";
// }

const getHello = (s: string):string => {
    return "";
}

const heroes = ['thor', 'iron man', 'captain america', 'hulk'];
heroes.map((hero): string => `hero:${hero}`);

function consoleError(errMsg: string): void{
    console.log(errMsg);
}

function handleError(errMsg: string): never{
    throw new Error(errMsg);
}

/* 
1> use void when you don't want to return anything from function
2> use never when you intentionally don't want to return anything from function
*/

export { };