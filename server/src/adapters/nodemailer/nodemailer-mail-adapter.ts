import { MailAdapter, SendMainData } from "../mail-adapter";
import nodemailer from 'nodemailer'

const transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "2de5410a6f1b3b",
    pass: "17a5139c54388c"
  }
});


export class NodemailerMailAdapter implements MailAdapter {
  async sendMail({ subject, body }: SendMainData) {
    await transport.sendMail({
      from: ' By: Melo Email <melo@feedget.com',
      to: 'Emanuel Melo <emanuelmelo0049538@gmail.com>',
      subject,
      html: body
    });
  };
}