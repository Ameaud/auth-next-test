import { sign } from "jsonwebtoken";
import { serialize } from "cookie";

const secret = "process.env.SECRET";

export default async function (req, res) {
  const { username, password } = req.body;

  if (username === "admin" && password == "admin") {
    const token = sign(
        {
        exp: Math.floor(Date.now()/1000)+60*60*24*30,
        username:username,
        },
        secret
    )
     const serialized = serialize("jwt",token,{
        
         httpOnly:true,
         secure: process.env.NODE_ENV !== 'development',
         sameSite: 'strict',
         maxAge: 60*60*24*30,
         path:'/',
     });
     res.setHeader("Set-Cookie",serialized);
     res.status(200).json({message:"Success !",isValide:true})
} else {
   return res.json({ message: "Invalid" });
  }
}
