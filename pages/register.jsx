import axios from "axios";
import { useState } from "react";
import Layout from "../Layout/Layout";
import { useRouter } from "next/router";

export default function () {
  const [username, setName] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const submit = async (e) => {
    e.preventDefault();
    const data = { username, password };
    const login = await axios.post("/api/auth/login", data, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (login.status === 200 && login.data.isValide) {
      router.replace("/dashboard");
    }
  };

  const getUser = async (e) => {
    e.preventDefault();
    const user = await axios.get("/api/user");
    console.log(user);
  };

  const logout = async (e) => {
    e.preventDefault();
    const user = await axios.get("/api/auth/logout");
  };

  return (
    <Layout>
      <form>
        <div className="form-outline mb-4">
          <label className="form-label" htmlFor="name">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="username"
            className="form-control"
            required
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div className="form-outline mb-4">
          <label className="form-label" htmlFor="password">
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            className="form-control"
            required
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <button
          className="btn btn-primary btn-block"
          onClick={(e) => submit(e)}
        >
          Sign in
        </button>
        <button
          className="btn btn-primary btn-block"
          onClick={(e) => getUser(e)}
        >
          Get User
        </button>
        <button
          className="btn btn-primary btn-block"
          onClick={(e) => logout(e)}
        >
          Lougout
        </button>
      </form>
    </Layout>
  );
}
