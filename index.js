const express = require('express');
const courses = require('./routes/courses')

const app = express();

app.use(express.json());
app.use('/', courses);






const port = process.env.PORT || 3000;

app.listen(port, ()=> {
    console.log(`Listening to Port ${port}....`);
})