const express = require("express");

const authRoutes = require("./routes/auth.js");

const app = express();
const PORT = process.env.PORT || 5000;

require("dotenv").config();

/* 
 const cors = require("cors");
! NEED INSTALL CORS FOR USE THIS METHODES !
 app.use(
    cors({ origin: "*", methods: ["GET", "POST", "DELETE", "UPDATE", "PUT", "PATCH"], }) );
  */

app.use(express.json());
app.use(express.urlencoded());

app.get("/", (req, res) => {
  res.send("Hello express");
});

app.use("/auth", authRoutes);

app.listen(PORT, () => console.log(`Express server listening on port ${PORT}`));
