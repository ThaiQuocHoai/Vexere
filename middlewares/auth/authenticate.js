const jwt = require("jsonwebtoken");

const authenticate = (req, res, next) => {
  const token = req.header("token");
  try {
    const decode = jwt.verify(token, "private_key");
    if (decode) {
      req.user = decode;
      return next();
    } else res.status(500).send("Not authenticate !!!");
  } catch (error) {
    res.status(500).send("Not authenticate !!!");
  }
};

module.exports = authenticate;
