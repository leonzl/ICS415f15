(function(){

/////////////////////////////////////////////////////////////////////////
//                                                                     //
// server/account-creation.js                                          //
//                                                                     //
/////////////////////////////////////////////////////////////////////////
                                                                       //
if (Meteor.isServer) {                                                 // 1
    Accounts.onCreateUser(function (options, user) {                   // 2
        user.roles = ["member"];                                       // 3
        if (options.profile) {                                         // 4
            user.profile = options.profile;                            // 5
        }                                                              //
        return user;                                                   // 6
    });                                                                //
}                                                                      //
/////////////////////////////////////////////////////////////////////////

}).call(this);

//# sourceMappingURL=account-creation.js.map
