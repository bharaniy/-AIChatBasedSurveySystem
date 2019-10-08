var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("ase");
    dbo.collection("professorDetails").findOne({}, function(err, result) {
        if (err) throw err;
        console.log(result.name);
        db.close();
    });
});
