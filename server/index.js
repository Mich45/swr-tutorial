const express = require('express');
const cors = require('cors')
const app = express();

app.use(cors());
const data = [
    {
        "name": "Kim Doe",
        "age": 23,
        "avatar": "https://randomuser.me/api/portraits/women/44.jpg"
    },
    {
        "name": "Mary Jane",
        "age": 25,
        "avatar": "https://randomuser.me/api/portraits/women/50.jpg"
    },
    {
        "name": "Ken Joe",
        "age": 24,
        "avatar": "https://randomuser.me/api/portraits/women/18.jpg"
    },
    {
        "name": "John Doe",
        "age": 24,
        "avatar": "https://randomuser.me/api/portraits/women/18.jpg"
    },
    {
        "name": "Peter Pan",
        "age": 24,
        "avatar": "https://randomuser.me/api/portraits/women/21.jpg"
    }
];

app.get('/', (req, res) => {
    res.json(data);
})

app.listen(3001, () => {
    console.log('App listening on port 3001');
});
