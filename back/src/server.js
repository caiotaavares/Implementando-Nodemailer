const express = require('express');

require('dotenv').config();

const app = express();

app.use(require('cors')());
app.use(express.json());

app.post('/send', (req, res, next) => {
    const name = req.body.name;
    const age = req.body.age;
    const email = req.body.email;
    const password = req.body.password;
    const confirmpassword = req.body.confirmpassword;
    res.json({
        name,
        age,
        email,
        password,
        confirmpassword
    })

    res.json(req.body);
})

const PORT = process.env.PORT
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`); 
})