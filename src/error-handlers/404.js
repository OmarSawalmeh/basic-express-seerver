'use strict'

module.exports = (req, res, nex)=>{
    res.status(404).send({
        Code: 404,
        Reoute: req.path,
        Message: "Page Not Found"
    })
};