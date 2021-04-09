const express = require('express');
const app = express();
const port = process.env.PORT || 8080;

app.use(express.json());

//Import router
const todoRouter = require('./routers/todoRouter');

//Router
app.use('/api', todoRouter );
app.get('/', (req, res) => {
    res.send("OK");
})

app.listen(port, function(){
    console.log("Server is running on " + port);
});