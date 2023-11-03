import { login } from "@/Api/loginfunction";
import { AuthForm } from "@/components/form/AuthForm";
import Link from "next/link";
import { useRouter } from "next/router";
import { useContext, useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
import { UserContext } from "../context";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [state, setState] = useContext(UserContext);
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);
      const data = await login(email, password,setLoading,router);
    } catch (err) {
      toast.error(err.message);
      setLoading(false);
    }
  };

  return (
    <div className="border flex items-center justify-center flex-col h-screen">
      <div>
        <div>
          <h1 className="text-5xl font-serif -mt-10 py-3 text-amber-600">
            Login
          </h1>
        </div>
      </div>
      <div>
        <div className="border flex gap-3 border-dashed shadow-2xl border-amber-500 w-full p-10">
          <AuthForm
            handleSubmit={handleSubmit}
            email={email}
            setEmail={setEmail}
            password={password}
            setPassword={setPassword}
            page="login"
            loading={loading}
          />
        </div>
      </div>

      <div className="mt-10 p-2">
        <p className="text-center">
          Not yet registered..?{" "}
          <Link
            href="/register"
            className="underline font-serif text-amber-400"
          >
            Register
          </Link>
        </p>
      </div>
      <div className="p-2">
        <p className="text-center">
          Forgot password..!? please click{" "}
          <Link
            href="/forgot-password"
            className="underline font-serif text-amber-400"
          >
            here
          </Link>
        </p>
      </div>
    </div>
  );
};
export default Login;
