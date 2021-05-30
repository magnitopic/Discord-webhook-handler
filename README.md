# Discord-webhook-handler
This NodeJS proyect alows you to customize the **webhook** messages that **GitHub** sends **Discord**.

__New to webhooks?__ You can learn more about them in [this YouTube video](https://youtu.be/41NOoEz3Tzc).
# Install
## The *.env* file
The *.env.example* file contains the name of the enviroment variable that is used to connect to Discord.
You can copy/paste it and rename it to *__.env__*. Inside paste the Discord webhook url.
## Install dependencies
Install the paquetes the project needs by running in your console:
```bash
npm install
```
## Run
Run the server by runing in your console:
```bash
npm run dev
```
Server will run on port 5000.
## Connect to GitHub
You can now create a webhook in your GitHub repository and enter your server's public url /github. Something like: _yourServerUrl.com/github_