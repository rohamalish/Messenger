import React, { useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Meesenger from './Components/Messenger/Meesenger';
import { BrowserRouter, Switch,Route,Link} from "react-router-dom";
import { Container, Nav } from 'react-bootstrap';
import Signup from './Components/Signup/Signup';
import NotFound from './Components/NotFound/Notfound';
import Login from './Components/Login/Login';

function App() {
  const [firstname,setFirstname]=useState("");
  const [lastname,setLastname]=useState("");
  function handleLogin(data){
    setFirstname(data.firstname);
    setLastname(data.lastname);
  }
  
  return (
  <BrowserRouter>
    <div className="App">
      <Container>
        <Nav className="link">
          <Link to="/" >خانه </Link>
          <Link to="/login">ورود</Link>
          <Link to="/signup">ثبت نام</Link>
        </Nav>
      </Container>
      <Switch>
      <Route path='/' exact>
             <Meesenger firstname={firstname} lastname={lastname}></Meesenger>
           </Route>
        <Route path='/login' exact>
          <Login onLogin={handleLogin}></Login>
        </Route>

        <Route path='/signup' exact>
          <Signup></Signup>
        </Route>
        <Route>
        <NotFound></NotFound>
        </Route>
      
      </Switch>
    </div>
  </BrowserRouter>
  );
  
}

export default App;
