const { credentialsModel } = require('../models/userCredentials')

const handleShowInterface = (req, res) => {
    res.render('main');
}

const handleSignUP = async (req, res) => {
    const { name, email, password } = req.body;
    await credentialsModel.create({
        name,
        email,
        password,
    });

    res.send({
        "status": "new User Added",
        "result": `${req.body}`
    });
}

const handleLogIN = async (req, res) => {

    const { email, password } = req.body;

    const results = await credentialsModel.findOne({ email: email, password: password });

    if (results) {
        console.log(results);
        res.json({
            "status": "login Done!!!"
        });
    } else {
        res.json({
            "status": "failed"
        })
    }
}

module.exports = {
    handleShowInterface,
    handleSignUP,
    handleLogIN,
}