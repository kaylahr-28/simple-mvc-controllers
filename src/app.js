//like server.js
const path = require('path');
const express = require('express');
const compression = require('compression');
const favicon = require('serve-favicon');

const router = require('./router.js');

const port = process.env.PORT || process.env.NODE_PORT || 3000;

const app = express();

//compresses files to make requests a bit quicker
app.use(compression());

app.use('/assets', express.static(path.resolve(`${__dirname}/../client/`)));

//set up body parse process
//send nested json objs acrosss your form
//ex name-'items[]' -> send objects to name value
app.use(express.urlencoded({ extended:true }));

app.use(express.json());

app.use(favicon(`${__dirname}/../client/img/favicon.png`));

router(app);

//listen to request
app.listen(port, (err) => {
    if (err) {
        throw err;
    }
    console.log(`Listening on port ${port}`);
})
