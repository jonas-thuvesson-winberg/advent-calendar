const functions = require("firebase-functions");
const admin = require("firebase-admin");

admin.initializeApp();
let db = admin.firestore();

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
exports.helloWorld = functions.https.onRequest((request, response) => {
  db.collection("ips")
    .doc("192.168.1.1")
    .get()
    .then(x => {
      if (!x.exists) {
        response.send("nope!");
        return null;
      } else {
        response.send("yes!");
        return null;
      }
    })
    .catch(err => response.send("oops error " + err));

  // functions.response.send("Hello from Firebase!");
});
