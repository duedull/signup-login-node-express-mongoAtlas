const env = require('dotenv');
const express = require('express')
const { userRouter } = require('./routes/userRouter')
const path = require('path');
const { connectDB } = require('./mongoConnect');
env.config();
const app = express()
const port = process.env.PORT || 3000

app.use(express.urlencoded({ extended: true }));
app.set('views', path.resolve('./views'));
app.set('view engine', 'ejs');
app.get('/', (req, res) => res.send('Hello World!'));
app.use('/user', userRouter);

app.listen(port, () => {
    console.log(`Example app listening on port ${port}!`);
    connectDB(`mongodb+srv://duedull:${process.env.PW}@cluster-1.6yd4b.mongodb.net/?retryWrites=true&w=majority&appName=cluster-1`);
});