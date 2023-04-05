const {getCandy,addCandy} = require('../../database/queries/candy');
const getCandies = (req, res) => {
    getCandy()
      .then(result => {
        res.json(result.rows);
      })
      .catch(err => console.log("err:", err));
  };

  const addNewCandy = (req,res)=>{
    const candyInfo = req.body;
    addCandy(candyInfo)
    .then(() => res.redirect("/"))
    .catch(err => console.log("err:", err));
  }
  module.exports = {getCandies,addNewCandy};