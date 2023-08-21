const express = require('express');
const app = express();
const cors = require('cors');
const pool = require("./db")

//middleware
app.use(cors());
app.use(express.json()) // allows us to access the req.body

//ROUTES//

//get all todos

//get a todo

//create a todo

//update a todo

//delete a todo

app.listen(5001, () => {
    console.log("Server is starting on port 5001")
});