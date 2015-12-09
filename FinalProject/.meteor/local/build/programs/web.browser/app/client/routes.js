(function(){

/////////////////////////////////////////////////////////////////////////
//                                                                     //
// client/routes.js                                                    //
//                                                                     //
/////////////////////////////////////////////////////////////////////////
                                                                       //
Router.configure({                                                     // 1
    layoutTemplate: 'app'                                              // 2
});                                                                    //
                                                                       //
Router.route('/', function () {                                        // 5
    this.redirect('/global');                                          // 6
});                                                                    //
                                                                       //
Router.route('/:channel', function () {                                // 9
    this.render('messages');                                           // 10
});                                                                    //
/////////////////////////////////////////////////////////////////////////

}).call(this);
