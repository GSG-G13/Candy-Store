const dbConnection = require('../../database/config/connection');

const oneCategory = (theCategory) => {
    const sql = {
        text: "SELECT candy.name FROM candy JOIN category ON candy.category_id = category.id WHERE category.name = $1",
        values: [theCategory]
      };

dbConnection.query(sql);
}


module.exports = { oneCategory };

