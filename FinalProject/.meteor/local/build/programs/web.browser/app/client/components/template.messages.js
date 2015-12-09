(function(){
Template.__checkName("messages");
Template["messages"] = new Template("Template.messages", (function() {
  var view = this;
  return HTML.DIV({
    "class": "message-history"
  }, "\n		", Blaze.Each(function() {
    return Spacebars.call(view.lookup("messages"));
  }, function() {
    return [ "\n			", Blaze._TemplateWith(function() {
      return {
        text: Spacebars.call(view.lookup("text")),
        timestamp: Spacebars.call(view.lookup("timestamp")),
        user: Spacebars.call(view.lookup("user"))
      };
    }, function() {
      return Spacebars.include(view.lookupTemplate("message"));
    }), "\n		" ];
  }), "\n	");
}));

}).call(this);
