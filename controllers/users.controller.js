// let users = require('../models/users.model');
const users = require("../models/users.model");
const uuidv4 = require("uuid");


// get users =====================================
const getAllUsers = (req, res) => {
  res.status(200).json({
    users
  });
};

// create users ================================

const createUser = (req, res) => {
    const newUser = {
        id : uuidv4(),
        username :req.body.username,
        email : req.body.email
    }
    users.push(newUser)
    res.status(200).json({
       users    
    }); 

  /*   res.status(200).json({
        message : " I am Post Method"
    }) */
}

module.exports = {getAllUsers, createUser};