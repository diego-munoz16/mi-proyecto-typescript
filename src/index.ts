import colors from "colors";
import server from "./server";

// const port = 4000;
const port = process.env.PORT || 4000;

server.listen(port, () => {
  console.log(colors.green.bold.italic(`Welcome server running on port ${port}`));
});

let productName = "tablet"
let isAuth = false
let price = 30

type Product = {
  id: number,
  price: number,
  name: string
}

// interface ProductIface {
//   id: number,
//   price: number,
//   name: string
// }

// type ProductId = Pick<Product, 'id'>
type ProductId = Omit<Product, 'price' | 'name'>

let product3: ProductId = {
  id: 3
}

let product1: ProductId = {
  id: 1
}

let product2: Product = {
  id: 2,
  price: 30,
  name: "tablet 11 pulgadas"
}

const numbers = [10, 20, 30]

