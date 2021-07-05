import React, { Component, useState } from 'react'
import { Button, Col, Container, Form, Row } from 'react-bootstrap'
import { connect } from 'react-redux';
import {
    Link, Redirect
  } from "react-router-dom";
  import { ToastContainer,toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
 
export function Login (props){
    const [mobile,setMobile]=useState("");
    const [password,setPassword]=useState("");
    const [login,setLogin]=useState("");
    // constructor(){
    //     super();
    //     
    // }

    function submitForm(e){
        const form=e.target;
        e.preventDefault();
        fetch("https://ibm.co.ir/new/service/login.json",{method:"POST",
            body:new FormData(form)   
        }).then(Response=>Response.json()).then(data=>{
            toast.info(data.msg);
            setLogin(true);
            // props.onLogin(data);
            props.dispatch({type:"LOGIN",playload:data})
        })
    }
    function changeHandler(e){
        let value=e.target.value;
        let name=e.target.name;
        switch (name){
            case "mobile":
            setMobile(value);
            break;
            case "password":
            setPassword(value);
        }
    }
  





        return  ( 
            <Container>
                {props.login && <Redirect to="/"/>}
                {!props.login && (
                    <>
                    <ToastContainer position="top-right" autoClose={2000}></ToastContainer>
            <Form className="signup-form w-50 m-auto" onSubmit={submitForm} >
            
               
                <Form.Group >
                    <Form.Label>شماره تلفن</Form.Label>
                    <Form.Control
                         required
                         type="nuumber"
                         name="mobile"
                         placeholder="*******0912" 
                         onChange={changeHandler}
                         value={mobile}
                         >
                      </Form.Control>
                </Form.Group>
                

                      <Form.Group>
                    <Form.Label>پسورد</Form.Label>
                    <Form.Control
                         required
                         type="password"
                         placeholder="*********" 
                         name="password"
                         onChange={changeHandler}
                         value={password}
    
                         >
                      </Form.Control>
                      </Form.Group>
                      <Row >
                          <Col xs={6}>
                          <Button className="mt-4" variant="danger" size="lg"  type="submit" block>ورود</Button>
                          </Col>
                          <Col xs={6}>
                          <Button className="mt-4" as={Link} to="/signup" variant="info" size="lg" block > ثبت نام</Button>
                          </Col>
                      </Row>
                
              
             
            </Form>
                       </>                 )}
        </Container>
        )}
    
const mapStateToprops=(state)=>{
    return{
        login:state.user.login
    };
};
const mapDispatchToProps=dispatch=>{
    return{
       dispatch
        // login:(firstname,lastname)=>{login(firstname,lastname)}
    }
}
export default connect(mapStateToprops,mapDispatchToProps)(Login)