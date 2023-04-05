const express = require("express");
const {getCandies,addNewCandy, getCat, getFlav} = require("../controller");

const router = express.Router();

router.get("/candies", getCandies);
router.post("/add_candy", addNewCandy);
router.get("/categories",getCat);
router.get("/flavors",getFlav);

module.exports = router;