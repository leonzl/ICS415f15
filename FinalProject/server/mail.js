Meteor.startup(function () {
  smtp = {
    username: 'leonz@hawaii.edu',
    password: 'V8Xu0sQbVM8KTL278C3sjg',
    server:   'smtp.mandrillapp.com',
    port: 587
  };

  process.env.MAIL_URL = 'smtp://' + encodeURIComponent(smtp.username) + ':' + encodeURIComponent(smtp.password) + '@' + encodeURIComponent(smtp.server) + ':' + smtp.port;
});