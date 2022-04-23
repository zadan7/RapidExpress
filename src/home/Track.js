// import house from "./imgs/logo.png";
// import logo from "./imgs/house.png";

import logo from "./images/fast-delivery.png";
import menu2 from "./images/menu2.png";
// import {onValue} from "firebase";
import {getDatabase,ref,onValue,push,} from "firebase/database";

import Home from "./Home";
import React from "react";
import reactDom from "react-dom";
import headStyle from "./track.css";
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

class Track extends React.Component {
  constructor(){
    super();
    this.state={
      data:[],
      matcheddata:[]
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
    var track =document.querySelector("#track-now");
    var spinner =document.querySelector("#spinner");
    var spinner1 =document.querySelector("#spinner1");
    const db = getDatabase();


    track.addEventListener("click",()=>{
      this.setState({matcheddata:[]})
      // document.querySelector("#recorderror").style.display="none"
    var trackid =document.querySelector("#trackid").value;
    
     const starCountRef = ref(db, 'ID/');
     var arrayofdata=[];
     onValue(starCountRef, (snapshot) => {
       const data = snapshot.val();
             snapshot.forEach((element,i)=>{
             
               var data2=element.val()
               arrayofdata.push(data2);
             })
             
             
     });

      console.log("click",trackid)
      spinner.style.display="block";
      
      
      
        setTimeout(()=>{
          spinner.style.display="none";
          var searchparams =document.querySelector("#trackid").value
             
            //  console.log(searchparams)
            
            var newlist = arrayofdata;
            var newlist2 =[]


              function collectsearchresults(shipmentinfo){
                if(shipmentinfo.referenceno == searchparams){
                  document.querySelector("#recorderror").style.display="none"
                  // this.setState({matcheddata:selectedJObs})
                  return shipmentinfo;
                }else{
                  console.log("no records Found")

                  document.querySelector("#recorderror").style.display="block";
                  setTimeout(()=>{
                    document.querySelector("#recorderror").style.display="none";
                  },5000)
                  
                }
              }



            var oneinfo=[];
            var selectedJObs = newlist.filter(collectsearchresults)

            if(selectedJObs.length >0){
              console.log(selectedJObs,"selected ")
              this.setState({matcheddata:selectedJObs})
              oneinfo.push(this.state.matcheddata[0])
              console.log(oneinfo,this.state.matcheddata[0])
              document.querySelector("#recorderror").style.display="none";
              this.setState({matcheddata:oneinfo})
              
            }else{
              this.setState({matcheddata:[]})
              console.log(selectedJObs,"selected less than 0")
              document.querySelector("#recorderror").style.display="block";
            }
             
            // console.log(selectedJObs)
            
          

        },8000)
        
      
    })

  }

 
    
  
  render(){

  
  return (
    <div className="Track" style={{ headStyle }}>
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
            <h2 style={{color: "Black"}}>Kindly Enter Your Tracking Code Below</h2>
               <h3> please note that this might take a few minutes </h3> 
        
        </div>


        <div id="trackinput">
            <input type="text" id='trackid' onInput={()=>{document.querySelector("#recorderror").style.display="none"
            
           }} ></input>
          <a id="track-now"  class="btn " style={{overflow:"hidden"}}  >Track now</a>


          </div>
          <br></br>
          <br></br>
          <br></br>
          
          <div id="spinner" style={{textAlign:'center', margin:"20px auto", display:"none", height:"80px"}}>
           <Spinner animation="border" variant="dark" style={{width:"80px",height:"100%",overflow:"hidden"}} > 
           {/* <span className="" style={{textAlign:"center"}}> */}
             <h1 style={{borderRadius:"" }}>R</h1>
            
           </Spinner>

          </div>
          {
           this.state.matcheddata.map((data,index)=>(
               <Info
               buttondata={data}
               /> 
     ))
           
         }

          <div id="recorderror">
            <h2 style={{color:"red",fontWeight:"bold"}}>
              No Records Found

            </h2>
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
  );}
}

const Info =({index,buttondata})=>{

 
  useEffect(() => {
  var btns = Array.from(document.querySelectorAll(".job-apply-btn"))
   var joblistdiv= Array.from(document.querySelectorAll("#joblistdiv"));
  
   joblistdiv.forEach((element,i)=>{
     var newclassname ="job-apply-btn-"+i;
     element.classList.add(newclassname)
    
   })


    



    })

    var appliedjobs =[]
  

        return(
            <div id="joblistdiv"  key={index}>
             
              
              <div id="card-details">
                <table>
                  {/* shipper Information */}
                  <div className="info">
                  <h3>Shipper Information</h3>
                  <tr>
                  <td>Shipper Name:</td>
                    <td>{buttondata.sfirstname+"  "+ " "+buttondata.slastname+" "+" "}</td><br></br>
                    </tr>
                    <tr>
                    <td>Shipper Email</td>
                    <td>{buttondata.semail+"  "+ " "+" "+" "}</td>
                    </tr>
                  
                 
                    
                 
                  <tr>
                    <td>Shipper Address</td>
                    <td>{buttondata.saddress}</td>
                  </tr>
                  <tr>
                    <td>Shipper Phonenumber</td>
                    <td>{buttondata.sphonenumber +"  "+" "}</td>
                    
                  </tr>
                  </div>
                    <br></br>
                    <br></br>
                  <div className="info">
                    {/* Reciever Information */}
                 <h3> Reciever Information</h3>
                  <tr>
                  <td>Reciever Name:</td>
                    <td>{buttondata.rfirstname+"  "+ " "+buttondata.rlastname+" "+" "}</td><br></br>
                    </tr>
                    <tr>
                    <td>Reciever Email</td>
                    <td>{buttondata.remail+"  "+ " "+" "+" "}</td>
                    </tr>
                    
                 
                  <tr>
                    <td>Reciever Address</td>
                    <td>{buttondata.raddress}</td>
                  </tr>
                  <tr>
                    <td>Reciever Phonenumber</td>
                    <td>+{buttondata.rphonenumber +"  "+" "}</td>
                    
                  </tr>
                  </div>
                
                  <br></br>
                <br></br>
                   {/* Shipment Information */}
                <div className="info">
                  <h3>Shipment Information</h3>
                  <tr>
                  <td>Origin</td>
                    <td>{buttondata.origin+"  "+ " "+" "+" "}</td><br></br>
                    </tr>
                    <tr>
                    <td>Package</td>
                    <td>{buttondata.packages+"  "+ " "+" "+" "}</td>
                    </tr>                    
                 
                  <tr>
                    <td>Status</td>
                    <td>{buttondata.status} <span style={{color:"orange"}}>◉</span> </td>
                  </tr>
                  <tr>
                    <td>Destination</td>
                    <td>{buttondata.destination +"  "+" "}</td>
                    
                  </tr>
                  <tr>
                    <td>Type Of Shipment</td>
                    <td>{buttondata.tos +"  "+" "}</td>
                    
                  </tr>
                  <tr>
                    <td>Weight(kg)</td>
                    <td>{buttondata.weight +"  "+" "}</td>
                    
                  </tr>
                  <tr>
                    <td>Shipping Mode</td>
                    <td>{buttondata.shippingmode +"  "+" "}</td>
                    
                  </tr>
                  <tr>
                    <td>Reference No.</td>
                    <td>{buttondata.referenceno +"  "+" "}</td>
                    
                  </tr>
                  <tr>
                    <td>Product</td>
                    <td>{buttondata.product +"  "+" "}</td>
                    
                  </tr>
                  <tr>
                    <td>Quantity</td>
                    <td>{buttondata.Qty +"  "+" "}</td>
                    
                  </tr>
                  <tr>
                    <td>Payment Mode</td>
                    <td>{buttondata.paymentmode +"  "+" "}</td>
                    
                  </tr>
                  <tr>
                    <td>Delivery Date</td>
                    <td>{buttondata.deliverydate +"  "+" "}</td>
                    
                  </tr>
                  <tr>
                    <td>Departure Time</td>
                    <td>{buttondata.departuretime +"  "+" "}</td>
                    
                  </tr>
                  <tr>
                    <td>Pick-Up Date</td>
                    <td>{buttondata.pickupdate +"  "+" "}</td>
                    
                  </tr>
                  <tr>
                    <td>Pick-Up Time</td>
                    <td>{buttondata.pickuptime +"  "+" "}</td>
                    
                  </tr>

                  </div>
                    <br></br>
                    <br></br>
        
                
                </table>
                <br></br>
                <br></br>
                <br></br>
              </div>
              
              
            </div>
          )
    
  
    
  
    
  
}


export default Track;
