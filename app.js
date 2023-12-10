const express = require("express");


const app = express();

app.get("/", (req, res) => {
    res.json({ message: "Welcome to contact book application." });

});

const contactsRouter = require("./app/routes/contact.route");

app.use("/api/contacts", contactsRouter);


module.exports = app;