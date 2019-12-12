import sgMail from '@sendgrid/mail';

const sendMail = email => {
  sgMail.setApiKey(process.env.SENDGRID_API_KEY);
  sgMail.send(email);
};

const sendSecretMail = (address, secret) => {
  const email = {
    from: 'admin@instaclone.com',
    to: address,
    subject: '🔒Email Confirm Secret from InstaClone',
    html: `Hello! Your email confirm secret is ${secret}.<br />Copy & Paste on the web/app to confirm your email.`
  };

  sendMail(email);
};

export default sendSecretMail;
