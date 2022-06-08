import { NextResponse,NextRequest } from "next/server";
import { verify } from "jsonwebtoken";
import { useRouter } from "next/router";

const secret = process.env.SECRET;

export default async function middleware(req) {
//   const router = useRouter();
//   const { cookies } = req;

//   const jwt = cookies.jwt;
//   const url = req.url;

//   if (url.includes("/dashboard")) {
//     if (jwt === undefined) {
//         //router.push("/dashboard");
//        return NextResponse.redirect("/login");
//     }

//     try {
//       verify(jwt, secret);
//       //return NextResponse.next();
//     } catch (e) {
//       //return NextResponse.redirect("/login");
//     }
//   }
//   //return NextResponse.next();

return new Response("this is test !");
}
