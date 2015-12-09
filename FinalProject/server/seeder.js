Meteor.startup(function() {

  console.log('Running server startup code...');

  Channels.remove({});

  Channels.insert({
    name: "global"
  });
  Channels.insert({
    name: "members"
  });

  // deactivate lines 15-31 when starting from an empty database
  Factory.define('message', Messages, {
    text: function() {
    	return Fake.sentence();
    },
    user: Meteor.users.findOne()._id,
    timestamp: Date.now(),
    channel: 'global'
  });

  Factory.define('message', Messages, {
    text: function() {
      return Fake.sentence();
    },

    user: Meteor.users.findOne()._id,
    timestamp: Date.now(),
  });
});