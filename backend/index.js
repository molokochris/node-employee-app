const express = require("express");
const app = express();
const port = 3000; // You can change the port as needed

app.get("/send-welcome-email", (req, res) => {
  // Handle sending welcome emails here
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
