Meteor.startup(() => {
  Meteor.methods({
    returnDummyText: function(optionalArg) {
      console.log("called server with arg: ", optionalArg);
      let items = DummyItems.find();
      console.log("items: ", items.fetch());
      DummyItems.insert({name: "some name " + items.count()});
      return "got arg: " + optionalArg + ", and items count: " + items.count();
    }
  })
});