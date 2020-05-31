const nodemailer = require('nodemailer')
const hbs = require('nodemailer-express-handlebars')
const path = require('path')

const {host, port, user, pass} = require('../config/mail.json')

const transport = nodemailer.createTransport({
    host,
    port,
    auth: { user, pass }
  });

  transport.use('compile', hbs({
    /*viewEngine: 'handlebars',
    viewPath: path.resolve('./src/resources/mail/'),
    extName: '.html',*/

    viewEngine: {
      extName: '.html',
      partialsDir: path.resolve('./scr/resources/mail/'),
      layoutsDir: path.resolve('./scr/resources/mail/'),
      defaultLayout: 'auth/forgot_password.html',
  },
  viewPath: path.resolve('./scr/resources/mail/'),
  extName: '.html'


}));
  module.exports = transport