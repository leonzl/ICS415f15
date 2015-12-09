(function(){
Template.__checkName("listings");
Template["listings"] = new Template("Template.listings", (function() {
  var view = this;
  return HTML.DIV({
    "class": "listings"
  }, "\n		", HTML.DIV({
    "class": "listings_channels"
  }, "\n			", HTML.Raw('<h2 class="listings_header">Channels</h2>'), "\n			", HTML.UL({
    "class": "channel_list"
  }, "\n				", Blaze.Each(function() {
    return Spacebars.call(view.lookup("channels"));
  }, function() {
    return [ "\n					", Blaze._TemplateWith(function() {
      return {
        name: Spacebars.call(view.lookup("name"))
      };
    }, function() {
      return Spacebars.include(view.lookupTemplate("channel"));
    }), "\n				" ];
  }), "\n			"), "\n		"), HTML.Raw('\n		<div class="listings_direct-messages"></div>\n		<p class="disclaimer">Based off the slack clone from the Meteor tutorials.</p>\n	'));
}));

}).call(this);
