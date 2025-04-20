import jwt from "jsonwebtoken";

const authUser = async (req, res, next) => {
  const { token } = req.cookies;

  if (!token) {
    return res.json({
      success: false,
      message: "Not Authorized: No Token",
    });
  }

  try {
    const tokenDecode = jwt.verify(token, process.env.JWT_SECRET_KEY);
    if (tokenDecode.id) {
      req.userId = tokenDecode.id;
    } else {
      return res.json({
        success: false,
        message: "Not Authorized",
      });
    }
    next();
  } catch (error) {
    return res.json({
      success: false,
      message: error.message,
    });
  }
};

export default authUser;
