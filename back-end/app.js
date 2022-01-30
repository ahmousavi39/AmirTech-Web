const MongoClient = require("mongodb").MongoClient;
const cors = require('cors');
const express = require('express')
const app = express();
require('dotenv').config();
const bcrypt = require('bcrypt');

let posts = [];

app.use(cors());

MongoClient.connect(process.env.DB_HOST, function (err, db) {
    if (err) throw err;
    const dbo = db.db(process.env.DB_NAME);
    dbo.collection(process.env.DB_COLLECTION).find({}).toArray(function (err, result) {
        if (err) throw err;
        posts = result;
        db.close();
    });
});

app.get('/api/all-posts', function (req, res) {
    if (bcrypt.compareSync(process.env.API_PASSWORD, req.headers.pass)) {
        res.send(posts)
    } else {
        res.send('Access Denied!')
    }
})


app.listen(27019,'127.0.0.1', () => {
    console.log(`Example app listening at http://localhost:27019`)
})
