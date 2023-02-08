import jwt from "jsonwebtoken";
import { secretPhrase } from "../db/pgdb.js";
//incomplete
function authSign(data) {
  return jwt.sign(data, secretPhrase);
}

function verifyToken(tk) {
  return jwt.verify(tk, secretPhrase);
}

function getToken(req) {
  let bearer = req.headers.authorization;
  if(bearer){
    if (bearer?.indexOf("Bearer ") == -1) {
      throw new Error("Not token recived");
    } else {
      const tk = bearer?.replace("Bearer ", "");
      return tk;
    }
  }else{
    throw new Error('No estas autorizado para hacer esto')
  }
}

function decodeHeader(req) {
  return verifyToken(getToken(req));
}

function authenticateJWT(req, res, next) {
  try {
    const headerDecoded = decodeHeader(req);
    const { username, userid } = headerDecoded;
    if (username) {
      req.body.user_logged = userid
      next();
    } else {
      throw new Error("No estas autorizado para hacer esto");
    }
  } catch (error) {
    res.status(401).send({
      message: error.message,
    });
  }
}

export { authSign, authenticateJWT };
