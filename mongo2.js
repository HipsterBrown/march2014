var client = require('mongodb').MongoClient;
var settings = 'mongodb://127.0.0.1:27017/node_episodes';

//Step 1 - works
client.connect(settings, function(err, db) {
  if(err) throw err;

  var episodes = db.collection('episodes');
  episodes.drop();

  episodes.insert({title: 'Winter is Coming'}, function(err, docs) {

    episodes.count(function(err, count) {
      console.log('count: ' + count);
    });

    episodes.find().toArray(function(err, results) {
      console.dir(results);
      db.close();
    });
  });

})
