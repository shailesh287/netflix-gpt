import React, { createRef, useRef, useState } from "react";
import Header from "./Header";
import { BG_URL, USER_AVATAR } from "../utils/constant";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { removeUser, setUser } from "../utils/userSlice";
import { useAppDispatch } from "../utils/hooks";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState<Boolean>(true);
  const [errorMessage, setErrorMessage] = useState<string>("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({
    email: "",
    password: "",
  });

  const dispatch = useAppDispatch();

  const name = createRef<HTMLInputElement>();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const validateEmail = (value: string): string => {
    if (!value) {
      return "Email is required";
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(value)) {
      return "Please enter a valid email address";
    }
    return "";
  };

  const validatePassword = (value: string): string => {
    if (!value) {
      return "Password is required";
    }
    if (value.length < 6) {
      return "Password must be at least 6 characters long";
    }
    return "";
  };

  const handleValidation = (field: keyof typeof formData) => {
    const value = formData[field];
    let error = "";

    switch (field) {
      case "email":
        error = validateEmail(value);
        break;
      case "password":
        error = validatePassword(value);
        break;
      default:
        break;
    }

    setErrors((prevErrors) => ({ ...prevErrors, [field]: error }));
  };

  const inputClassName = (field: keyof typeof errors) => {
    return errors[field] ? "border-2 border-rose-600" : "";
  };
  const handleButtonClick = () => {
    if (errors.email !== "" || errors.password !== "") return;

    if (!isSignInForm) {
      createUserWithEmailAndPassword(auth, formData.email, formData.password)
        .then((userCredential) => {
          const user = userCredential.user;

          updateProfile(user, {
            displayName: name.current?.value || "",
            photoURL: USER_AVATAR,
          })
            .then(() => {
              const { uid, email, displayName, photoURL } = auth.currentUser!;
              dispatch(
                setUser({
                  uid,
                  email,
                  displayName,
                  photoURL,
                })
              );
            })
            .catch((error) => {
              dispatch(removeUser(error.message));
            });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(`${errorCode}-${errorMessage}`);
        });
    } else {
      signInWithEmailAndPassword(auth, formData.email, formData.password)
        .then((userCredential) => {
          const user = userCredential.user;
        })
        .catch((error) => {
          setErrorMessage(error.message);
        });
    }
  };
  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  return (
    <div>
      <Header />
      <div className="absolute h-screen w-screen">
        <img className="h-full w-full object-cover" src={BG_URL} alt="logo" />
        <div className="absolute inset-0 bg-black opacity-60"></div>
      </div>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="w-full md:w-96 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80"
      >
        <h1 className="font-bold text-3xl py-4">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>

        {!isSignInForm && (
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="p-4 my-4 w-full bg-gray-700"
          />
        )}
        <input
          type="text"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          onBlur={() => handleValidation("email")}
          placeholder="Email Address"
          className={`p-4 my-4 w-full bg-gray-700 rounded-md ${inputClassName(
            "email"
          )}`}
        />
        {errors.email && <div className="text-red-500">{errors.email}</div>}
        <input
          type="password"
          id="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          onBlur={() => handleValidation("password")}
          placeholder="Password"
          className={`p-4 my-4 w-full bg-gray-700 rounded-md ${inputClassName(
            "password"
          )} `}
        />
        {errors.password && (
          <div className="text-red-500">{errors.password}</div>
        )}
        {errorMessage && <div className="text-red-500">{errorMessage}</div>}
        <button
          className="p-4 my-6 bg-red-700 w-full rounded-lg"
          onClick={handleButtonClick}
        >
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <p className="py-4 cursor-pointer" onClick={toggleSignInForm}>
          {isSignInForm
            ? "New to Netflix? Sign Up Now"
            : "Already registered? Sign In Now."}
        </p>
      </form>
    </div>
  );
};

export default Login;
