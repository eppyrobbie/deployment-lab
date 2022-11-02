const path = require("path")

module.exports = {
    home: (req, res) => {
        res.sendFile(path.join(__dirname, "../../client/index.html"))
        

    },

    css: (req, res) => {
        res.sendFile(path.join(__dirname, "../../client/styles.css"))
    }, 

    button: (req, res) => {
        res.sendFile(path.join(__dirname, "../../client/main.js"))
    }
}