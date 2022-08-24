const express = require("express");
const validate = require("./middleware/validate.mw")
const UserController = require("./controllers/user.controller")

const app = express();
const PORT = 3000;

const parse = express.json();

app.get('/users', UserController.showUsers);

app.get('/user/:id', UserController.showUser);

app.post('/user', parse, validate, UserController.createUser);

//app.put('/user/:id', parse, validate, updateUser);

// app.delete('/user/:id', User.Controller.deleteUser);


app.listen(PORT, () => {
  console.log('server started at port ' + PORT);
});