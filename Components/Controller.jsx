import { useRouter } from "next/router";
import { verify } from "jsonwebtoken";
import { useState, useEffect} from "react";
import axios from "axios";

const secret = "process.env.SECRET";
let jwt;

export default function Controller(props) {
    const router = useRouter();
    useEffect(()=>{
       const res = axios.get("/api/user").then((res)=>{
            const data = res.data;
            jwt = data.jwt;

            if (data.isValide) {               
                try {
                    verify(jwt,secret);
                    const url = router.pathname;
                    if (url.includes("/dashboard") || url.includes("/login")) {
                        router.replace("/");
                        return;
                    } else {
                        return;
                    }
                } catch (error) {
                    console.log("err",error);
                    router.replace("/login");
                    return;
                }
            } else {
                router.replace("/login");
                return;
            }
        })

    },[])

return (
    <>
    {props.children}
    </>
)
  
}
