import React, { Component, useState } from 'react'
import { Button, Col, Container, Form, Row } from 'react-bootstrap'
import {
    Link
  } from "react-router-dom";
  import { ToastContainer,toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

function Signup(){
    const[firstname,setFirstname]=useState("");
    const[password,setPassword]=useState("");
    const[lastname,setLastname]=useState("");
    const[mobile,setMobile]=useState("");
    const[email,setEmail]=useState("");
    // constructor(){
    //     super();
    //     this.state={
    //         firsname:"",
    //         lastname:'',
    //         mobile:"",
    //         email:"",

    //     }
    //     this.changeHandler=this.changeHandler.bind(this)
    //     this.clearForm=this.clearForm.bind(this)
    // }
    
//    function componentDidMount()
//     {   ['firstname','lastname','mobile','email','password'].forEach(
//         item=>{
//             if(localStorage.getItem(item))
//             this.setState({[item]:localStorage.getItem(item)});
//         })
//     }
    function changeHandler(e){
        let value=e.target.value;
        let name=e.target.name;
        switch (name){
            case "mobile":
            setMobile(value);
            break;
            case "password":
            setPassword(value);
            break;
            case "firstname":
            setFirstname(value);
            break;
            case "lastname":
            setLastname(value);
            break;
            case "email":
            setEmail(value);
            break;
        }
    }

    function clearForm(){
        setFirstname();
        setPassword();
        setMobile();
        setEmail();  
        setLastname();        
    }
        // this.setState({
        //     firsname:"",
        //     lastname:'',
        //     mobile:"",
        //     email:"",
        //     password:""

        // });
        // ['firstname','lastname','mobile','email','password'].map(
        //     item=>{
        //         localStorage.setItem(item,"")
        //     }
        // )
        function submitForm(e){
            const form=e.target;
            e.preventDefault();
            fetch("https://ibm.co.ir/new/service/signup.json",{method:"POST",
                body:new FormData(form)   
            }).then(Response=>Response.json()).then(data=>{
                toast.info(data.msg);
                // setLogin(true);
                // props.onLogin(data);
                
            })
        }
   

   
    return (
        <Container>
              <ToastContainer position="top-right" autoClose={5000} rtl={true}></ToastContainer>
        <Form className="signup-form w-50 m-auto" noValidate onSubmit={submitForm} >
        <Form.Group >
                <Form.Label>نام</Form.Label>
                <Form.Control
                     required
                     type="text"
                     placeholder="نام " 
                     name="firstname"
                     onChange={changeHandler}
                     value={firstname}
                     >
                  </Form.Control>
            </Form.Group>
            <Form.Group >
                <Form.Label>نام خانوادگي</Form.Label>
                <Form.Control
                     required
                     type="text"
                     name="lastname"
                     placeholder="نام خانوادگي" 
                     onChange={changeHandler}
                     value={lastname}
                     >
                  </Form.Control>
            </Form.Group>
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
                <Form.Label>ايميل</Form.Label>
                <Form.Control
                     required
                     type="email"
                     placeholder="@" 
                     name="email"
                     onChange={changeHandler}
                     value={email}

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
                  <Row className="col-button">
                          <Col xs={4}>
                          <Button  variant="danger" size="lg"  type="submit" block> ثبت نام</Button>
                          </Col>
                          <Col xs={4}>
                          <Button  variant="secondary" size="lg"  type="reset" onClick={clearForm} block>خالی کردن</Button> 
                            </Col>
                            <Col xs={4}>
                          <Button as={Link} to="/login" variant="danger" size="lg"  block>ورود</Button>
                          </Col>
                      </Row>
      
           
        </Form>
    </Container>
    )}
    
export default Signup;