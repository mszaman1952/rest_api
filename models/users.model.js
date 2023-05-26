const {v4 : uuidv4} = require("uuid");
let users = [
    {
        id: uuidv4(),
        username : "Robiul Islam",
        email : "abc@gamil.com"
    },
    {
        id : uuidv4(),
        username : "Tanvir islam",
        email : "example@gmail.com"
    }
]

module.exports = users;
