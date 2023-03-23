const {ServerSecretKey} = require('../config/Config');

const VerifyServer = (req,res,next) => {
    if(req.body.secretKey == ServerSecretKey){
        next()
    }else{
        res.send('invalid Secret key')
    }
}

module.exports = {
    VerifyServer
}