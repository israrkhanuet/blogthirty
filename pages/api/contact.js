const fs = require("fs");

export default function handler(req, res) {
  console.log(req.body);
  res.status(200).json({ text: "Done" });

  // Sample JSON data
  const newData = {
    name: req.body.name,
    email: req.body.email,
    message: req.body.message,
  };

  // Read existing JSON data from the file
  fs.readFile("data.json", (err, data) => {
    if (err) {
      console.log("Error reading file:", err);
    } else {
      // Parse the existing JSON data
      const jsonData = JSON.parse(data);

      // Add the new data to the existing JSON object
      jsonData.push(newData);

      // Convert the updated JSON object to a string
      const updatedJsonData = JSON.stringify(jsonData);

      // Write the updated JSON data back to the file
      fs.writeFile("data.json", updatedJsonData, (err) => {
        if (err) {
          console.log("Error writing file:", err);
        } else {
          console.log("File saved successfully!");
        }
      });
    }
  });
}
