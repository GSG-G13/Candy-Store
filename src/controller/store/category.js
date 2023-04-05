const {getCategories} = require('../../database/queries/categories');
exports.getCat = (req,res) =>{
getCategories()
.then(result=>{res.json(result.rows)})
.catch(err=>console.log('err',err));
};

