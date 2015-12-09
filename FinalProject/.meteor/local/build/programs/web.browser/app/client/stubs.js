(function(){

/////////////////////////////////////////////////////////////////////////
//                                                                     //
// client/stubs.js                                                     //
//                                                                     //
/////////////////////////////////////////////////////////////////////////
                                                                       //
Meteor.methods({                                                       // 1
  newMessage: function (message) {                                     // 2
    message.timestamp = Date.now();                                    // 3
    message.user = Meteor.userId();                                    // 4
    Messages.insert(message);                                          // 5
  }                                                                    //
});                                                                    //
/////////////////////////////////////////////////////////////////////////

}).call(this);
