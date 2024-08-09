// import { createUserWithEmailAndPassword } from "firebase/auth";
// import React,{ useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { auth } from "../firebase/config";
// const Signup = () => {
//   const navigate=useNavigate();
//   const [email,setEmail]=useState<string>('');
//   const [password,setPassword]=useState<string>('');
//   const [error,setError]=useState<string>('');
//   const handleSubmit=async(e:React.FormEvent<HTMLFormElement>)=>{
//   e.preventDefault();
//   try{
//     await createUserWithEmailAndPassword(auth,email,password);
//     navigate('/');
//   }
//   catch(error){
//     setError(error.message);
//   }
// };
//   return (
//     <form onSubmit={handleSubmit}>
//     {error && error}
//     <div className="hero bg-base-200 min-h-screen">
//       <div className="hero-content flex-col">
//         <div className="text-center">
//           <h1 className="text-5xl font-bold">Buddys Gallary</h1>
//           <p className="py-6">
//             Sign up to share what you like</p>
//         </div>
//         <div className="card sm:w-[30rem] shadow-2xl">
//           <div className="card-body">
//             <div className="form-control">
//               <label className="label">
//                 <span className="label-text">Email</span>
//               </label>
//               <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)} placeholder="email" className="input input-bordered"/>
//             </div>
//             <div className="form-control">
//               <label className="label">
//                 <span className="label-text">Password</span>
//               </label>
//               <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} placeholder="password" className="input input-bordered" required />
            
//             </div>
//             <div className="form-control mt-6">
//               <button className="btn btn-primary">Login</button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//     </form>
//   );
// };
// export default Signup;



// import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { auth } from "../firebase/config";

// const Signup = () => {
//   const navigate = useNavigate();
//   const [email, setEmail] = useState<string>('');
//   const [password, setPassword] = useState<string>('');
//   const [error, setError] = useState<string>('');
//   const [isLogin, setIsLogin] = useState<boolean>(true);

//   const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     try {
//       if (isLogin) {
//         // Log in an existing user
//         await signInWithEmailAndPassword(auth, email, password);
//       } else {
//         // Register a new user
//         await createUserWithEmailAndPassword(auth, email, password);
//       }
//       navigate('/');
//     } catch (error) {
//       setError(error.message);
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       {error && <div>{error}</div>}
//       <div className="hero bg-base-200 min-h-screen">
//         <div className="hero-content flex-col">
//           <div className="text-center">
//             <h1 className="text-5xl font-bold">Buddy's Gallery</h1>
//             <p className="py-6">
//               {isLogin ? "Log in to continue" : "Sign up to share what you like"}
//             </p>
//           </div>
//           <div className="card sm:w-[30rem] shadow-2xl">
//             <div className="card-body">
//               <div className="form-control">
//                 <label className="label">
//                   <span className="label-text">Email</span>
//                 </label>
//                 <input
//                   type="email"
//                   value={email}
//                   onChange={(e) => setEmail(e.target.value)}
//                   placeholder="email"
//                   className="input input-bordered"
//                   required
//                 />
//               </div>
//               <div className="form-control">
//                 <label className="label">
//                   <span className="label-text">Password</span>
//                 </label>
//                 <input
//                   type="password"
//                   value={password}
//                   onChange={(e) => setPassword(e.target.value)}
//                   placeholder="password"
//                   className="input input-bordered"
//                   required
//                 />
//               </div>
//               <div className="form-control mt-6">
//                 <button className="btn btn-primary">{isLogin ? "Login" : "Sign Up"}</button>
//               </div>
//               <div className="text-center mt-4">
//                 <button type="button" onClick={() => setIsLogin(!isLogin)} className="btn btn-link">
//                   {isLogin ? "Don't have an account? Sign Up" : "Already have an account? Login"}
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </form>
//   );
// };

// export default Signup;

// import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { auth } from "../firebase/config";

// const Signup = () => {
//   const navigate = useNavigate();
//   const [email, setEmail] = useState<string>('');
//   const [password, setPassword] = useState<string>('');
//   const [error, setError] = useState<string>('');
//   const [isLogin, setIsLogin] = useState<boolean>(true);

//   const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     try {
//       if (isLogin) {
//         // Log in an existing user
//         await signInWithEmailAndPassword(auth, email, password);
//       } else {
//         // Register a new user
//         await createUserWithEmailAndPassword(auth, email, password);
//       }
//       navigate('/');
//     } catch (error) {
//       setError(error.message);
//     }
//   };

//   const handleGoogleSignIn = async () => {
//     const provider = new GoogleAuthProvider();
//     try {
//       await signInWithPopup(auth, provider);
//       navigate('/');
//     } catch (error) {
//       setError(error.message);
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       {error && <div>{error}</div>}
//       <div className="hero bg-base-200 min-h-screen"style={{ backgroundImage: `url("https://preview.redd.it/728fd9vb6ip61.png?auto=webp&s=8a86d4fc944faf6e7507777d4eb7e861ce61fd6b")`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
//         <div className="hero-content flex-col">
//           <div className="text-center">
//             <h1 className="text-5xl font-bold text-white">Buddy's Gallery</h1>
//             <p className="py-6 font-bold text-white">
//               {isLogin ? "Log in to share what you like🩷🩷" : "Sign up to share what you like🩷🩷"}
//             </p>
//           </div>
//           <div className="card sm:w-[30rem] shadow-2xl bg-white bg-opacity-75">
//             <div className="card-body">
//               <div className="form-control">
//                 <label className="label">
//                   <span className="label-text">Email</span>
//                 </label>
//                 <input
//                   type="email"
//                   value={email}
//                   onChange={(e) => setEmail(e.target.value)}
//                   placeholder="email"
//                   className="input input-bordered"
//                   required
//                 />
//               </div>
//               <div className="form-control">
//                 <label className="label">
//                   <span className="label-text">Password</span>
//                 </label>
//                 <input
//                   type="password"
//                   value={password}
//                   onChange={(e) => setPassword(e.target.value)}
//                   placeholder="password"
//                   className="input input-bordered"
//                   required
//                 />
//               </div>
//               <div className="form-control mt-6">
//                 <button className="btn btn-primary">{isLogin ? "Login" : "Sign Up"}</button>
//               </div>
//               <div className="text-center mt-4">
//                 <button type="button" onClick={() => setIsLogin(!isLogin)} className="btn btn-link">
//                   {isLogin ? "Don't have an account? Sign Up" : "Already have an account? Login"}
//                 </button>
//               </div>
//               <div className="text-center mt-4">
//                 <button type="button" onClick={handleGoogleSignIn} className="btn btn-outline">
//                   <img src="https://www.shareicon.net/data/512x512/2016/07/10/119930_google_512x512.png" alt="Google Icon" className="inline-block w-6 h-6 mr-2" />
//                   {isLogin ? "Login with Google" : "Sign Up with Google"}
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </form>
//   );
// };

// export default Signup;



import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../firebase/config";
import { FaEye, FaEyeSlash } from "react-icons/fa"; // Import eye icons

const Signup = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [error, setError] = useState<string>('');
  const [isLogin, setIsLogin] = useState<boolean>(true);
  const [showPassword, setShowPassword] = useState<boolean>(false); // State for password visibility

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      if (isLogin) {
        // Log in an existing user
        await signInWithEmailAndPassword(auth, email, password);
      } else {
        // Register a new user
        await createUserWithEmailAndPassword(auth, email, password);
      }
      navigate('/');
    } catch (error) {
      setError(error.message);
    }
  };

  const handleGoogleSignIn = async () => {
    const provider = new GoogleAuthProvider();
    try {
      await signInWithPopup(auth, provider);
      navigate('/');
    } catch (error) {
      setError(error.message);
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <form onSubmit={handleSubmit}>
      {error && <div>{error}</div>}
      <div
        className="hero bg-base-200 min-h-screen"
        style={{
          backgroundImage: `url(${isLogin ? "https://preview.redd.it/728fd9vb6ip61.png?auto=webp&s=8a86d4fc944faf6e7507777d4eb7e861ce61fd6b" : "https://a-static.besthdwallpaper.com/spy-x-family-loid-yor-and-anya-as-a-family-wallpaper-1600x1200-99363_23.jpg"})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="hero-content flex-col">
          <div className="text-center">
            <h1 className="text-5xl font-bold text-white">Buddy's Gallery</h1>
            <p className="py-6 font-bold text-white">
              {isLogin ? "Log in to share what you like🩷🩷" : "Sign up to share what you like🩷🩷"}
            </p>
          </div>
          <div className="card sm:w-[30rem] shadow-2xl bg-white bg-opacity-75">
            <div className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control relative">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="password"
                  className="input input-bordered"
                  required
                />
                <span
                  className="absolute inset-y-0 right-4 flex items-center cursor-pointer"
                  onClick={togglePasswordVisibility}
                  style={{ fontSize: '1.5rem', top: '50%' }} // Adjust the icon size
                >
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </span>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">{isLogin ? "Login" : "Sign Up"}</button>
              </div>
              <div className="text-center mt-4">
                <button type="button" onClick={() => setIsLogin(!isLogin)} className="btn btn-link">
                  {isLogin ? "Don't have an account? Sign Up" : "Already have an account? Login"}
                </button>
              </div>
              <div className="text-center mt-4">
                <button type="button" onClick={handleGoogleSignIn} className="btn btn-outline">
                  <img src="https://www.shareicon.net/data/512x512/2016/07/10/119930_google_512x512.png" alt="Google Icon" className="inline-block w-6 h-6 mr-2" />
                  {isLogin ? "Login with Google" : "Sign Up with Google"}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};

export default Signup;
