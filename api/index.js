const express = require('express');
const router = express.Router();

const Translate = require('@google-cloud/translate');
const translate = new Translate();

router.get('/toEn', (req, res) => {
    let text = req.query.char;
    let target = 'en';

    console.log(text);
    translate
        .translate(text, target)
        .then(results => {
            console.log(results[1].data.translations);
            let translations = results[0];
            console.log(translations);
            res.send(translations);
        })
        .catch(err => {
            console.error('ERROR:', err);
        });
});

module.exports = router;
