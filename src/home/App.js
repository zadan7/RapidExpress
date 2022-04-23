// import house from "./imgs/logo.png";
// import logo from "./imgs/house.png";
import Home from "./Home";
import React from "react";
import reactDom from "react-dom";
import Track from "./Track";
import Admin from "./Admin"
import { useEffect } from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect
  } from "react-router-dom";
function App () {

   
    
        return (
           <div>
              <Router>
                     <div>

                        <Switch>
                            <Route exact path="/">
                            <Home />
                            </Route>

                            <Route path="/track">
                            <Track />
                            </Route>

                            <Route path="/admin">
                            <Admin />
                            </Route>
                        </Switch>
                    </div>
             </Router> 
              </div>
                        )

    }
  




export default App;
