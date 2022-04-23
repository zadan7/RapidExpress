import React from "react";
import reactDom from "react-dom";
import {Track,Info} from "./Track";

import homestyle from "./home.css";
// images
import logo from "./images/fast-delivery.png";
import menu2 from "./images/menu2.png";
import airplane from "./images/airport.jpg";
import airport from "./images/airport.jpg";
import barret from "./images/barret.jpg";
import cargo from "./images/cargo.jpg";
import water from "./images/water.jpg";
import landscape from "./images/landscape.jpg";
import truck from "./images/truck.jpg"

import { Button,Carousel,Row,Col,Spinner} from 'react-bootstrap';
import Card from 'react-bootstrap/Card';




const firebaseConfig = {
  apiKey: "AIzaSyBk-m6q2o1dKuggqoNxjoKZHmXeMSHhjsA",
  authDomain: "PROJECT_ID.firebaseapp.com",
  databaseURL: "https://househelps2-default-rtdb.firebaseio.com/",
  projectId: "househelps2",
  storageBucket: "househelps2.appspot.com",
  messagingSenderId: "SENDER_ID",
  appId: "APP_ID",

};


class Home extends React.Component {
  constructor(){

    super()
    this.state ={
      style:homestyle
    }
    
  
    
  }
  componentDidMount(){
   
    var menubar= document.querySelector("#menubar");
    var nav= document.querySelector("#link");
    console.log(nav)
    menubar.addEventListener("click",()=>{
  
      if(nav.style.display==="block"){
          nav.style.display="none";
  
      }else{
          nav.style.display="block";
      }
        
    })

    
  }
  
    render(){
      return (
        <div className="Home" style={this.state.style} >

        
          <div id="head-div"style={{}}>
        <header  >
            <h1 id="logo"style={{textAlign: "left",borderBottom:"2px solid orange"}} >
                
              &nbsp;<span>Rapid Express 
                <img   src={logo} alt="" width="40px">
                </img></span> 
               <img  id="menubar" src={menu2} alt="" width="30px" style={{position: "absolute", right: "25px" ,verticalalign: "middle"}}>

               </img>
            </h1>


           
        </header>

        
        
        <div id="link">
            <p>   <a href="/">Home</a>
                &nbsp;&nbsp; &nbsp;&nbsp;&nbsp;
                <a href="./track">Track Shipment</a>&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;
                <a href="/">About Us </a>&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;
                 <a href="about">services</a></p> 
              
            
        </div>

    </div>

        <br>
        </br>
        <br></br>

        <Carousel style={{borderBottom:"2px solid orange"}}>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={airport}
          alt="First slide"
        />
        <Carousel.Caption>
          <h1 style={{marginBottom:"250px"}}>Safe Delivery</h1>
          <p>Safe And Secure Delivery </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={cargo}
          alt="Second slide"
        />

        <Carousel.Caption>
          <h1 style={{marginBottom:"250px"}}> Express Delivery</h1>
          <p>Fast and Express Deliveries Guaranteed</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={landscape}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h1 style={{marginBottom:"250px"}}>Rapid Delivery</h1>
          <p>Safe fast And Secure makes Rapid Delivery The fastest </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>

              <h1>Delivery Service</h1>

              <br></br>
              <br></br>
              <div class="main-text">
              <h2 style={{color: "Black"}}>We are the largest Logistics expert in America, Europe and Asia</h2>
                    <h3>Professional And Economic Handling Of Your Mailroom And Courier Service Requirements. 
                        We Provide Dedicated Resources,
                          With Various Flexibilities In Pick-Up And Delivery  Of Internal And External Packages</h3> 
            </div>

            <div style={{textAlign: "center"}}>
          <a href="./track" class="btn btn-primary" style={{fontSize: "2em" ,fontWeight: "bold", padding: "15px"}}>Track Shipment</a>

          </div>

                      <Row xs={1} md={2} className="g-4" style={{width:"100%",margin:"2px auto"}}>
              {Array.from({ length: 1 }).map((_, idx) => (
                <Col>
                  <Card >
                    <Card.Img variant="top" src={airplane} />
                    <Card.Body>
                      <Card.Title>Air Transportation</Card.Title>
                      <Card.Text>
                        This is a longer card with supporting text below as a natural
                        lead-in to additional content. This content is a little bit longer.
                      </Card.Text>
                      <Button variant="warning" style={{color:"white",background:"orange"}}>Read Article</Button>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>


            <Row xs={1} md={2} className="g-4" style={{width:"100%",margin:"2px auto"}}>
              {Array.from({ length: 1 }).map((_, idx) => (
                <Col>
                  <Card >
                    <Card.Img variant="top" src={water} />
                    <Card.Body>
                      <Card.Title>Water Transportation</Card.Title>
                      <Card.Text>
                        This is a longer card with supporting text below as a natural
                        lead-in to additional content. This content is a little bit longer.
                      </Card.Text>
                      <Button variant="warning" style={{color:"white",background:"orange"}}>Read Article</Button>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>

            <Row xs={1} md={2} className="g-4" style={{width:"100%",margin:"2px auto"}}>
              {Array.from({ length: 1 }).map((_, idx) => (
                <Col>
                  <Card >
                    <Card.Img variant="top" src={truck} />
                    <Card.Body>
                      <Card.Title>Road Transportation</Card.Title>
                      <Card.Text>
                        This is a longer card with supporting text below as a natural
                        lead-in to additional content. This content is a little bit longer.
                      </Card.Text>
                      <Button variant="warning" style={{color:"white",background:"orange"}}>Read Article</Button>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
       </div>
      );
    }

   
  }
  

  export default Home;