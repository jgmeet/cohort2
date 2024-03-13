const express = require('express')
const app = express();

app.use(express.json())

app.get('/signin', (req, req) => {
    const user = req.body.user
    const pass = req.body.pass

    
})