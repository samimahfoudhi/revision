const express = require("express");
const server = express();
const PORT = 4000;

// set up ejs and public //

server.set("view engine", "ejs");
server.use(express.static("public"));

server.get("/", (request, response) => {
  response.render("pages/index.ejs");
});

server.get("/apropos", (request, response) => {
  response.render("pages/apropos.ejs");
});

server.get("/entreprise", (request, response) => {
  response.render("pages/entreprise.ejs");
});

server.get("/gouvernement", (request, response) => {
  response.render("pages/gouvernement.ejs");
});
server.get("/contact", (request, response) => {
  response.render("pages/contact.ejs");
});
server.listen(PORT, (error) => {
  if (error) {
    console.log(error);
  } else {
    console.log(`server is running on ${PORT}`);
  }
});
