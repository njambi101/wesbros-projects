fetch('https://jsonplaceholder.typicode.com/users')
    .then((res) => res.json())
    .then((data) => console.log(data))


const data = {
    title: "this is title",
    body: "this is body",
    userId : 9
}
fetch('https://jsonplaceholder.typicode.com/posts', {
    method: "post",
    body: JSON.stringify(data),
    headers: {
        "content-type": "application/json"
    }

}).then((res) => res.json())
    .then((data) => console.log(data))








/*const express = require('express')
const app = express();
const port = 3000

app.get('/api', (req, res) => {
    res.json({message: 'welcome to my node.js api'})
});

app.listen(port, () => {
    console.log(`server is listening at http://localhost:${port}`);

});*/ 
