import React, { useRef, useState } from "react";
import { Button, Form, Container } from "react-bootstrap";
import ReCAPTCHA from "react-google-recaptcha";
import { useDispatch } from "react-redux";
// import GoogleLogin from 'react-google-login';
// import { Navigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { loginAsync, loginGoogle, loginFacebookAction } from "../redux/actions/actionProfile";
import "../styles/index.css"
import BlockMasterTitle from "./BlockMasterTitle";

const Login = () => {

  const dispatch = useDispatch();
  const captcha = useRef(null);
  const [captchaValido, setCaptchaValido] = useState(null);
  const [usuarioValido, setUsuarioValido] = useState(false);

  const [user, setUser] = useState({
    correo: "",
    password: " ",
  });

  // useEffect({


  // })

  const handleInput = ({ target }) => {
    setUser({
      ...user,
      [target.name]: target.value,
      [target.name]: target.value
    })
    console.log(user)
  }



  const onChange = () => {
    if (captcha.current.getValue()) {
      console.log("El usuario no es un Robot")
      setCaptchaValido(true);
    }
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(loginAsync(user.correo, user.password))

    if (captcha.current.getValue()) {
      console.log("El usuario no es un Robot");
      setUsuarioValido(true);
      setCaptchaValido(true);
    } else {
      console.log("Aceptar Captcha")
      setUsuarioValido(false);
      setCaptchaValido(false);
    }
  }
  // const responseGoogle = (response) => {
  //   console.log(response);
  // }

  return (
    <>
      <Container>
        <div>
          <BlockMasterTitle />
          {/* <h1 className="blockMaster">\\// BLOCK MASTER \\//</h1> */}
          <img className="concord-img" src="https://assets.nflxext.com/ffe/siteui/vlv3/3e521d6d-a53b-4c3f-a85f-dd77c06f7ac7/41fa58db-179c-447d-b6d3-cdf16b10d86e/CO-es-20220425-popsignuptwoweeks-perspective_alpha_website_small.jpg" srcSet="https://assets.nflxext.com/ffe/siteui/vlv3/3e521d6d-a53b-4c3f-a85f-dd77c06f7ac7/41fa58db-179c-447d-b6d3-cdf16b10d86e/CO-es-20220425-popsignuptwoweeks-perspective_alpha_website_small.jpg 1000w, https://assets.nflxext.com/ffe/siteui/vlv3/3e521d6d-a53b-4c3f-a85f-dd77c06f7ac7/41fa58db-179c-447d-b6d3-cdf16b10d86e/CO-es-20220425-popsignuptwoweeks-perspective_alpha_website_medium.jpg 1500w, https://assets.nflxext.com/ffe/siteui/vlv3/3e521d6d-a53b-4c3f-a85f-dd77c06f7ac7/41fa58db-179c-447d-b6d3-cdf16b10d86e/CO-es-20220425-popsignuptwoweeks-perspective_alpha_website_large.jpg 1800w" alt=""></img>
        </div>

        {!usuarioValido &&
          <Container className="loginCont">
            <h1>Ingresa</h1>

            <Form onSubmit={handleSubmit} >
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Correo Electronico</Form.Label>
                <Form.Control type="email" placeholder="Enter email" name="correo" onChange={handleInput} />

              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Contrase??a</Form.Label>
                <Form.Control type="password" placeholder="Password" name="password" onChange={handleInput} />
              </Form.Group>
              <div className="captcha">
                <ReCAPTCHA
                  ref={captcha}
                  sitekey="6Lf1tLwfAAAAAAaonkHlDIewI_kwziW7U7dgepvs"
                  onChange={onChange}
                />
              </div>
              {captchaValido === false && <div style={{ color: "red" }} >Por favor Aceptar el captcha</div>}

              <div className="buttons-login">
                <Button variant="primary" type="submit" style={{ margin: "5% 0% 2.5% 0%" }}>
                  Login
                </Button>
                <div className="google-btn" onClick={() => dispatch(loginGoogle())}>
                  <img className="google-icon" src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" alt="google button" />
                </div>
              </div>
              <Button onClick={() => dispatch(loginFacebookAction())}>Inicio con Facebook</Button>
            </Form>

          </Container>


        }
        {/* {usuarioValido && <Navigate to="/home" />} */}

        <Link to="/profile" style={{ display: "flex", color: "white", textAlign: "center", justifyContent: "center", margin: "5% 0% 5% 0%" }}>Si no tienes una cuenta puedes registrarte</Link>
      </Container>
    </>
  );
}

export default Login;