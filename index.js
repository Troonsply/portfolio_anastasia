import express from 'express';
import bodyParser from "body-parser";
import Email from "./mail.js";
import cors from "cors";

const app = express();
const { EMAIL_HOST_USER } = process.env;
app.use(bodyParser.json(),cors());

app.post("/mail", async (req, res) => {
    const {message,name,mail} = req.body;
    return res.json({result: await Email.send(EMAIL_HOST_USER,message, name,mail)})
});

app.listen(3001, () => console.log('Server is running on port :3001'));