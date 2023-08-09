const { Router } = require("express");
const {
  Home,
  MainPage,
  GetAllDistance,
} = require("../controllers/location.controller");

const router = new Router();

router.get("/", Home);
router.get("/getall", GetAllDistance);
router.post("/send-distance", MainPage);

module.exports = router;
