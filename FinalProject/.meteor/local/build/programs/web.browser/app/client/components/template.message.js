(function(){
Template.__checkName("message");
Template["message"] = new Template("Template.message", (function() {
  var view = this;
  return HTML.DIV({
    "class": "message"
  }, "\n		", HTML.A({
    href: "",
    "class": "message_username"
  }, Blaze.View("lookup:usernameFromId", function() {
    return Spacebars.mustache(view.lookup("usernameFromId"), view.lookup("user"));
  })), "\n		", HTML.SPAN({
    "class": "message_timestamp"
  }, Blaze.View("lookup:timestampToTime", function() {
    return Spacebars.mustache(view.lookup("timestampToTime"), view.lookup("timestamp"));
  })), HTML.Raw('\n		<span class="message_star"></span>\n		'), HTML.SPAN({
    "class": "message_content"
  }, Blaze.View("lookup:text", function() {
    return Spacebars.mustache(view.lookup("text"));
  })), "\n	");
}));

}).call(this);
