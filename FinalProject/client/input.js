Template.footer.events({
    'keypress input': function(e) {
        if ((Meteor.userId() == null && Session.get('channel') == "members") || Roles.userIsInRole(Meteor.userId(), ["muted"])) {
            return;
        }
        else {
            var inputVal = $('.input-box_text').val();
            if(!!inputVal) {
                var charCode = (typeof e.which == "number") ? e.which : e.keyCode;
                if (charCode == 13) {
                    e.stopPropagation();
                    Meteor.call('newMessage', {
                        text: inputVal,
                        channel: Session.get('channel')
                    });
                    $('.input-box_text').val("");
                    return false;
                }
            }
        }
    }
});