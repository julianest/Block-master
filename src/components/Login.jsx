import React, { useEffect, useRef, useState } from "react";
import { Button, Form, Container } from "react-bootstrap";
import ReCAPTCHA from "react-google-recaptcha";
import { Navigate } from "react-router-dom";



const Login=()=> {
const[user, setUser] = useState({
    correo: "",
    password: " ",
});

// useEffect({


// })

const handleInput=({target})=> {
    setUser({
      ...user, 
      [target.name]: target.value,
      [target.name]: target.value
    })
    console.log(user)
}

const captcha= useRef(null);
const [captchaValido, setCaptchaValido] = useState (null);
const [usuarioValido, setUsuarioValido] = useState (false);

const onChange= () =>{
  if(captcha.current.getValue()){
    console.log("El usuario no es un Robot")
    setCaptchaValido(true);
  }
}
const handleSubmit = (e) =>{
  e.preventDefault();
  if(captcha.current.getValue()){
    console.log("El usuario no es un Robot");
    setUsuarioValido(true);
    setCaptchaValido(true);
  }else{
    console.log("Aceptar Captcha")
    setUsuarioValido(false);
    setCaptchaValido(false);
  }
}

  return (
    <>
      <Container>
        {!usuarioValido &&
        <Container>
        <h1>Ingresa</h1>
          <Form onSubmit={handleSubmit} >
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Correo Electronico</Form.Label>
                <Form.Control type="email" placeholder="Enter email" name="correo" onChange={handleInput} />
                  <Form.Text className="text-muted">
                  Rcuerda que no debes compartir tu correo con alguien mas.
                  </Form.Text>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Contraseña</Form.Label>
                <Form.Control type="password" placeholder="Password" name="password" onChange={handleInput}/>
            </Form.Group>
              <ReCAPTCHA
                ref={captcha}
                sitekey="6Lf1tLwfAAAAAAaonkHlDIewI_kwziW7U7dgepvs"
                onChange={onChange}
              />
              {captchaValido === false && <div style={{color: "red"}} >Por favor Aceptar el captcha</div>}
            <Button variant="primary" type="submit">
              Login
            </Button>
          </Form>
          </Container>
        }
        {usuarioValido && <Navigate to="/home" />}
      </Container>
    </>
  );
}

export default Login;