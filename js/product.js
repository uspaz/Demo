const product = [];
let agregar = 8;

async function getProducts() {
      const res = await fetch(`.././productos.json`);
      const prod = await res.json();
      product.push(prod);
  }

getProducts()
console.log(product);
  
function showProducts(listproducts) {
     let container = "";
     for (let i = 0; i < product.length; i++) {
        console.log('entra');
        listproducts.forEach(product => {
            container = product
        });
         
     }
     console.log(container);
     

}
showProducts(product)