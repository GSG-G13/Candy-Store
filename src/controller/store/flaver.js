const {getFlavers} = require('../../database/queries/flavors');
exports.getFlav = (req,res) =>{
    getFlavers()
    .then(result=>{res.json(result.rows)})
    .catch(err=>console.log('err',err));
    };
