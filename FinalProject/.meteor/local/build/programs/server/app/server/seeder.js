(function(){

/////////////////////////////////////////////////////////////////////////
//                                                                     //
// server/seeder.js                                                    //
//                                                                     //
/////////////////////////////////////////////////////////////////////////
                                                                       //
Meteor.startup(function () {                                           // 1
                                                                       //
  console.log('Running server startup code...');                       // 3
                                                                       //
  Channels.remove({});                                                 // 5
                                                                       //
  Channels.insert({                                                    // 7
    name: "global"                                                     // 8
  });                                                                  //
  Channels.insert({                                                    // 10
    name: "members"                                                    // 11
  });                                                                  //
                                                                       //
  Factory.define('message', Messages, {                                // 14
    text: function () {                                                // 15
      return Fake.sentence();                                          // 16
    },                                                                 //
    user: Meteor.users.findOne()._id,                                  // 18
    timestamp: Date.now(),                                             // 19
    channel: 'global'                                                  // 20
  });                                                                  //
                                                                       //
  Factory.define('message', Messages, {                                // 23
    text: function () {                                                // 24
      return Fake.sentence();                                          // 25
    },                                                                 //
    user: Meteor.users.findOne()._id,                                  // 27
    timestamp: Date.now()                                              // 28
  });                                                                  //
});                                                                    //
/////////////////////////////////////////////////////////////////////////

}).call(this);

//# sourceMappingURL=seeder.js.map
