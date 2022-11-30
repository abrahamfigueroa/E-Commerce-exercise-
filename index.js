const express = require("express");
const usersRouter = require("./src/routes/usersRoutes");
const productsRouter = require("./src/routes/productsRouter");
const categoriesRouter = require("./src/routes/categoryRouter");
const deliveriesRouter = require("./src/routes/deliveryRouter");
const app = express();

app.use(usersRouter);
app.use(productsRouter);
app.use(categoriesRouter);
app.use(deliveriesRouter);

app.get("/", (req, res) => {
    res.json({ message: "El API funciona" });
  });
  
  // Ejecutando el servidor HTTP
  app.listen(8000, () =>
    console.log("Esuchando peticiones HTTP en el puerto 8000")
  );