const express = require("express");
const {getCandies, getCat, getFlav,oneFlav} = require("../controller");

const router = express.Router();

router.get("/candies", getCandies);

router.get("/categories",getCat);

router.get("/flavors",getFlav);

router.get("/oneFlav",oneFlav)

module.exports = router;