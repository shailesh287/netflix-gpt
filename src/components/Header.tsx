import React, { useEffect, useState } from "react";
import { LOGO, USER_AVATAR } from "../utils/constant";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { removeUser, setUser } from "../utils/userSlice";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../utils/hooks";

const Header = () => {
  const [sticky, setSticky] = useState(false);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const user = useAppSelector((store) => store.user);
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        navigate("/error");
      });
  };

  const handleScroll = () => {
    if (window.scrollY > 10) {
      setSticky(true);
    } else {
      setSticky(false);
    }
  };
  window.addEventListener("scroll", handleScroll);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          setUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        navigate("/browse");
      } else {
        dispatch(removeUser(""));
        navigate("/");
      }
    });
    // Unsiubscribe when component unmounts
    return () => unsubscribe();
  }, []);

  return (
    <div
      className={`flex flex-row bg-transparent items-center justify-between md:px-12  fixed top-0 left-0 right-0 w-full z-50 ${
        sticky ? "shadow-xl !bg-black" : ""
      }`}
    >
      <img className="w-44  md:mx-0" src={LOGO} alt="logo" />
      {user.user && (
        <div className="flex p-2 justify-between">
          <img
            className="hidden md:block w-9 h-9 rounded-md"
            alt="usericon"
            src={user?.photoURL ? user?.photoURL : USER_AVATAR}
          />
          <button
            onClick={handleSignOut}
            className="md:font-bold text-white px-3 h-8 ml-4 rounded-md bg-red-500"
          >
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
