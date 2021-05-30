require('dotenv').config()
const express = require('express');
const axios = require("axios").default;

const app = express();
//Midleware for parsing JSON
app.use(express.json());

const port = process.env.PORT || 5000;

//WebHook handeler
app.post("/github", (req, res) => {
    const username = req.body.sender.login;
    const action= req.body.action;
    const full_name=req.body.repository.full_name;
    const avatar_url=req.body.sender.avatar_url;
    const content = `User ${username} just made changes to the ${full_name} repository`;
    axios
        .post(process.env.DISCORD_WEBHOOK_URL, {
            content: content,
            username: username,
            avatar_url: avatar_url,
        })
        .then((discordResponse) => {
            console.log(req.body);
            res.status(204).send();
        })
        .catch((err) => console.error(`Error sending to Discord: ${err}`));
});

app.listen(port, () =>
    console.log(`\nServer runing on port ${port}`)
);