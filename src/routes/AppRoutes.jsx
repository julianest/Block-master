import {BrowserRouter, Routes, Route} from "react-router-dom";
// import Home from "../components/Home";
import Login from "../components/Login";
import NavbarP from "../components/NavbarP";
import Profile from "../components/Profile";
// import { PrivateRoutes, PublicRoutes } from "./PublicAndPrivateRoutes";



const AppRoutes = ()=> {
  return (
    <>
      <BrowserRouter>
      <NavbarP/>
            <Routes>
              <Route path="/login" element={<Login/>} />
              {/* <Route path="/login" element=
                {
                  <PublicRoutes>
                    <Login/>   
                  </PublicRoutes>   
                }   
              />
              <Route path="/*" element=
              {
                <PrivateRoutes>
                  <Route path="/home" element={<Home/>}/>
                  <Route path="/profile" element={<Profile/>}/>
                </PrivateRoutes>
              } 
              /> */}
              <Route path="/profile" element={<Profile/>}/>
            </Routes>
      </BrowserRouter>
    </>
  );
}

export default AppRoutes;

//<Route path="/*" element={<Navigate to="/" />}/>