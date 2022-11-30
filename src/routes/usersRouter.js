const { Router } = require("express");
const routes = Router();

const users = [
  { id: 1, username: "admin", firstName: "Admin", lastName: "System" },
  { id: 2, username: "staff", firstName: "Staff", lastName: "" },
  { id: 3, username: "customer", firstName: "John", lastName: "Doe" },
];

routes.get("/", (req, res) => {
  res.json(users);
});

routes.get("/:userid", (req, res) =>{
});

routes.post("/", (req, res) =>{
  res.status(201).json({ message: "Usuario creado" });
});
routes.put("/", (req,res) =>{
  req.json({ message: `Usuario con el id ${req.params.id} modificado`});
});

routes.delete("/:id", (req, res) =>{
  res.json({ message: `Usuario con el id ${req.params.id} eliminado.`})
});

// routes.get("/users/:userid", (req, res) => {
//   const data = users.find((user) => {
//     return user.id == req.params.userid;
//   });

//   if (data) {
//     res.json(data);
//   } else {
//     res.status(404).json({ message: "User not found" });
//   }
// });

module.exports = routes;