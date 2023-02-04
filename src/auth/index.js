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
  if (bearer.indexOf("Bearer ") == -1) {
    throw new Error("Not token recived");
  } else {
    const tk = bearer.replace("Bearer ", "");
    return tk;
  }
}

function decodeHeader(req) {
  let tk = getToken(req);
  return verifyToken(tk);
}

function authenticateJWT(req, res, next) {
  try {
    const headerDecoded = decodeHeader(req);
    const { username } = headerDecoded;
    if (username) {
      res.status(200).send({
        message: "si estas autorizado pa",
      });
      next();
    } else {
      throw new Error("No tienes acceso");
    }
  } catch (error) {
    res.status(404).send({
      message: error.message,
      token: headerDecoded,
    });
  }
}

function authTest(req, res, next) {
  const headerDecoded = decodeHeader(req);
  console.log("into authtest");
  try {
    if (headerDecoded) {
      next();
    } else {
      throw new Error("No authorized");
    }
  } catch (error) {
    res.status(401).send({
      message: "Not authorized pa",
    });
  }
}

export { authSign, authenticateJWT, authTest };
