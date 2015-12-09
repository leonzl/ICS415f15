(function(){

/////////////////////////////////////////////////////////////////////////
//                                                                     //
// client/startup/subscribe.js                                         //
//                                                                     //
/////////////////////////////////////////////////////////////////////////
                                                                       //
Meteor.subscribe('channels');                                          // 1
Meteor.subscribe('messages');                                          // 2
                                                                       //
Meteor.startup(function () {                                           // 4
    Session.set('channel', 'global');                                  // 5
});                                                                    //
/////////////////////////////////////////////////////////////////////////

}).call(this);
