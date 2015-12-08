Router.configure({
    layoutTemplate: 'app'
});

Router.route('/', function () {
    this.redirect('/global');
});

Router.route('/:channel', function () {
    this.render('messages');
});