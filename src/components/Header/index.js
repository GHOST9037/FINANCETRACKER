// import React, { useEffect } from "react";
// import "./styles.css";
// import { Link, useNavigate } from "react-router-dom";
// import { useAuthState } from "react-firebase-hooks/auth";
// import { auth } from "../../firebase";
// import userSvg from "../../assets/user.svg";
// function Header() {
//   const [user] = useAuthState(auth);
//   const navigate = useNavigate();
//   function logout() {
//     auth.signOut();
//     navigate("/");
//   }

//   useEffect(() => {
//     if (!user) {
//       navigate("/");
//     } else {
//       navigate("/dashboard");
//     }
//   }, [user, navigate]);

//   return (
//     <div className="navbar">
//       <p className="navbar-heading">Financely.</p>
//       {user ? (
//         <p className="navbar-link" onClick={logout}>
//           <span style={{ marginRight: "1rem" }}>
//             <img
//               src={user.photoURL ? user.photoURL : userSvg}
//               width={user.photoURL ? "32" : "24"}
//               style={{ borderRadius: "50%" }}
//             />
//           </span>
//           Logout
//         </p>
//       ) : (
//         <></>
//       )}
//     </div>
//   );
// }

// export default Header;

import React, { useEffect, useState } from "react";
import "./styles.css";
import { Link, useNavigate } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../firebase";
import userSvg from "../../assets/user.svg";

function Header() {
  const [user] = useAuthState(auth);
  const navigate = useNavigate();
  const [darkMode, setDarkMode] = useState(
    () => JSON.parse(localStorage.getItem("darkMode")) || false
  );

  useEffect(() => {
    if (!user) {
      navigate("/");
    } else {
      navigate("/dashboard");
    }
  }, [user, navigate]);

  useEffect(() => {
    document.body.className = darkMode ? "dark-mode" : "light-mode";
    localStorage.setItem("darkMode", JSON.stringify(darkMode));
  }, [darkMode]);

  function logout() {
    auth.signOut();
    navigate("/");
  }

  return (
    <div className="navbar">
      <p className="navbar-heading">Financely.</p>
      <div className="navbar-actions">
        <label className="dark-mode-switch">
          <input
            type="checkbox"
            checked={darkMode}
            onChange={() => setDarkMode(!darkMode)}
          />
          <span className="slider" />
        </label>
        {user ? (
          <p className="navbar-link" onClick={logout}>
            <span style={{ marginRight: "1rem" }}>
              <img
                src={user.photoURL ? user.photoURL : userSvg}
                width={user.photoURL ? "32" : "24"}
                style={{ borderRadius: "50%" }}
              />
            </span>
            Logout
          </p>
        ) : null}
      </div>
    </div>
  );
}

export default Header;

