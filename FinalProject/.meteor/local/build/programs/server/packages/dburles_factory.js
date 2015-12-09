(function () {

/* Imports */
var Meteor = Package.meteor.Meteor;
var LocalCollection = Package.minimongo.LocalCollection;
var Minimongo = Package.minimongo.Minimongo;
var _ = Package.underscore._;
var EJSON = Package.ejson.EJSON;
var Random = Package.random.Random;

/* Package-scope variables */
var Factory;

(function(){

//////////////////////////////////////////////////////////////////////////////////////////
//                                                                                      //
// packages/dburles_factory/packages/dburles_factory.js                                 //
//                                                                                      //
//////////////////////////////////////////////////////////////////////////////////////////
                                                                                        //
(function () {                                                                          // 1
                                                                                        // 2
///////////////////////////////////////////////////////////////////////////////////     // 3
//                                                                               //     // 4
// packages/dburles:factory/lib/factory.js                                       //     // 5
//                                                                               //     // 6
///////////////////////////////////////////////////////////////////////////////////     // 7
                                                                                 //     // 8
var factories = {};                                                              // 1   // 9
                                                                                 // 2   // 10
Factory = function(name, collection, attributes) {                               // 3   // 11
  this.name = name;                                                              // 4   // 12
  this.collection = collection;                                                  // 5   // 13
  this.attributes = attributes;                                                  // 6   // 14
  this.afterHooks = [];                                                          // 7   // 15
  this.sequence = 0;                                                             // 8   // 16
};                                                                               // 9   // 17
                                                                                 // 10  // 18
Factory.define = function(name, collection, attributes) {                        // 11  // 19
  factories[name] = new Factory(name, collection, attributes);                   // 12  // 20
  return factories[name];                                                        // 13  // 21
};                                                                               // 14  // 22
                                                                                 // 15  // 23
Factory.get = function(name) {                                                   // 16  // 24
  var factory = factories[name];                                                 // 17  // 25
  if (! factory) throw new Error("Factory: There is no factory named " + name);  // 18  // 26
  return factory;                                                                // 19  // 27
};                                                                               // 20  // 28
                                                                                 // 21  // 29
Factory.build = function(name, attributes, options) {                            // 22  // 30
  var factory = Factory.get(name);                                               // 23  // 31
  var base = {};                                                                 // 24  // 32
  attributes = attributes || {};                                                 // 25  // 33
  options = options || {};                                                       // 26  // 34
                                                                                 // 27  // 35
  // "raw" attributes without functions evaluated, or dotted properties resolved // 28  // 36
  attributes = _.extend(base, factory.attributes, attributes);                   // 29  // 37
                                                                                 // 30  // 38
  var result = {};                                                               // 31  // 39
                                                                                 // 32  // 40
  // either create a new factory and return its _id                              // 33  // 41
  // or return a 'fake' _id (since we're not inserting anything)                 // 34  // 42
  var makeRelation = function(name) {                                            // 35  // 43
    if (options.insert)                                                          // 36  // 44
      return Factory.create(name)._id;                                           // 37  // 45
    else                                                                         // 38  // 46
      // fake an id on build                                                     // 39  // 47
      return Random.id();                                                        // 40  // 48
  };                                                                             // 41  // 49
                                                                                 // 42  // 50
  factory.sequence += 1;                                                         // 43  // 51
                                                                                 // 44  // 52
  var walk = function(record, object) {                                          // 45  // 53
    _.each(object, function(value, key) {                                        // 46  // 54
      // is this a Factory instance?                                             // 47  // 55
      if (value instanceof Factory) {                                            // 48  // 56
        value = makeRelation(value.name);                                        // 49  // 57
      } else if (_.isFunction(value)) {                                          // 50  // 58
        var fnRes = value.call(result, {                                         // 51  // 59
          sequence: function(fn) {                                               // 52  // 60
            return fn(factory.sequence);                                         // 53  // 61
          }                                                                      // 54  // 62
        });                                                                      // 55  // 63
        // does executing this function return a Factory instance?               // 56  // 64
        value = (fnRes instanceof Factory) ? makeRelation(fnRes.name) : fnRes;   // 57  // 65
      // if an object literal is passed in, traverse deeper into it              // 58  // 66
      } else if (Object.prototype.toString.call(value) === '[object Object]') {  // 59  // 67
        record[key] = record[key] || {};                                         // 60  // 68
        return walk(record[key], value);                                         // 61  // 69
      }                                                                          // 62  // 70
                                                                                 // 63  // 71
      var modifier = { $set: {} };                                               // 64  // 72
      modifier.$set[key] = value;                                                // 65  // 73
                                                                                 // 66  // 74
      LocalCollection._modify(record, modifier);                                 // 67  // 75
    });                                                                          // 68  // 76
  };                                                                             // 69  // 77
                                                                                 // 70  // 78
  walk(result, attributes);                                                      // 71  // 79
                                                                                 // 72  // 80
  result._id = Random.id();                                                      // 73  // 81
  return result;                                                                 // 74  // 82
};                                                                               // 75  // 83
                                                                                 // 76  // 84
Factory._create = function(name, doc) {                                          // 77  // 85
  var collection = Factory.get(name).collection;                                 // 78  // 86
  var insertId = collection.insert(doc);                                         // 79  // 87
  var record = collection.findOne(insertId);                                     // 80  // 88
  return record;                                                                 // 81  // 89
};                                                                               // 82  // 90
                                                                                 // 83  // 91
Factory.create = function(name, attributes) {                                    // 84  // 92
  attributes = attributes || {};                                                 // 85  // 93
  var doc = Factory.build(name, attributes, { insert: true });                   // 86  // 94
  var record = Factory._create(name, doc);                                       // 87  // 95
                                                                                 // 88  // 96
  _.each(Factory.get(name).afterHooks, function(cb) {                            // 89  // 97
    cb(record);                                                                  // 90  // 98
  });                                                                            // 91  // 99
                                                                                 // 92  // 100
  return record;                                                                 // 93  // 101
};                                                                               // 94  // 102
                                                                                 // 95  // 103
Factory.extend = function(name, attributes) {                                    // 96  // 104
  attributes = attributes || {};                                                 // 97  // 105
  return _.extend(_.clone(Factory.get(name).attributes), attributes);            // 98  // 106
};                                                                               // 99  // 107
                                                                                 // 100
Factory.prototype.after = function(fn) {                                         // 101
  this.afterHooks.push(fn);                                                      // 102
  return this;                                                                   // 103
};                                                                               // 104
                                                                                 // 105
///////////////////////////////////////////////////////////////////////////////////     // 114
                                                                                        // 115
}).call(this);                                                                          // 116
                                                                                        // 117
//////////////////////////////////////////////////////////////////////////////////////////

}).call(this);


/* Exports */
if (typeof Package === 'undefined') Package = {};
Package['dburles:factory'] = {
  Factory: Factory
};

})();

//# sourceMappingURL=dburles_factory.js.map
