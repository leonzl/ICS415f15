(function(){

/////////////////////////////////////////////////////////////////////////
//                                                                     //
// server/publications.js                                              //
//                                                                     //
/////////////////////////////////////////////////////////////////////////
                                                                       //
Meteor.publish('messages', function (channel) {                        // 1
  return Messages.find({ channel: channel });                          // 2
});                                                                    //
                                                                       //
Meteor.publish('channels', function () {                               // 5
  return Channels.find();                                              // 6
});                                                                    //
                                                                       //
Meteor.publish("allUsernames", function () {                           // 9
  return Meteor.users.find({}, { fields: {                             // 10
      "username": 1,                                                   // 11
      "services.github.username": 1                                    // 12
    } });                                                              //
});                                                                    //
/////////////////////////////////////////////////////////////////////////

}).call(this);

//# sourceMappingURL=publications.js.map
