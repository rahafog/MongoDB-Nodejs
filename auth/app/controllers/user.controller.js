const db=require("../models")
exports.allAccess = (req, res) => {
  res.status(200).send("Public Content.");
};
exports.userBoard = (req, res) => {
  res.status(200).send("User Content.");
  /*db.collection("User").find().sort(mysort).toArray(function(err, result) {
    if (err) throw err;
    console.log(result);
    db.close();
  });*/
};
exports.adminBoard = (req, res) => {
  res.status(200).send("Admin Content.");
  /*db.collection("User").drop(function(err, delOK) {
    if (err) throw err;
    if (delOK) console.log("Collection deleted");
    db.close();
  }
 )*/
};
exports.moderatorBoard = (req, res) => {
  res.status(200).send("Moderator Content.");
  /*con.query("SELECT * FROM User", function (err, result, fields) {
    if (err) throw err;
    console.log(result);
  });
 */
};
