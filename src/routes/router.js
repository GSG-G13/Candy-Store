const express = require("express");
const {getCandies,addNewCandy} = require("../controller");

const router = express.Router();

router.get("/candies", getCandies);
router.post("/add_candy", addNewCandy);

module.exports = router;