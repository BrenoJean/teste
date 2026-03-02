import React, { useState } from "react";

interface LoginProps {
  onSuccess: () => void;
}

export default function Login({ onSuccess }: LoginProps) {
  const [user, setUser] = useState("");
  const [pass, setPass] = useState("");
  const [error, setError] = useState("");

  // usuários permitidos — defina aqui
  const allowed = [
    { user: "jean", pass: "123" },
    { user: "keep", pass: "2024" },
    { user: "demo", pass: "demo" }
  ];

  function handleLogin(e: React.FormEvent) {
    e.preventDefault();

    const ok = allowed.some(
      (u) => u.user === user.trim() && u.pass === pass.trim()
    );

    if (ok) {
      setError("");
      onSuccess();
    } else {
      setError("Usuário ou senha incorretos.");
    }
  }

  return (
    <div className="h-screen w-screen flex items-center justify-center bg-gray-100">
      <form 
        onSubmit={handleLogin}
        className="bg-white shadow-lg p-6 rounded w-80 space-y-4"
      >
        <h2 className="text-xl font-bold text-center">Acesso Restrito</h2>

        {error && <p className="text-red-600 text-sm">{error}</p>}

        <input
          type="text"
          placeholder="Usuário"
          className="w-full border px-2 py-1 rounded"
          value={user}
          onChange={(e) => setUser(e.target.value)}
        />

        <input
          type="password"
          placeholder="Senha"
          className="w-full border px-2 py-1 rounded"
          value={pass}
          onChange={(e) => setPass(e.target.value)}
        />

        <button
          type="submit"
          className="w-full bg-black text-white py-2 rounded font-semibold"
        >
          Entrar
        </button>
      </form>
    </div>
  );
}
