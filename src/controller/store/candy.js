const {getCandy} = require('../../database/queries/candy');
const getCandies = (req, res) => {
    getCandy()
      .then(result => {
        res.json(result.rows);
      })
      .catch(err => console.log("err:", err));
  };
  module.exports = {getCandies};