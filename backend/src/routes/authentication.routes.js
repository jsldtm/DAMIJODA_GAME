const express = require('express');
const router = express.Router();

router.get('/signup',(req,res)=>{
    res.status(200).send('Hola')});
;



module.exports = router;