const { Pool } = require('pg');
require('dotenv').config();
if (!process.env.DB_URL) throw new Error('No Database URL!!!');
let dbURl ="";
if (process.env.NODE_ENV === "test"){
    dbURl = process.env.Test_DB_URL;
} else if (process.env.NODE_ENV === "development"){
    dbURl = process.env.DEV_DB_URL;
}else if (process.env.NODE_ENV === "production"){
    dbURl = process.env.DB_URL;
}
if (!dbURl) throw new Error('No Database URL!!!');

const options = {
    connectionString: dbURl,
    ssl:false
};
module.exports= new Pool(options);