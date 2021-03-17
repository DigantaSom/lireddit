import nodemailer from 'nodemailer';
import config from 'config';

export const sendEmail = async (to: string, html: string) => {
  // const testAccount = await nodemailer.createTestAccount();
  // console.log('testAccount:', testAccount);

  // create reusable transporter object using the default SMTP transport
  const transporter = nodemailer.createTransport({
    host: 'smtp.ethereal.email',
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: config.get('NODEMAILER_USER'), // generated ethereal user
      pass: config.get('NODEMAILER_PASSWORD'), // generated ethereal password
    },
  });

  // send mail with defined transport object
  const info = await transporter.sendMail({
    from: '"Fred Foo 👻" <foo@example.com>', // sender address
    to,
    subject: 'Change Password',
    html,
  });

  console.log('Message sent: %s', info.messageId);

  console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
};
