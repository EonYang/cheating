const express = require('express');
const router = express.Router();

const Translate = require('@google-cloud/translate');
const projectId = 'translate-201203';

// Instantiates a client
const translate = new Translate({
    projectId: projectId,
    keyFilename: __dirname +  '/../gcloud-key.json'
});


router.get('/toEn', (req, res) => {
    let text = req.query.char;
    let target = 'en';

    console.log(text);
    translate
        .translate(text, target)
        .then(results => {
            console.log(JSON.stringify(results));
            let translations = results[0];
            console.log(translations);
            res.send(translations);
        })
        .catch(err => {
            console.error('ERROR:', err);
        });
});

module.exports = router;
