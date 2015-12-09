(function(){
Template.__checkName("app");
Template["app"] = new Template("Template.app", (function() {
  var view = this;
  return [ Spacebars.include(view.lookupTemplate("header")), "\n	", HTML.DIV({
    "class": "main"
  }, "\n		", Spacebars.include(view.lookupTemplate("listings")), "\n		", Spacebars.include(view.lookupTemplate("yield")), "\n	"), "\n	", Spacebars.include(view.lookupTemplate("footer")) ];
}));

}).call(this);
