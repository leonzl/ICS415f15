if (Meteor.isClient) {
	Deps.autorun(function () {
		if(!Meteor.userId()) {
			Session.set('channel', 'global');
			$(".intro").text('global');
		}
	});
}

Template.messages.helpers({
	messages: Messages.find({})
});

Accounts.ui.config({
	passwordSignupFields: 'USERNAME_AND_EMAIL'
})

Template.listings.helpers({
	channels: function () {
		return Channels.find();
	}
});

Meteor.subscribe('messages');
Meteor.subscribe('allUsernames');

Meteor.startup(function() {
	Session.set('channel', 'global');
});

Template.registerHelper("usernameFromId", function (userId) {
	var user = Meteor.users.findOne({_id: userId});
	if (typeof user === "undefined") {
		return "Guest";
	}
	if (typeof user.services.github !== "undefined") {
		return user.services.github.username;
	}
	return user.username;
});

Template.channel.events({
	'click .channel': function (e) {
		if(Meteor.userId() == null) {
			Session.set('channel', 'global');
			$(".intro").text('global');
		}
		else {
			Session.set('channel', this.name);
			$(".intro").text(this.name);
		}
	}
});

Template.registerHelper("timestampToTime", function (timestamp) {
	var date = new Date(timestamp);
	var hours = date.getHours();
	var minutes = "0" + date.getMinutes();
	var seconds = "0" + date.getSeconds();
	return hours + ':' + minutes.substr(minutes.length-2) + ':' + seconds.substr(seconds.length-2);
});

Template.channel.helpers({
	active: function () {
		if (Session.get('channel') === this.name) {
			return "active";
		} else {
			return "";
		}
	}
});



Template.messages.onCreated(function() {
	var self = this;
	self.autorun(function() {
		self.subscribe('messages', Session.get('channel'));
	});
});