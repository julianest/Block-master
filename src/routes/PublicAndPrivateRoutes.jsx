// import React, { useContext } from "react";
// import { Navigate } from "react-router-dom";
// import AutenticationContext from "../hooks/useContext";




// export const PublicRoutes =({children})=> {
//   const {user} = useContext(AutenticationContext);
//     return (
//     user.logged ? <Navigate to ="/home"/> : children
//   );
// }

// export const PrivateRoutes = ({children})=>{
//   const {user} = useContext(AutenticationContext);
//   return (
//     user.logged ? children : <Navigate to ="/home"/>
//   );
// }
