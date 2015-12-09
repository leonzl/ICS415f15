(function(){

/////////////////////////////////////////////////////////////////////////
//                                                                     //
// server/mail.js                                                      //
//                                                                     //
/////////////////////////////////////////////////////////////////////////
                                                                       //
Meteor.startup(function () {                                           // 1
  smtp = {                                                             // 2
    username: 'leonz@hawaii.edu',                                      // 3
    password: 'V8Xu0sQbVM8KTL278C3sjg',                                // 4
    server: 'smtp.mandrillapp.com',                                    // 5
    port: 587                                                          // 6
  };                                                                   //
                                                                       //
  process.env.MAIL_URL = 'smtp://' + encodeURIComponent(smtp.username) + ':' + encodeURIComponent(smtp.password) + '@' + encodeURIComponent(smtp.server) + ':' + smtp.port;
});                                                                    //
/////////////////////////////////////////////////////////////////////////

}).call(this);

//# sourceMappingURL=mail.js.map
