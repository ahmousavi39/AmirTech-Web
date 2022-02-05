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
    function insertComment(comment) {
        dbo.collection(process.env.DB_COLLECTION).insertOne(comment, function (err, res) {
            if (err) throw err;
            console.log("1 document inserted");
            db.close();
        });

    }
});

app.get('/api/all-posts', function (req, res) {
    if (bcrypt.compareSync(process.env.API_PASSWORD, req.headers.pass)) {
        res.send(posts)
    } else {
        res.send('Access Denied!')
    }
})


app.get('/api/post-comment', function (req, res) {
    if (bcrypt.compareSync(process.env.API_PASSWORD, req.headers.pass)) {
        console.log(req.headers.lastCommentId, req.headers.comment, req.headers.name, req.headers.id);
    } else {
        res.send('Access Denied!')
    }
})

app.listen(27019, '127.0.0.1', () => {
    console.log(`Example app listening at http://localhost:27019`)
})



