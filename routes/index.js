const express = require('express');
const router = express.Router();

router.get('/', async(req, res) => {
    res.redirect('https://github.com/laxyapahuja/bunken-api')
});

module.exports = router