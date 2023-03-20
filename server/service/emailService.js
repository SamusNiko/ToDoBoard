//сервис для работы с почтой (отправка письма с линкой для подтверждения почты)
const nodemailer = require('nodemailer');

class EmailService {
    constructor() {
        this.transporter = nodemailer.createTransport({
            host: process.env.SMTP_HOST,
            port: process.env.SMTP_POPRT,
            secure: true,
            auth: {
                user: process.env.SMTP_USER,
                pass: process.env.SMTP_PASSWORD
            }
        });
    }

    async sendActivationMail(email, link) {
        console.log(email, link, process.env.SMTP_USER, process.env.SMTP_PASSWORD)
        await this.transporter.sendMail({
            from: process.env.SMTP_USER,
            to: email,
            subject: `Активация аккаунта на ${process.env.API_URL}`,
            text: "",
            html:
                `
                <div>
                 <h3>Для активации перейдите по ссылке</h1>
                 <a href="${link}">${link}</a>
                </div>
                `
        }, (err) => {
            console.log(err);
        })
    }
}
module.exports = new EmailService();