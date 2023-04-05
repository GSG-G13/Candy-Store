const {oneFlavor} = require('../../database/queries/oneFlavor');
const oneFlav = (req,res) =>{
    oneFlavor()
    .then(result=>{res.json(result.rows)})
    .catch(err=>console.log('err',err));
    };


module.exports = {oneFlav};
