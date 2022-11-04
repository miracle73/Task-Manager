const {CustomApiError} = require('../Error/customError')
const errorHandlerMiddleware = (err,req,res,next) => {
    if (err instanceof CustomApiError){
        return res.status(err.statusCode).json({msg: err.message})
    }
    return res.status(500).json({msg: err})
}
module.exports = errorHandlerMiddleware