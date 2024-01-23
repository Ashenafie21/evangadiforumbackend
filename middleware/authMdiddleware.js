const {StatusCodes} =require('http-status-codes')
const jwt = require('jsonwebtoken')


async function authMiddleware(req, res, next) {
   const authHeader= req.headers.authorization
if (!authHeader || !authHeader.startsWith("Bearer")) {
  return res
    .status(StatusCodes.UNAUTHORIZED)
    .json({ msg: "Authentication invalid" });
}
const token = authHeader.split(' ')[1]
// console.log(authHeader);
// console.log(token);
try {
    const { username, consumerid } = jwt.verify(token, process.env.JWT_SECRET);
    // return res.status(StatusCodes.OK).json({data}) // check if the it returns the data
      req.user = { username, consumerid }
      next()
} catch (error) {
    return res
      .status(StatusCodes.UNAUTHORIZED)
      .json({ msg: "Authentication invalid" });
}
}

module.exports = authMiddleware;
