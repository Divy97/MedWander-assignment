const express = require("express");
const app = express();
const port = 8080;

app.get("/api/v1/hello", (req, res) => {
  res.status(200).json({
    status: "success",
    message: "Hello",
  });
});

app.listen(port, () => {
  console.log(`Server is running on PORT : ${port}`);
});
