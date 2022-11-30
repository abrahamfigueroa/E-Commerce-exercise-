const { Router } = require("express");
const routes = Router();

const products = [
    {id: 1, articleName: "Camisa tipo polo", articlesCategory:"Ropa para hombre"},
    {id: 2, articleName: "Blusa ", price:"50"},
    {id: 3, articleName: "Bermuda ", price:"50"},
    {id: 4, articleName: "Gorra ", price:"50"},
    {id: 5, articleName: "Bikini ", price:"50"},
    {id: 6, articleName: "Boxer", price:"50"},
];

routes.get("/", (req, res) => {
    res.json(products);
  });
  
  routes.get("/:productid", (req, res) =>{
  });
  
  routes.post("/", (req, res) =>{
    res.status(201).json({ message: "Producto creado" });
  });
  routes.put("/", (req,res) =>{
    req.json({ message: `Producto con el id ${req.params.id} modificado`});
  });
  
  routes.delete("/:id", (req, res) =>{
    res.json({ message: `Producto con el id ${req.params.id} eliminado.`})
  })

//  routes.get("/products/:productid", (req, res) => {
//    const data = products.find((product) => {
//      return product.id == req.params.productid;
//    });
  
//    if (data) {
//      res.json(data);
//    } else {
//      res.status(404).json({ message: "Product not found" });
//    }
//  });
  
  module.exports = routes;