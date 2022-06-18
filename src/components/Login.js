import React from 'react';
import './Login.css';
import { useHistory } from "react-router-dom";

const Login = () => {
    let history = useHistory();


    return(
        <>
             <div className="container-L">
             <p>The Safe Way Is The Best Way</p>
      <div className="forms-container">
        <div className="signin-signup">
          <form action="#" className="sign-in-form">
            <h2 className="title-L">Sign in</h2>
            <div className="input-field">
              <i className="fas fa-user"></i>
              <input type="text" placeholder="Username" />
            </div>
            <div className="input-field">
              <i className="fas fa-lock"></i>
              <input type="password" placeholder="Password" />
            </div>
            <input type="submit" value="Login" className="btn solid" onClick={() => { history.push("/Dashboard") }}/>
           
           
          </form>
          </div>
        </div>

        <div className="panels-container">
        <div className="panel left-panel">
          <div className="content">
          <h1 className="font-h1">TOOLBOX TALK</h1>
            <h3>The Safe Way Is The Best Way</h3>
            
           
          </div>
         
        </div>
       
      </div>
      </div>

        </>
    );
}

export default Login;