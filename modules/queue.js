import {Discord} from "../modules/discord.js"
import chalk from "chalk";

/**
 * Simple queue system to send webhook without being ratelimited
 */

export class Queue {
    
    constructor(){
        this.webhook = [];
        this.webhookData = []
    }

    // function to sleep the checkQueue after sending webhooks
    sleep(ms) { 
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    async checkQueue(){
        while (true){
            if (this.webhook.length != 0){
                console.log("sending")
                let task = new Discord(this.webhook[0]).sendWehook(this.webhookData[0])
                this.webhook.shift()
                this.webhookData.shift()
                await this.sleep(500) // you can set custom ms interval
            } else {
                await this.sleep(1000) // you can set custom ms interval
                console.log(chalk.gray("Waiting webhooks..."))
            }
        }
    }
}
