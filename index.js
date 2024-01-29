import express from 'express';
import bodyParser from "body-parser";
import Email from "./mail.js";

const app = express();

app.use(bodyParser.json());
app.get("/", (req, res) => {
    res.send(`Requested from ${req.hostname} : <h1>Hello World</h1>`);
});
app.post("/mail", async (req, res) => {
    const {email,message,name} = req.body;
    return res.json({result: await Email.send(email, message, name)})
});

app.listen(3000, () => console.log('Server is running on port :3000'));