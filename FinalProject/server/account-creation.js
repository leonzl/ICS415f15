if(Meteor.isServer){
    Accounts.onCreateUser(function(options, user){
        user.roles = ["member"];
        if (options.profile){
            user.profile = options.profile;}
        return user;
    });
}