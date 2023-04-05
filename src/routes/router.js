const express = require("express");
const {getCandies} = require("../controller");

const router = express.Router();

router.get("/candies", getCandies);
module.exports = router;