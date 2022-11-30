const { Router } = require("express");
const routes = Router();

const deliveries = [
    { id: 1, deliveryStatus: "Entregado", firstName: "Admin", lastName: "System" },
    { id: 2, deliveryStatus: "En camino", firstName: "Staff", lastName: "" },
    { id: 3, deliveryStatus: "Retrasado", firstName: "John", lastName: "Doe" },
    { id: 4, deliveryStatus: "Devolución", firstName: "John", lastName: "Doe" },
  ];

  routes.get("/", (req, res) => {
    res.json(deliveries);
  });

  routes.get("/:deliveryid", (req, res) =>{
    const data = deliveries.find((delivery) =>{
      return delivery.id == req.params.deliveryid;
    });
    if (data) {
      res.json(data);
    } else {
      res.status(404).json({ message: "delivery not found"})
    }
  });
  
  routes.post("/", (req, res) =>{
    const data = req.body;

    const { deliveryStatus} = data;
    const newDelivery = { deliveryStatus, id:34 };

    if (!data) {
      res.status(404).json({ message: "Delivery data is required"})
    }else {
      res.status(201).json({ 
        ok: true,
        message: "Pedido creado",
        payload: newDelivery,
       });
    }
  });

  routes.put("/", (req,res) =>{
    res.status(405).json({ message: "Method not allowed"})
  });
  routes.put("/:id", (req, res) =>{
    req.json({ message: `Pedido con el id ${req.params.id} modificado`});
  })
  
  routes.delete("/:id", (req, res) =>{
    res.json({ message: `Pedido con el id ${req.params.id} eliminado.`})
  });

  module.exports = routes;