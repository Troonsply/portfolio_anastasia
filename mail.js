import dotenv from "dotenv";
import nodemailer from "nodemailer";

dotenv.config();

const { EMAIL_HOST, EMAIL_HOST_PASSWORD, EMAIL_HOST_USER, EMAIL_PORT } = process.env;

class Email {
    #transporter = null;
    constructor() {
        this.#transporter = this.#getTransporter();
    }
    #getTransporter() {
        return nodemailer.createTransport({
            host: EMAIL_HOST,
            port: EMAIL_PORT,
            secure:false,
            auth: {
                user: EMAIL_HOST_USER,
                pass: EMAIL_HOST_PASSWORD
            }
        })
    }

    async send(reciever,message,name,mail) {
        try {
            const info = await this.#transporter.sendMail({
                from: mail,
                to: reciever,
                subject: "Portfolio Email",
                text: message,
                html:`<p>${message}</p><br><p>${name}</p><p>${mail}</p>`
            })
            return info.messageId;
        } catch(e) {
            return e
        }

    }
}

export default new Email();