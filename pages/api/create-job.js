import { MongoClient } from "mongodb";
import nextConnect from "next-connect";
import bodyParser from "body-parser";

const uri = process.env.MONGODB_URI;
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const handler = nextConnect();

handler.use(bodyParser.urlencoded({ extended: false }));

handler.post(async (req, res) => {
  const data = JSON.parse(req.body);
  if (req.method === "POST") {
    try {
      await client.connect();

      const db = client.db("mydatabase");
      const collection = db.collection("mycollection");

      const data2 = {
        title: data.title,
        description: data.description,
        salary: data.salary,
        pic: data.image,
      };
      console.log(data2);

      const result = await collection.insertOne(data2);
      // res.setHeader('X-Custom-Header', '123');
      res.json(result);
      await client.close();
    } catch (error) {
      console.log(error);

      await client.close();

      res.status(500).json({ message: "Internal server error" });
    }
  }
});

export default handler;
