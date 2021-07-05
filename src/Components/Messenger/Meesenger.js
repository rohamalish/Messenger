import React, {  useEffect, useState } from 'react'
import { Col, Container, Row ,Dropdown,DropdownButton} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import   "./Messenger.css";
import "./fontawesome-free-5.15.1-web/css/all.css"
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';


export function Meesenger (props) {
    const[contacts,setContacts]=useState([]);
    const showDropdown=false;
    // constructor() {
    //     super();
    //     this.state = {
    //         contacts:[],
    //         showDropdown:false,
            
                
    // }
    // this.logout = this.logout.bind(this);
    // }
   useEffect(()=>{
    fetch("https://ibm.co.ir/new/service/contacts.json",{ 
        method: 'GET'
      }).then(response =>response.json()).then(item =>{
        setContacts(item)
         });
   },[]);
    
        

            
       function logout(e) {
        e.preventDefault();
        props.dispatch({type: "LOGOUT"});
      }
    
        return (
           
           <Container>
               
               {props.user.login &&(
               <Row>
                   <Col lg={3} xs={12} md={3} className="side">
                        <div className="side-top">
                            <div className="side-top-right">
                           
                       
                             <Dropdown  alignRight  >
                                 <Dropdown.Toggle variant="primary" id="dropdown-basic" >

                                        
                                        <div className="side-top-dropdown">
                                         <div className="side-top-dropdown-img"><img src="./assets/img/Messenger/img1.jpg"></img></div>
                                         <div className="side-top-dropdown-name">{props.user.firstname} {props.user.lastname}</div> 
                                         </div>
                                       
                                </Dropdown.Toggle >

                                <Dropdown.Menu>
                                <Dropdown.Item href="#" onClick={logout}>خروج</Dropdown.Item>
                                
                                 </Dropdown.Menu>
                                </Dropdown>
                                
                             </div>
                             
                        </div>

                        <div className="side-menu">
                            <div>
                                <a href="#">همه</a>
                                <a href="#">شخصي</a>
                                <a href="#">كانال</a>
                                <a href="#">گروه</a>
                                <a href="#">بازي</a>
                            </div>
                        </div>
                        <div className="side-serach">
                            <input type="text" placeholder="جست و جوي مخاطب"></input>
                        </div>
                        <div className="side-peoplee">
                            
                                {contacts.map(item => <div key={item.id} className="box">
                                    <div className="box-index">
                                     <div className="img"><img src={item.img}></img></div>
                                     <div className="mid-box">
                                         <span>{item.title}</span>
                                         <br></br>
                                         <span>{item.description}</span>
                                     </div>
                                     <div className="box-end">
                                         <span>{item.time}</span>
                                         <span className='time-box'>{item.unread}</span>
                                     </div>
                                     </div>
                                       </div>)}
                            
                        </div>
                        <div className="side-footer">
                                 <div className="footer-icon icon2">
                                 <i className="fas fa-ellipsis-v"></i>
                            </div>
                            <div className="footer-icon">
                                <i className="fas fa-desktop"></i>
                                <span>ويترين</span>
                            </div>
                            <div className="footer-icon">
                                <i className="far fa-comment-alt"></i>
                                <span>گفتگو</span>
                            </div>
                            
                            
                        </div>
                    </Col>
                    
                    <Col lg={8} md={8} className="message">
                        <div className="message-top">
                            <div>
                                 <img src="./assets/img/Messenger/img3.jfif"></img>
                                 <span>رضا پولادي</span>
                            </div>
                           
                            <input type="text" placeholder="search"></input>
                        </div>
                        <div className="mesaage-text">
                            <p>
                                lorem ipsum dolor sit amet lorem ipsum dolor sit amet
                            </p>
                        </div>
                        <div className="message-footer">
                            <span className="footer-span">ر</span>
                            <textarea name="" id="" cols="50" rows="4" placeholder="پيام خود را بنويسيد"></textarea>

                            <button class="btn btn-danger" value="send">ارسال</button>
                        
                        </div>
                    </Col>
               </Row>
          )}
          {!props.user.login && <Redirect to="/login"/>}
          </Container>
        )
    }

const mapStateToprops=state=>{
    return{user:state.user}
}
const mapDispatchToProps = dispatch => {
    return {
      dispatch
    }
  }
export default connect(mapStateToprops,mapDispatchToProps)(Meesenger)