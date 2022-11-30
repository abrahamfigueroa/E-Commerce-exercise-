// INDEX DE RUTAS

const usersRouter = require("./usersRouter");
const productsRouter = require("./productsRouter");
const categoriesRouter = require ("./categoryRouter");
const deliveriesRouter = require("./deliveryRouter");

const apiRouter = (app) => {
    app.use("/users", usersRouter);
    app.use("/products", productsRouter);
    app.use("/categories", categoriesRouter);
    app.use("/deliveries", deliveriesRouter);
};

module.exports = apiRouter;