(function(){
Template.__checkName("footer");
Template["footer"] = new Template("Template.footer", (function() {
  var view = this;
  return HTML.Raw('<div class="footer">\n		<div class="user-menu">\n			<div class="welcome">Welcome to the chatroom</div>\n			<div class="welcome">online</div>\n		</div>\n		<div class="input-box">\n			<input type="text" class="input-box_text">\n		</div>\n	</div>');
}));

}).call(this);
