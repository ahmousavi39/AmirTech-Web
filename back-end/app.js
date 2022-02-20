const MongoClient = require("mongodb").MongoClient;
const cors = require('cors');
const express = require('express')
const app = express();
require('dotenv').config();
const bcrypt = require('bcrypt');
const { ObjectId } = require('mongodb');


app.use(cors());

app.get('/api/all-posts', function (req, res) {
    if (bcrypt.compareSync(process.env.API_PASSWORD, req.headers.pass)) {
        MongoClient.connect(process.env.DB_HOST, function (err, db) {
            if (err) throw err;

            const dbo = db.db(process.env.DB_NAME);
            const coll = dbo.collection(process.env.DB_COLLECTION);

            coll.find({}).toArray(function (err, result) {
                if (err) throw err;
                res.send(result);
                db.close();
            });
        });
    } else {
        res.send('Access Denied!')
    }
})

app.get('/api/post-comment', function (req, res) {
    if (bcrypt.compareSync(process.env.API_PASSWORD, req.headers.pass)) {
        // Getting the Date
        const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        let date_ob = new Date();
        let minutes = date_ob.getMinutes();
        let hours = date_ob.getHours();
        let date = ("0" + date_ob.getDate()).slice(-2);
        let month = monthNames[("0" + (date_ob.getMonth() + 1)).slice(-2) - 1];
        let year = date_ob.getFullYear();

        // Posting the Comment
        MongoClient.connect(process.env.DB_HOST, function (err, db) {
            if (err) throw err;

            const dbo = db.db(process.env.DB_NAME);
            const coll = dbo.collection(process.env.DB_COLLECTION);

            coll.updateOne(
                { id: req.headers.id },
                { $push: { comments: { id: parseInt(req.headers.lastcommentid) + 1, date: date + ' ' + month + ', ' + year, time: hours + ':' + minutes, content: req.headers.comment, author: req.headers.name } } }
            )

        });
    } else {
        res.send('Access Denied!')
    }
});

app.get('/api/post-post', function (req, res) {
    if (bcrypt.compareSync(process.env.API_PASSWORD, req.headers.pass)) {
        if(req.headers.secret_pass === process.env.API_POSTING_KEY){
        MongoClient.connect(process.env.DB_HOST, function (err, db) {
            if (err) throw err;
            const dbo = db.db(process.env.DB_NAME);
            const coll = dbo.collection(process.env.DB_COLLECTION);
            const date = new Date().toLocaleDateString("en-US", { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });
            const time = new Date().getHours() + ':' + new Date().getMinutes();

            coll.insertOne({
                "_id": new ObjectId(),
                "id": req.headers.id,
                "type": req.headers.type,
                "title": req.headers.title,
                "image": req.headers.image,
                "video": req.headers.video,
                "featured": req.headers.featured,
                "featured_image": req.headers.featured_image,
                "topic": req.headers.topic,
                "summary": req.headers.summary,
                "html": req.headers.html,
                "path": req.headers.path,
                "reading_time": req.headers.reading_time,
                "author": req.headers.author,
                "tags": req.headers.tags.split(','),
                "date": date,
                "time": time,
                "url": req.headers.url,
                "comments": []
            }, { forceServerObjectId: true }, function (err, res) {
                if (err) throw err;
                db.close();
            });
        });
    }else {
        res.send('Access Denied!')
    }
    } else {
        res.send('Access Denied!')
    }
});

app.listen(27019, '127.0.0.1', () => {
    console.log(`Example app listening at http://localhost:27019`)
})


