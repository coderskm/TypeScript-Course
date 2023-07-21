interface Database{
    connection: string,
    username: string,
    password:string
}
function anotherFunction<T, U extends Database>(val1: T, val2: U): object{
    return {
        val1,val2
    }
}
anotherFunction(4, { connection: "https", username: "user@2003", password: "gdkdkyi6wsx955w4dg" });

interface Quiz{
    name: string,
    type:string
}
interface Course{
    name: string, 
    author: string,
    subject:string
}
class Sellable<T>{
    public cart: T[] = [];
    addToCart(product: T) {
        this.cart.push(product);
    }
}