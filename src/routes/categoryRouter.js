const { Router } = require("express");
const routes = Router();

const categories = [
    {id: 1, articleName: "Camisa tipo polo", articlesCategory:"Ropa para hombre"},
    {id: 2, articleName: "Blusa ", articlesCategory:"Ropa para mujer"},
    {id: 3, articleName: "Bermuda ", articlesCategory:"Ropa de verano"},
    {id: 4, articleName: "Gorra ", articlesCategory:"Ropa de verano"},
    {id: 5, articleName: "Bikini ", articlesCategory:"Ropa para mujer"},
    {id: 6, articleName: "Boxer", articlesCategory:"Ropa para hombre"},
];

routes.get("/categories", (req, res) => {
    res.json(categories);
  });

  routes.get("/categories/:categoryid", (req, res) => {
    const data = categories.find((category) => {
      return category.id == req.params.categoryid;
    });
  
    if (data) {
      res.json(data);
    } else {
      res.status(404).json({ message: "Category not found" });
    }
  });  

  module.exports = routes;