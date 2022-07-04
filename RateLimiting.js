const express = require("express");
const app = express();
const port = 8000;
const router=require('./index')
app.get("/", (req, res) => {
  res.send("Hello World!");
});

//!   windowMs is the window size. In our case, we used a 24 hours window duration in milliseconds.
//! max is the maximum amount of requests a user can make within a given window duration.
// !  message is the response message that a user gets whenever they have exceeded the limit.
// !    headers indicates whether to add headers to show the total number of requests and the duration to wait before trying to make requests again.
 

app.use(router)

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});