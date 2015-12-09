(function(){

/////////////////////////////////////////////////////////////////////////
//                                                                     //
// client/app.js                                                       //
//                                                                     //
/////////////////////////////////////////////////////////////////////////
                                                                       //
if (Meteor.isClient) {                                                 // 1
	Deps.autorun(function () {                                            // 2
		if (!Meteor.userId()) {                                              // 3
			Session.set('channel', 'global');                                   // 4
			$(".intro").text('global');                                         // 5
		}                                                                    //
	});                                                                   //
}                                                                      //
                                                                       //
Template.messages.helpers({                                            // 10
	messages: Messages.find({})                                           // 11
});                                                                    //
                                                                       //
Accounts.ui.config({                                                   // 14
	passwordSignupFields: 'USERNAME_AND_EMAIL'                            // 15
});                                                                    //
                                                                       //
Template.listings.helpers({                                            // 18
	channels: function () {                                               // 19
		return Channels.find();                                              // 20
	}                                                                     //
});                                                                    //
                                                                       //
Meteor.subscribe('messages');                                          // 24
Meteor.subscribe('allUsernames');                                      // 25
                                                                       //
Meteor.startup(function () {                                           // 27
	Session.set('channel', 'global');                                     // 28
});                                                                    //
                                                                       //
Template.registerHelper("usernameFromId", function (userId) {          // 31
	var user = Meteor.users.findOne({ _id: userId });                     // 32
	if (typeof user === "undefined") {                                    // 33
		return "Guest";                                                      // 34
	}                                                                     //
	if (typeof user.services.github !== "undefined") {                    // 36
		return user.services.github.username;                                // 37
	}                                                                     //
	return user.username;                                                 // 39
});                                                                    //
                                                                       //
Template.channel.events({                                              // 42
	'click .channel': function (e) {                                      // 43
		if (Meteor.userId() == null) {                                       // 44
			Session.set('channel', 'global');                                   // 45
			$(".intro").text('global');                                         // 46
		} else {                                                             //
			Session.set('channel', this.name);                                  // 49
			$(".intro").text(this.name);                                        // 50
		}                                                                    //
	}                                                                     //
});                                                                    //
                                                                       //
Template.registerHelper("timestampToTime", function (timestamp) {      // 55
	var date = new Date(timestamp);                                       // 56
	var hours = date.getHours();                                          // 57
	var minutes = "0" + date.getMinutes();                                // 58
	var seconds = "0" + date.getSeconds();                                // 59
	return hours + ':' + minutes.substr(minutes.length - 2) + ':' + seconds.substr(seconds.length - 2);
});                                                                    //
                                                                       //
Template.channel.helpers({                                             // 63
	active: function () {                                                 // 64
		if (Session.get('channel') === this.name) {                          // 65
			return "active";                                                    // 66
		} else {                                                             //
			return "";                                                          // 68
		}                                                                    //
	}                                                                     //
});                                                                    //
                                                                       //
Template.messages.onCreated(function () {                              // 75
	var self = this;                                                      // 76
	self.autorun(function () {                                            // 77
		self.subscribe('messages', Session.get('channel'));                  // 78
	});                                                                   //
});                                                                    //
/////////////////////////////////////////////////////////////////////////

}).call(this);
