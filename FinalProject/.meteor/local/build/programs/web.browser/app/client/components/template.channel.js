(function(){
Template.__checkName("channel");
Template["channel"] = new Template("Template.channel", (function() {
  var view = this;
  return HTML.LI({
    "class": function() {
      return [ "channel ", Spacebars.mustache(view.lookup("active")) ];
    }
  }, "\n		", HTML.A({
    "class": "channel_name",
    href: function() {
      return [ "/", Spacebars.mustache(view.lookup("name")) ];
    }
  }, "\n			", HTML.SPAN("\n    			", HTML.Raw('<span class="prefix">#</span>'), "\n    			", HTML.SPAN({
    "class": "channel-name"
  }, Blaze.View("lookup:name", function() {
    return Spacebars.mustache(view.lookup("name"));
  })), "\n			"), "\n		"), "\n	");
}));

}).call(this);
