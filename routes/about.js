const express = require('express');
const router = express.Router();

//define the home page route 
router.get("/", (req, res) => {
    res.send("About")
})

router.get("/me", (req, res) => {
    res.send("About Me")
})

module.exports = router; 