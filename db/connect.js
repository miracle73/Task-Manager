const mongoose = require('mongoose')
const connectionString = 'mongodb+srv://Nwadiaro:Exceptional123@nwadiaromiracle.knajwok.mongodb.net/Api?retryWrites=true&w=majority'
const connectDB = (url) => { return mongoose.connect(url, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true
}).then(() => console.log('connected2')).catch((err) => console.log(err))
}
module.exports = connectDB