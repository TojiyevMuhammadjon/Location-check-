const express = require("express");
const cors = require("cors");
const routes = require("../api/routes");

const modules = (app) => {
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  app.use(cors());

  app.set("view engine", "ejs");
  app.set("views", "src/views");

  app.use(routes)
};

module.exports = modules;
