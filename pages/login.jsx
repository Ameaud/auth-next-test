import Layout from "../Layout/Layout";
import axios from "axios";
import { useState } from "react";
import { useRouter } from "next/router";

export default function login() {
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
    <Layout isLogin={true}>
      {/* <!-- Content --> */}

      <div className="container-xxl">
        <div className="authentication-wrapper authentication-basic container-p-y">
          <div className="authentication-inner">
            {/* <!-- Register --> */}
            <div className="card">
              <div className="card-body">
                {/* <!-- Logo --> */}
                <div className="app-brand justify-content-center">
                  <a href="#" className="app-brand-link gap-2">
                    <span className="app-brand-logo demo"></span>
                    <span className="app-brand-text demo text-body fw-bolder">
                      Authentification
                    </span>
                  </a>
                </div>
                {/* <!-- /Logo --> */}
                <h4 className="mb-2">Bienvenue ! 👋</h4>

                <form className="mb-3" onSubmit={(e)=>submit(e)}>
                  <div className="mb-3">
                    <label htmlFor="username" className="form-label">
                      Nom
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="username"
                      name="username"
                      placeholder="Entrez votre nom"
                      autoFocus
                      onChange={(e)=>setName(e.target.value)}
                    />
                  </div>
                  <div className="mb-3 form-password-toggle">
                    <div className="d-flex justify-content-between">
                      <label className="form-label" htmlFor="password">
                        Mot de passe
                      </label>
                    </div>
                    <div className="input-group input-group-merge">
                      <input
                        type="password"
                        id="password"
                        className="form-control"
                        name="password"
                        placeholder="&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;"
                        aria-describedby="password"
                        onChange={(e)=>setPassword(e.target.value)}
                      />
                      <span className="input-group-text cursor-pointer">
                        <i className="bx bx-hide"></i>
                      </span>
                    </div>
                  </div>

                  <div className="mb-3">
                    <button className="btn btn-primary d-grid w-100" type="submit">
                      Envoyer
                    </button>
                  </div>
                </form>
              </div>
            </div>
            {/* <!-- /Register --> */}
          </div>
        </div>
      </div>

      {/* <!-- / Content --> */}
    </Layout>
  );
}
