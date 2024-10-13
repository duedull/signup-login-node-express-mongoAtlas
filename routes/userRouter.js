const { handleShowInterface, handleSignUP, handleLogIN } = require('../controllers/showInterface')
const express = require('express')
const userRouter = express.Router()


userRouter
    .route('/')
    .get(handleShowInterface)

userRouter
    .route('/signup')
    .get((req, res) => {
        res.render('signup');
    })
    .post(handleSignUP)

// userRouter

userRouter
    .route('/login')
    .get((req, res) => {
        res.render('login');
    })
    .post(handleLogIN)


module.exports = {
    userRouter,
}