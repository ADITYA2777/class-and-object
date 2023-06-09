// Write a function that takes an array of products and returns a function that filters the array by a given product
// category. The function must filter an eCommerce products array by a specific category. The closure filters
// products using the filter() method. Finally, it returns a new array containing only the products with the same
// category as the input.



function filterbycategore (product) {
    return function (category) {
        return product.filter(function(product){
            return product.category === category;
        });
    };
}
product =[
    {name:'shirt',category:'clothing' },
    { name: 'Shirt', category: 'Clothing' },
    { name: 'Phone', category: 'Electronics' },
    { name: 'Book', category: 'Books' },
    { name: 'Watch', category: 'Accessories' },
    { name: 'Laptop', category: 'Electronics' }
];

let clothingProduct = filterbycategore(product)("clothing");
console.log(clothingProduct);

let filterProductsByCategory = filterbycategore(product);
let filteredProduct = filterProductsByCategory('Electronics');

console.log(filteredProduct);