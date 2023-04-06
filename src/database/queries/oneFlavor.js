const dbConnection = require('../../database/config/connection');

const oneFlavor = (theFlavor) => {
    const sql = {
        text: "SELECT candy.name FROM candy JOIN flavor ON candy.flavor_id = flavor.id WHERE flavor.name = $1",
        values: [theFlavor]
      };

dbConnection.query(sql);
}


module.exports = { oneFlavor };

