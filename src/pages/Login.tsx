import React, { useState } from "react";
import { useNavigate, useLocation, Link } from "react-router-dom";
import users from "../data/users.json";

interface User {
  email: string;
  password: string;
  role: string;
  name: string;
}

interface TokenPayload {
  email: string;
  role: string;
  name: string;
  iat: number;
}

interface LocationState {
  from?: string;
}

export default function Login() {
  const navigate = useNavigate();
  const location = useLocation();
  const from = (location.state as LocationState)?.from || "/product/view-dashboard";

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    const eNorm = String(email || "").trim().toLowerCase();
    const pNorm = String(password || "").trim();

    const user = (users as User[]).find(
      (u) => u.email.toLowerCase() === eNorm && u.password === pNorm
    );

    if (!user) {
      setError("Invalid email or password.");
      return;
    }

    const tokenPayload: TokenPayload = {
      email: user.email,
      role: user.role,
      name: user.name,
      iat: Date.now(),
    };
    localStorage.setItem("enasa_auth_token", JSON.stringify(tokenPayload));

    navigate(from, { replace: true });
  };

  return (
    <section 
      className="py-28 min-h-[calc(100vh-64px)] flex items-center text-black" 
      style={{ backgroundColor: 'white' }}
    >
      <div className="mx-auto max-w-md w-full px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl border border-gray-200 bg-white shadow-sm p-6">
          <div className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-2xl bg-primary text-primary-foreground hover:bg-primary/90" />
            <div className="font-semibold">E-Näsa Studio</div>
          </div>

          <h1 className="text-2xl font-bold tracking-tight mt-4">Sign in</h1>
          <p className="text-gray-600 text-sm mt-1">
            Please enter your credentials to continue.
          </p>

          <form onSubmit={onSubmit} className="mt-6 grid gap-4">
            <div>
              <label className="text-sm font-medium">Email</label>
              <input
                type="email"
                className="mt-1 w-full rounded-xl border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary-500"
                placeholder="you@company.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                autoComplete="username"
                required
              />
            </div>
            <div>
              <label className="text-sm font-medium">Password</label>
              <input
                type="password"
                className="mt-1 w-full rounded-xl border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary-500"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                autoComplete="current-password"
                required
              />
            </div>

            {error && <div className="text-red-600 text-sm">{error}</div>}

            <button
              type="submit"
              className="mt-2 w-full rounded-xl bg-primary text-primary-foreground hover:bg-primary/90 px-4 py-2 text-white font-semibold hover:bg-primary-700 transition-colors"
            >
              Sign in
            </button>
          </form>

          <div className="mt-4 text-xs text-gray-500">
            By signing in, you agree to our{" "}
            <Link to="#" className="underline">Terms</Link> and{" "}
            <Link to="#" className="underline">Privacy</Link>.
          </div>
        </div>
      </div>
    </section>
  );
}
