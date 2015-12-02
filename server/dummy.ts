// TODO use export or SystemJS (not available now so global namespace is used)
DummyItems = new Mongo.Collection<DummyItem>("dummy");

Meteor.publish('allItems', function() {
  DummyItems.insert({name: "asdasd"});
  return DummyItems.find();
});