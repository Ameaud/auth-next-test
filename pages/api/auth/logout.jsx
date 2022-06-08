import { sign } from "jsonwebtoken";
import { serialize } from "cookie";

export default async function (req, res) {
  const { cookies } = req;
  const jwt = cookies.jwt;
  if (!jwt) {
    res.json({ message: "Not logged!" });
  } else {
    const serialized = serialize("jwt", null, {
      httpOnly: true,
      secure: process.env.NODE_ENV !== "development",
      sameSite: "strict",
      maxAge: -1,
      path: "/",
    });
    res.setHeader("Set-Cookie", serialized);
    res.status(200).json({ message: "Logout successful !" });
  }
}
