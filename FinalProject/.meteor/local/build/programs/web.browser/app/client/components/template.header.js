(function(){
Template.__checkName("header");
Template["header"] = new Template("Template.header", (function() {
  var view = this;
  return HTML.DIV({
    "class": "header"
  }, "\n		", HTML.DIV({
    "class": "team-menu"
  }, Spacebars.include(view.lookupTemplate("loginButtons"))), HTML.Raw('\n		<div class="channel-menu">\n			<span class="channel-menu_name">\n				<span class="channel-menu_prefix">#</span>\n				<span class="intro">global</span>\n			</span>\n			<br>\n			<a href="http://localhost:3000/">Chatroom |</a>\n			<a href="http://localhost/ICS415f15/rules.html">Rules |</a>\n			<a href="http://localhost/ICS415f15/about.html">About</a>\n		</div>\n	'));
}));

}).call(this);
