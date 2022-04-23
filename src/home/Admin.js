// import house from "./imgs/logo.png";
// import logo from "./imgs/house.png";

import check from "./images/check.png";
import logo from "./images/fast-delivery.png";
import menu2 from "./images/menu2.png";
// import {onValue} from "firebase";
// import { getDatabase, ref, onValue} from "firebase/database";

import {getDatabase,ref,onValue,push,} from "firebase/database";

import Home from "./Home";
import React from "react";
import reactDom from "react-dom";
import adminstyle from "./Admin.css";
import { useEffect } from "react";
import { Spinner } from "react-bootstrap";
import { height } from "dom-helpers";
import { hidden } from "jest-matcher-utils/node_modules/chalk";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCElSHfiSBhY3F2CnZTUGgp6oZyfU6v2fI",
  authDomain: "rapidexpress-426df.firebaseapp.com",
  databaseURL: "https://rapidexpress-426df-default-rtdb.firebaseio.com",
  projectId: "rapidexpress-426df",
  storageBucket: "rapidexpress-426df.appspot.com",
  messagingSenderId: "419075627312",
  appId: "1:419075627312:web:d8f34b0f350b55775fd0f5",
  measurementId: "G-B0V849V40P"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

function Admin() {

  useEffect(()=>{
        
    var menubar= document.querySelector("#menubar");
    var nav= document.querySelector("#link");
    
    menubar.addEventListener("click",()=>{
  
      if(nav.style.display==="block"){
          nav.style.display="none";
  
      }else{
          nav.style.display="block";
      }
        
    })


    var submit =document.querySelector("#Submit-btn12");
    
    const db = getDatabase();

    // const db = getDatabase();
    const starCountRef = ref(db, 'ID/');
    var counter;
 


      submit.addEventListener("click",()=>{
        // sender information
        var sfirstname =document.querySelector("#sfirstname").value
        var slastname =document.querySelector("#slastname").value
        var saddress =document.querySelector("#saddress").value
        var sphonenumber =document.querySelector("#sphonenumber").value
        var semail =document.querySelector("#semail").value

         // reciever information
        var rfirstname =document.querySelector("#rfirstname").value
        var rlastname =document.querySelector("#rlastname").value
        var raddress =document.querySelector("#raddress").value
        var rphonenumber =document.querySelector("#rphonenumber").value
        var remail =document.querySelector("#remail").value

        // shipment information

        var origin =document.querySelector("#origin").value
        var packages =document.querySelector("#package").value
        var status =document.querySelector("#status").value
        var destination =document.querySelector("#destination").value
        var tos =document.querySelector("#stof").value
        var weight =document.querySelector("#weight").value
        var shippingmode =document.querySelector("#shippingmode").value
        var referenceno =document.querySelector("#referenceno").value
        var product =document.querySelector("#product").value
        var Qty =document.querySelector("#quantity").value
        var paymentmode =document.querySelector("#paymentmode").value
        var deliverydate =document.querySelector("#deliverydate").value
        var departuretime=document.querySelector("#departuretime").value
        var pickupdate =document.querySelector("#pickupdate").value
        var pickuptime =document.querySelector("#pickuptime").value
       
        if(
          sfirstname!=="" &&
          slastname!=="" &&
          saddress!=="" &&
          sphonenumber!=="" &&
          semail!=="" &&

          rfirstname!=="" &&
          rlastname!=="" &&
          raddress!=="" &&
          rphonenumber!=="" &&
          remail!=="" && 
          
          origin!=="" &&
          packages!=="" &&
          status!=="" &&
          destination!=="" &&
          tos!=="" &&
          weight!=="" &&
          shippingmode!=="" &&
          referenceno!=="" &&
          product!=="" &&
          Qty!=="" &&
          paymentmode!=="" &&
          deliverydate!=="" &&
          departuretime!=="" &&
          pickupdate!=="" &&
          pickuptime!=="" ){
            const starCountRef = ref(db, 'ID/');
            var arrayofdata=[];
            var counter=0;
            onValue(starCountRef, (snapshot) => {
              const data = snapshot.val();
                    snapshot.forEach((element,i)=>{
                      var data2 =element.val();
                      console.log(data2)
                      if(data2.referenceno == referenceno){
                        counter++
                      }
        
        
                    })
        
                    console.log(counter)
           
            });
            if(counter<1){
              push(ref(db, 'ID'), {
                sfirstname :sfirstname,
                 slastname :slastname,
                 saddress :saddress,
                 sphonenumber :sphonenumber,
                 semail :semail,
        
                 // reciever information
                 rfirstname :rfirstname,
                 rlastname :rlastname,
                 raddress :raddress,
                 rphonenumber :rphonenumber,
                 remail :remail,
        
                // shipment information
        
                 origin :origin,
                 packages :packages,
                 status :status,
                 destination :destination,
                 tos :tos,
                 weight :weight,
                 shippingmode :shippingmode,
                 referenceno :referenceno,
                 product :product,
                 Qty :Qty,
                 paymentmode :paymentmode,
                 deliverydate :deliverydate,
                 departuretime:departuretime,
                 pickupdate :pickupdate,
                 pickuptime:pickuptime
                
          
              }).then(()=>{
                
                console.log("Data sent successfully")
                document.querySelector("#information").style.display="none";
                document.querySelector("#successful").style.display="block"
              })
            }else{
              console.log("reference number already Exist")
            }
           
        }else{
          console.log("incomplete information")
        }
       
      })
    
    
  

 

    
  
})
  return (
    <div className="Admin" style={{ adminstyle }}>
      <div id="head-div">
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
                <a href="/about">About Us </a>&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;
                 <a href="/services">services</a></p> 
              
            
        </div>

    </div>

        <br>
        </br>
        <br></br>
        <br></br>
        <br></br>

        <div class="main-text">
        <br></br>
        <br></br>
        <br></br>
            <h2 style={{color: "Black"}}>Create New Shipment information</h2>
               <h3> Enter Shipment information</h3> 
        
        </div>


        <div id="information">
          <form>
            <div class="info">
            <h1>Shipper information</h1>
            <label>FirstName</label>
          <input type="text" id='sfirstname' placeholder="firstname" required></input>
          <label>Lastname</label>
          <input type="text" id='slastname' placeholder="lastname" required></input>
          <label>Address</label>
          <input type="text" id='saddress' placeholder=" Address" required></input>
          <label>Phone Number</label>
          <input type="number" id='sphonenumber' placeholder="phoneNumber" required></input>
          <label>Email</label>
          <input type="email" id='semail' placeholder="Email" required></input>
            </div>
            
          <br></br>
          <br></br>
          <br></br>
          <div class="info">
          <h1>Reciever information</h1>
            <label>FirstName</label>
          <input type="text" id='rfirstname' placeholder="reciever firstname" required></input>
          <label>Lastname</label>
          <input type="text" id='rlastname' placeholder="reciever lastname" required></input>
          <label>Address</label>
          <input type="text" id='raddress' placeholder="reciever Address" required></input>
          <label>Phone Number</label>
          <input type="number" id='rphonenumber' placeholder="reciever Phonenumber" required></input>
          <label>Email</label>
          <input type="email" id='remail' placeholder="reciever Email" required></input>
          </div>
          <br></br>
          <br></br>

          <div class="info">
          <h1>Shipment information</h1>
            <label>Origin(country)</label>
          <input type="text" id='origin' placeholder="Origin(country)" required></input>
          <label>Package</label>
          <input type="text" id='package' placeholder="Package" required></input>
          <label>Status</label>
          <input type="text" id='status' placeholder="Status" required></input>
          <label>Destination(country)</label>
          <input type="text" id='destination' placeholder="Destination" required></input>
          <label>Type of Shipment</label>
          <input type="text" id='stof' placeholder="Air Freight,Ship Freight,Land Freight" required></input>

          <label>Weight</label>
          <input type="text" id='weight' placeholder="package weight " required></input>
          <label>Shipment Mode</label>
          <input type="text" id='shippingmode' placeholder="Air Freight,Ship Freight,Land Freight" required></input>
          <label>Refrence No</label>
          <input type="text" id='referenceno' placeholder="Reference No" required></input>
          <label>Product</label>
          <input type="text" id='product' placeholder="Product" required></input>
          <label>Quantity</label>
          <input type="number" id='quantity' placeholder="Qty" required></input>
          

          <label>Payment Mode</label>
          <input type="text" id='paymentmode' placeholder="Western Union,Transfer,Check" required></input>
          <label>Delivery Date</label>
          <input type="date" id='deliverydate' placeholder="Delivery Date" required></input>
          <label>Departure Time</label>
          <input type="time" id='departuretime' placeholder="Departure Time" required></input>
          <label>Pick-Up Date</label>
          <input type="date" id='pickupdate' placeholder="Pick-Up date" required></input>
          <label>Pick-Up Time</label>
          <input type="time" id='pickuptime' placeholder="Pick-Up Time" required></input>
          {/* <button type="submit">Submit</button> */}
          </div>

          </form>
          <button  id="Submit-btn12" type="submit" className="btn btn-danger">Submit</button>

            
          


          </div>
          <div id="successful" style={{textAlign:"center",padding:"20%"}}>
                <img src={check} style={{width:"60px"}}></img>
                <br></br>
          <br></br>
                <h2>Submitted Successfully</h2>
          </div>
          <br></br>
          <br></br>
          <br></br>
          
      
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br><br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br><br></br>
          <br></br>
          <br></br>

          <br></br>
          <br></br>
          <br></br>
          

    </div>
  );
}



export default Admin;
