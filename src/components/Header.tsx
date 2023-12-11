import React, { useEffect } from "react";
import { LOGO, USER_AVATAR } from "../utils/constant";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { removeUser, setUser } from "../utils/userSlice";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../utils/hooks";

const Header = () => {
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
    <div className="absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex flex-col md:flex-row justify-between">
      <img className="w-44 mx-auto md:mx-0" src={LOGO} alt="logo" />
      {user.user && (
        <div className="flex p-2 justify-between">
          <img
            className="hidden md:block w-10 h-10"
            alt="usericon"
            src={user?.photoURL ? user?.photoURL : USER_AVATAR}
          />
          <button
            onClick={handleSignOut}
            className="font-bold text-white px-3 h-8 ml-4 rounded-md bg-red-500"
          >
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
