import Layout from "../Layout/Layout";
import axios from "axios";
import { useState } from "react";
import { useRouter } from "next/router";

export default function dashboard() {
  const [username, setName] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const submit = async (e)=> {
    e.preventDefault();
    const data = {username,password};
    const login = await axios.post("/api/auth/login", data, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (login.status === 200 && login.data.isValide) {
      router.replace("/");
    }
  }

  return (
    <Layout>
      {/* <!-- Content --> */}

      <div>
        Dashboard
      </div>

      {/* <!-- / Content --> */}
    </Layout>
  );
}
