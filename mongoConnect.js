const { mongoose } = require("mongoose");

const connectDB = (url) => {
    try {
        mongoose.connect(url);
        console.log('database connected');
    } catch (err) {
        console.log(err);
    }
}

module.exports = {
    connectDB
}