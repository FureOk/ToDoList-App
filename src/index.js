const express = require('express');
const { json } = require('express');
const connect = require('./config/database');
const taskRoute = require('./routes/taskRoute');

connect()

const app = express();
app.use(json());
app.use('/task', taskRoute);

const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send("Welcome To Your To-Do List!")
});

app.listen(PORT, () => console.log(`Serving on port ${PORT}`));


