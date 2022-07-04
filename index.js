
const express = require("express");
const router = express.Router();
const rateLimit = require("express-rate-limit");

let rateLimit1= rateLimit({
    windowMs: 12 * 60 * 60 * 1000, // 12 hour duration in milliseconds
    max: 5,
    message: "You exceeded 5 requests in 12 hour limit!",
    headers: true,
  })

router.get("/getLimiting",rateLimit1, function (req, res, next) {
  res.json({message:"welcome on getLimiting ::..."});
});

module.exports = router;