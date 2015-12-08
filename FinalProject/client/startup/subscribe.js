Meteor.subscribe('channels');
Meteor.subscribe('messages');

Meteor.startup(function() {
    Session.set('channel', 'global');
});