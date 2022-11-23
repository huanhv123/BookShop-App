const admin = require("firebase-admin");
var serviceAccount = require("../keys/key_test.json");
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});
const db=admin.firestore(); 
module.exports={db}  