const { Router } = require("express");
const routes = Router();

const deliveries = [
    { id: 1, deliveryStatus: "Entregado", firstName: "Admin", lastName: "System" },
    { id: 2, deliveryStatus: "En camino", firstName: "Staff", lastName: "" },
    { id: 3, deliveryStatus: "Retrasado", firstName: "John", lastName: "Doe" },
    { id: 4, deliveryStatus: "Devolución", firstName: "John", lastName: "Doe" },
  ];

  routes.get("/deliveries", (req, res) => {
    res.json(deliveries);
  });

  routes.get("/deliveries/:deliveryid", (req, res) => {
    const data = deliveries.find((delivery) => {
      return delivery.id == req.params.deliveryid;
    });
  
    if (data) {
      res.json(data);
    } else {
      res.status(404).json({ message: "Delivery not found" });
    }
  });  

  module.exports = routes;