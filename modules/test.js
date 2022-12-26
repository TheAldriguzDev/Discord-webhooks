import {Discord} from "../modules/discord.js"

let task = new Discord("ENTER_YOUR_WEBHOOK")
let webhookPayload = {
    author: {
        name: "Test name",
        //icon_url: "URL_HERE",
        //url: "URL_HERE",
    },
    title: `Test was successful`,
    color: 16711935, // decimal color code
    //url: URL_HERE,
    timestamp: new Date().toISOString(),
    footer: {
        text: "Your_Name - 0.01",
    },
    fields: [
        // you can add other fields
        {
            name: "Test",
            value: "Success",
            inline: true,
        }
    ],
    //thumbnail: {
    //    url: URL_HERE,
    //},
}
task.sendWehook(webhookPayload)
