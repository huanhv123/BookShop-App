const admin = require("firebase-admin");
var serviceAccount = require("../keys/key.json");
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});
const db=admin.firestore(); 
module.exports={db}  