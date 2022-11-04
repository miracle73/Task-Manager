const express = require('express');
const connectdb = require('./db/connect.js');
const app = express();
const router = require('./routes/task.js')
const notFound = require('./middleware/notFound')
const errorHandler = require('./middleware/errorHandler')
require('dotenv').config()
app.use(express.json());
app.use(express.static('./public'));
app.use(express.urlencoded({extended: false}))
// app.get('/', (req,res) => {
//    res.send('<h2>Task Manager App</h2>') 
// })


app.use('/api/v1/tasks', router)
app.use(notFound)
app.use(errorHandler)
const start = async () => {
    try{await connectdb(process.env.MONGO_URI)
    app.listen(5000, () => {
        console.log("Server is listening on port 5000")
    })
} catch (error) {console.log(error)}
}
start()
