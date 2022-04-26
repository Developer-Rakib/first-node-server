const express = require('express');
const cors = require('cors');
const app = express()
const port = process.env.PORT || 5000;

app.use(cors())
app.use(express.json())


app.get('/', (req, res) => {
    res.send("hello mama i am coding with node, and my name is rakib, tnx")
})

let users = {
    user: [
        { id: 1, name: "tazulislam", email: "tazulislam@gmail.com" },
        { id: 2, name: "rahatulIslam", email: "rahatulIslam@gmail.com" },
        { id: 3, name: "sultan mahmud", email: "sultan mahmud@gmail.com" },
        { id: 4, name: "yasin Arafat", email: "yasin Arafat@gmail.com" },
        { id: 5, name: "azizul haque", email: "azizul haque@gmail.com" },
    ]
}

app.get('/users', (req, res) => {
    if (req.query.name) {
        const search = req.query.name.toLocaleLowerCase();
        let matched = users.user.filter(user => user.name.toLocaleLowerCase().includes(search))
        res.send(matched)
        console.log(search);
        console.log(matched);
    } else {
        console.log("not mathed");
        res.send(users)
    }
})
app.get('/user/:id', (req, res) => {
    console.log(req.params);
    const id = req.params.id;
    const user = users.user.find(u => u.id == id)
    res.send(user)
})

app.post('/user', (req, res) => {
    // console.log(req.body);
    let user = req.body;
    user.id = users.user.length + 1;
    users.user.push(user)
    console.log(users.user);
    res.send(user)
})

app.listen(port, () => {
    console.log("this is my port ", port);
})
