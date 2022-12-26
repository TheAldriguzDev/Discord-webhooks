/**
 * With this file we can easily send webhook in our discord servers!
 * @axios is used to send requests
 * @chalk is used to log colored text
 */

import axios from "axios"
import chalk from "chalk"

console.log(`
█████╗ ██╗     ██████╗ ██████╗ ██╗ ██████╗ ██╗   ██╗███████╗
██╔══██╗██║     ██╔══██╗██╔══██╗██║██╔════╝ ██║   ██║╚══███╔╝
███████║██║     ██║  ██║██████╔╝██║██║  ███╗██║   ██║  ███╔╝ 
██╔══██║██║     ██║  ██║██╔══██╗██║██║   ██║██║   ██║ ███╔╝  
██║  ██║███████╗██████╔╝██║  ██║██║╚██████╔╝╚██████╔╝███████╗
╚═╝  ╚═╝╚══════╝╚═════╝ ╚═╝  ╚═╝╚═╝ ╚═════╝  ╚═════╝ ╚══════╝\n`)
console.log(chalk.blue("----- Welcome in discord webhook handler -----"))

export class Discord {
    constructor(webhook){
        this.webhook = webhook;
    }

    async sendWehook(data){
        if (this.sendWehook && data){
            var params = {
                embeds: [data]
            };
            await axios.post(`${this.webhook}`, 
                JSON.stringify(params),
                {
                    headers: {
                        "accept": "application/json",
                        "accept-language": "en",
                        "content-type": "application/json",
                        "sec-ch-ua": "\"Chromium\";v=\"104\", \" Not A;Brand\";v=\"99\", \"Google Chrome\";v=\"104\"",
                        "sec-ch-ua-mobile": "?0",
                        "sec-ch-ua-platform": "\"macOS\"",
                        "sec-fetch-dest": "empty",
                        "sec-fetch-mode": "cors",
                        "sec-fetch-site": "cross-site"
                    }
                }).then(res => {
                    switch (res.status){
                        case 429:
                            console.log(chalk.yellow("Error while sending the webhook! [Ratelimited]"))
                            // code to handle ratelimit
                            break
                        case 204:
                            console.log(chalk.green("Webhook has been sent on discord! [Success]"))
                            break
                        default:
                            console.log(res.status)
                            console.log(chalk.cyan("Unknow response status code! [Unknow]"))
                            break
                    }
                }).catch(res => {
                    console.log(chalk.red("An error occured while sending the webhook! Please try again [Error]"))
                    /**
                     * We could use res.data / res.status (if exist) to check the error, handle it and retry
                     */
                })
        } else {
            console.log(chalk.red("Error while sending webhook! Make sure to pass the webhook while creating the class [Error]"))
        }
    }
}