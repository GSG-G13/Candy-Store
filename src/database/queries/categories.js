const dbConnection = require('../../database/config/connection');

const getCategories = () => dbConnection.query('select name,img_url from category');
module.exports = {
  getCategories,
};
