require('dotenv').config();
const express = require ('express');
const bodyParser = require ('body-parser');
const messagesCtrl = require ('./messagesCtrl');

let {SERVER_PORT} = process.env;

const app = express();

app.use(bodyParser.json());

app.get('/api/messages', messagesCtrl.gatAllMessages);
app.post('/api/messages', messagesCtrl.createMessage)

app.listen(SERVER_PORT, ()=>{
    console.log(`server listening on port ${SERVER_PORT}`);
});