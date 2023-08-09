const config = require("../../config/development.json");
const { connect } = require("mongoose");

const bootstrap = async (app) => {
  await connect("mongodb://127.0.0.1:27017/location");
  console.log("connected to MongoDB");

  app.listen(config.port, () => {
    console.log(config.port);
  });
};

module.exports = bootstrap;
