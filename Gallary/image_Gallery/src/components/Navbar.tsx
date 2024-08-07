// import { signOut } from "firebase/auth";
// import { auth } from "../firebase/config";
// const Navbar = () => {
//   const handleLogout=async()=>{
//     try{
//       await signOut(auth);
//     }catch(error){
//       console.log(error.message);
//     }
//   };
//   return (
//     <div className='navbar bg-base-100 justify-between'>
//     <a className='front-bold normal-case text-xl underline'>Gallary📸</a>
//     <button onClick={handleLogout}>Logout</button>
//   </div>
//   )
// }
// export default Navbar;
import React, { useState, useEffect } from "react";
import { signOut, onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase/config";

const Navbar = () => {
  const [userName, setUserName] = useState<string | null>(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user && user.email) {
        // Extract the name from the email address
        const emailName = user.email.split('@')[0];
        setUserName(emailName);
      } else {
        setUserName(null);
      }
    });

    return () => unsubscribe();
  }, []);

  const handleLogout = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div className="navbar bg-base-100 justify-between">
      <a className="font-bold normal-case text-xl underline">Gallery📸</a>
      <div>
        {userName && <span className="mr-4">Hello, {userName.charAt(0).toUpperCase() + userName.slice(1)}!</span>}
        <span onClick={handleLogout} style={{ color: "red", cursor: "pointer" }}>Logout</span>
      </div>
    </div>
  );
};

export default Navbar;
