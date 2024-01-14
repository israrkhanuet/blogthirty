import connectDB from "../../lib/db";
import blogContacts from "../../lib/schemaModels/contactSchema";

connectDB();

export default async function handler(req, res) {
  switch (req.method) {
    case "POST":
      try {
        const { name, email, subject, message } = req.body;
        const newContact = new blogContacts({ name, email, subject, message });
        const savedContact = await newContact.save();
        res.status(200).json(savedContact);
      } catch (error) {
        console.error("Error saving contact:", error.message);
        res.status(500).json({ error: "Server error" });
      }
      break;
    case "GET":
      try {
        const contacts = await blogContacts.find();
        res.status(200).json(contacts);
      } catch (error) {
        console.error("Error fetching contacts:", error.message);
        res.status(500).json({ error: "Server error" });
      }
      break;
    default:
      res.status(405).json({ error: "Method Not Allowed" });
      break;
  }
}
