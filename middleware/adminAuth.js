const {Adminkey} = require('../Config/Config');

const VerifyAdmin = (req,res,next) => {
    if(req.params.secretKey == Adminkey){
        next()
    }else{
        res.send('invalid Secret key')
    }
}

module.exports = {
    VerifyAdmin
}