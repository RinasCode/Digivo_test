const express = require('express');
const redis = require('redis');
const mysql = require('mysql');
const app = express();
const port = 3000; 

const client = redis.createClient({
    url: 'redis://localhost:6379' 
});

client.connect()
    .then(() => console.log('Connected to Redis!'))
    .catch((err) => console.error('Redis connection error', err));

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root', 
    password: '', 
    database: 'social_media' 
});

db.connect((err) => {
    if (err) throw err;
    console.log('Connected to MySQL Database!');
});

app.get('/feed', async (req, res) => {
    const userId = req.query.userId;

    try {
        const data = await client.get(`feed:${userId}`);
        if (data) {
            return res.json(JSON.parse(data));
        } else {
            const query = `
                SELECT Post.*, User.username
                FROM Post
                JOIN Follow ON Post.user_id = Follow.following_id
                JOIN User ON Post.user_id = User.id
                WHERE Follow.follower_id = ?
                ORDER BY Post.created_at DESC
                LIMIT 10 OFFSET 0;`; 

            db.query(query, [userId], (error, results) => {
                if (error) throw error;
                client.setex(`feed:${userId}`, 3600, JSON.stringify(results));
                res.json(results);
            });
        }
    } catch (err) {
        console.error(err);
        res.status(500).send('Error retrieving feed');
    }
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
