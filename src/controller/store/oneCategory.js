const {oneCategory} = require('../../database/queries/oneCategory');
const oneCat = (req,res) =>{
    const categoryName = req.params.category;
    console.log(categoryName);
    oneCategory(categoryName)
    // .then(result => console.log(result.rows))
    .then(result=>res.json(result.rows))
    .catch(err=>console.log('err',err));
    };


module.exports = {oneCat};
