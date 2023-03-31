const { MongoClient } = require("mongodb");

const uri =
  "mongodb+srv://israrkhanuet:03049756550ij@cluster0.oym3a.mongodb.net/?retryWrites=true&w=majority";
const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

let client;
let clientPromise;

if (!clientPromise) {
  client = new MongoClient(uri, options);
  clientPromise = client.connect();
}

const getCollection = async (collectionName) => {
  const client = await clientPromise;
  const db = client.db("mydatabase");
  return db.collection(collectionName);
};

module.exports = { getCollection };
