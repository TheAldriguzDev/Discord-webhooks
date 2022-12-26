//import {Discord} from "../modules/discord.js" --> do not include when you are using queue
import {Queue} from "../modules/queue.js"

// create a new queue object and start the queue
let queueTask = new Queue()
queueTask.checkQueue()

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

// you can now push element in the queue
queueTask.webhookData.push(webhookPayload) 
queueTask.webhook.push("YOUR_WEBHOKK_HERE")
