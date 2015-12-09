(function(){

/////////////////////////////////////////////////////////////////////////
//                                                                     //
// client/input.js                                                     //
//                                                                     //
/////////////////////////////////////////////////////////////////////////
                                                                       //
Template.footer.events({                                               // 1
    'keypress input': function (e) {                                   // 2
        if (Meteor.userId() == null && Session.get('channel') == "members" || Roles.userIsInRole(Meteor.userId(), ["muted"])) {
            return;                                                    // 4
        } else {                                                       //
            var inputVal = $('.input-box_text').val();                 // 7
            if (!!inputVal) {                                          // 8
                var charCode = typeof e.which == "number" ? e.which : e.keyCode;
                if (charCode == 13) {                                  // 10
                    e.stopPropagation();                               // 11
                    Meteor.call('newMessage', {                        // 12
                        text: inputVal,                                // 13
                        channel: Session.get('channel')                // 14
                    });                                                //
                    $('.input-box_text').val("");                      // 16
                    return false;                                      // 17
                }                                                      //
            }                                                          //
        }                                                              //
    }                                                                  //
});                                                                    //
/////////////////////////////////////////////////////////////////////////

}).call(this);
