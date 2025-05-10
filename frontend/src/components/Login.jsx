import { useState } from "react";
import logo from "../assets/logo.svg";

export default function Login() {
  const [login, setLogin] = useState(true);
  const [input, setInput] = useState({ email: "", password: "" });
  const [cfmpass, setCfmpass] = useState("");

  const handleChange = (e) => {
    const { id, value } = e.target;
    setInput((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!login) if (input.password === cfmpass) console.log("Success");
  };

  return (
    <div className="min-h-screen flex bg-gradient-to-br from-white to-blue-700">
      <div className="flex justify-between w-full overflow-hidden">
        <div className="p-10 flex flex-col justify-between">
          <img src={logo} alt="LemonPay" className="w-64 mb-10" />
          <div className="mb-24">
            <h1 className="text-white text-5xl font-semibold mb-4">
              Join 8 Million Businesses
              <br />
              <span className="text-yellow-400">Powering Growth with</span>
              <br />
              Lemonpay!
            </h1>
          </div>
        </div>

        <div className="p-10 pe-20 flex flex-col justify-center text-white">
          <h2 className="text-4xl font-semibold mb-2">
            Welcome {login ? `Login` : `Sign Up`} System
          </h2>
          <p className="mb-8 text-xl">
            Your gateway to seamless <br />
            transactions and easy payments.
          </p>
          <form className="flex flex-col gap-4 w-90" onSubmit={handleSubmit}>
            <label htmlFor="email">Email</label>
            <input
              id="email"
              type="email"
              placeholder="Email"
              value={input.email}
              onChange={handleChange}
              className="p-3 rounded-md bg-white text-black bg-opacity-20 focus:outline-none"
            />
            <label htmlFor="password">Password</label>
            <input
              id="password"
              type="password"
              placeholder="Password"
              value={input.password}
              onChange={handleChange}
              className="p-3 rounded-md bg-white text-black bg-opacity-20 focus:outline-none"
            />
            {!login && (
              <>
                <label htmlFor="cfmpass">Confirm Password</label>
                <input
                  id="cfmpass"
                  type="password"
                  placeholder="Confirm Password"
                  value={cfmpass}
                  onChange={(e) => setCfmpass(e.target.value)}
                  className="p-3 rounded-md bg-white text-black bg-opacity-20 focus:outline-none"
                />
              </>
            )}
            <div className="flex justify-between items-center text-sm">
              <label className="flex items-center gap-2">
                <input type="checkbox" />
                Remember me
              </label>
              <button
                type="button"
                onClick={() => setLogin(!login)}
                className="hover:cursor-pointer"
              >
                {login ? `Sign Up` : `Sign In`}
              </button>
            </div>
            <button
              type="submit"
              className="mt-4 py-2 bg-white text-black rounded-md font-medium hover:bg-gray-200 hover:cursor-pointer"
            >
              {login ? `Sign In` : `Sign Up`}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
