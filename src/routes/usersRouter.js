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
  const data = users.find((user) =>{
    return user.id == req.params.userid;
  });
  if (data) {
    res.json(data);
  } else {
    res.status(404).json({ message: "User not found" })
  }
});

routes.post("/", (req, res) =>{
  const data = req.body;

  const { username, email} = data;
  const newUser = { username, email, id:54 };

  if (!data) {
    res.status(404).json ({ message: "User data is required" })
  }else {
    res.status(201).json({ 
      ok: true,
      message: "Usuario creado",
      payload: newUser,
     });
    }
});
  
routes.put("/", (req,res) =>{
  res.status(405).json({ message: "Method not alloed"})
});
routes.put("/:id", (req, res) =>{
  req.json({ message: `Usuario con el id ${req.params.id} modificado`});
})

routes.delete("/:id", (req, res) =>{
  res.json({ message: `Usuario con el id ${req.params.id} eliminado.`})
});


module.exports = routes;