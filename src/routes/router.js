const express = require("express");
const {getCandies, getCat, getFlav} = require("../controller");

const router = express.Router();

router.get("/candies", getCandies);

router.get("/categories",getCat);

router.get("/flavors",getFlav);

module.exports = router;