import express from 'express';
import bodyParser from "body-parser";

const app = express();

app.use(bodyParser.json())
app.get("/", (req, res) => {
    res.send(`Requested from ${req.hostname} : <h1>Hello World</h1>`);
});
app.post("/mail", (req, res) => {
    const {email,message,name} = req.body;
    return res.json({result: {email: email, message: message, name: name}})
})