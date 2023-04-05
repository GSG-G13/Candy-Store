const {getCandy} = require('../../database/queries/candy');
const getCandies = (req, res) => {
  console.log('dsgsdfd');
    getCandy()
      .then(result => {
        res.json(result.rows);
      })
      .catch(err => console.log("err:", err));
  };
  module.exports = {getCandies};