Meteor.startup(function() {

  console.log('Running server startup code...');

  Channels.remove({});

  Channels.insert({
    name: "global"
  });
  Channels.insert({
    name: "members"
  });

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