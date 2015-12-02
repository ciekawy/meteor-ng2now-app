/// <reference path="../.meteor/local/build/programs/server/assets/packages/meteortypescript_typescript-libs/definitions/meteor.d.ts" />

interface DummyItem {
  __id?: string;
  name: string;
  content: string;
  count: number;
}

// IDEA may show error below since uses it's own mongo plugins d.ts
var DummyItems: Mongo.Collection<DummyItem>;