import Input from "../components/Input";
import Button from "../components/Button";
import { useEffect, useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../api/firebase";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const navigation = useNavigate();

  useEffect(() => {
    const unsub = auth.onAuthStateChanged((user) => {
      if (user) {
        navigation("/admin");
      }
    });

    return () => unsub();
  });

  const handleUserInput = (event: any) => {
    const name = event.target.name;
    const value = event.target.value;

    setUser({
      ...user,
      [name]: value,
    });
  };

  const handleFormSubmission = async (e: any) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, user.email, user.password);
      navigation("/admin");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="px-4 text-center space-y-4 bg-slate-900 flex flex-col py-10 items-center justify-center h-screen w-screen text-white">
      <h2 className="text-2xl font-bold">CodeTribe Employee Management App</h2>
      <h3>Login into the app</h3>
      <div className="w-full lg:w-1/3 xl:w-1/3 flex flex-col space-y-3">
        <form onSubmit={handleFormSubmission}>
          <Input
            handleUserInput={handleUserInput}
            name="email"
            type="email"
            placeholder="Enter your email"
          />
          <Input
            handleUserInput={handleUserInput}
            name="password"
            type="password"
            placeholder="Enter your password"
          />
          <Button />
        </form>
      </div>
      <Link to={"/register"}>Do not have an account? Register</Link>
    </div>
  );
};

export default Login;
