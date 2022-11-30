const { Router } = require("express");
const routes = Router();

const products = [
    {id: 1, articleName: "Camisa tipo polo", articlesCategory:"Ropa para hombre"},
    {id: 2, articleName: "Blusa ", articlesCategory:"Ropa para mujer"},
    {id: 3, articleName: "Bermuda ", articlesCategory:"Ropa de verano"},
    {id: 4, articleName: "Gorra ", articlesCategory:"Ropa de verano"},
    {id: 5, articleName: "Bikini ", articlesCategory:"Ropa para mujer"},
    {id: 6, articleName: "Boxer", articlesCategory:"Ropa para hombre"},
];

routes.get("/products", (req, res) => {
    res.json(products);
  });
  
 routes.get("/products/:productid", (req, res) => {
   const data = products.find((product) => {
     return user.id == req.params.productid;
   });
  
   if (data) {
     res.json(data);
   } else {
     res.status(404).json({ message: "Product not found" });
   }
 });
  
  module.exports = routes;