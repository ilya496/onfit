import { ChangeEvent, useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { AppDispatch } from "../store";
import { useLoginMutation } from "../features/auth/authApi";
import Loader from "../components/Loader";
import { setCredentials } from "../features/auth/authSlice";
import { isErrorWithMessage, isFetchBaseQueryError } from "../utils/helpers";

function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errMessage, setErrMessage] = useState("");

  const emailRef = useRef<HTMLInputElement>(null);

  const navigate = useNavigate();
  const dispatch: AppDispatch = useDispatch();

  const [login, { isLoading, isSuccess, isError }] = useLoginMutation();

  useEffect(() => {
    emailRef.current?.focus();
  }, []);

  useEffect(() => {
    setErrMessage("");
  }, [email, password]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const userData = await login({ email, password }).unwrap();
      dispatch(setCredentials(userData));
      setEmail("");
      setPassword("");
      navigate("/");
    } catch (error) {
      let errMsg: string;
      if (isFetchBaseQueryError(error)) {
        errMsg = "error" in error ? error.error : JSON.stringify(error.data);
        switch (error.status) {
          case 400:
            setErrMessage("Invalid email or password");
            break;
          case 401:
            setErrMessage("Unauthorized");
            break;
          default:
            setErrMessage("Login failed");
            break;
        }
      } else if (isErrorWithMessage(error)) {
        errMsg = error.message;
      }
      setErrMessage((prev) => prev.concat("\n" + errMsg));
    }
  };

  const handleEmailInput = (e: ChangeEvent<HTMLInputElement>) =>
    setEmail(e.target.value);
  const handlePasswordInput = (e: ChangeEvent<HTMLInputElement>) =>
    setPassword(e.target.value);

  return (
    <div className="login">
      {isLoading && <Loader />}
      <div className="container">
        <h2 className="section-title">Welcome back! Please sign in.</h2>
        <p className="section-text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate
          quod cum commodi labore neque nesciunt blanditiis et quas,
          exercitationem corrupti?
        </p>
        {isError && (
          <div className="alert alert-error" aria-live="assertive">
            {errMessage}
          </div>
        )}
        {isSuccess && (
          <div className="alert alert-success" aria-live="assertive">
            Login successful!
          </div>
        )}
        <form onSubmit={handleSubmit} className="form login__form">
          <h3 className="form__title">Login form</h3>
          <div className="form__group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              className="form__input"
              placeholder="Email"
              value={email}
              onChange={handleEmailInput}
              ref={emailRef}
              required
            />
          </div>
          <div className="form__group">
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              className="form__input"
              placeholder="Password"
              value={password}
              onChange={handlePasswordInput}
              required
            />
          </div>
          <div className="form__group">
            <Link className="form__link" to="/forgot-password">
              Forgot password?
            </Link>
          </div>
          <button type="submit" className="btn btn--fill form__btn">
            Login
          </button>
          <Link className="form__link" to="/register">
            Don't have an account?
          </Link>
        </form>
      </div>
    </div>
  );
}

export default LoginPage;
