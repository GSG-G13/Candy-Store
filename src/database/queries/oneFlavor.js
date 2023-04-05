const dbConnection = require('../../database/config/connection');

const oneFlavor = () => dbConnection.query("SELECT candy.name FROM candy JOIN flavor ON candy.flavor_id = flavor.id WHERE flavor.name = 'chocolate'");
module.exports = { oneFlavor };

