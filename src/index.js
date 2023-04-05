const app = require('./app');
app.listen(app.get('post'),()=>{
  console.log(`App is live on http://localhost:${app.get("port")}`);
});