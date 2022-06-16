import React, { useState } from 'react';
import Sidebar from "./components/Sidebar";
import { BrowserRouter as Router } from "react-router-dom";
import { Route, Link } from "react-router-dom";
import { Suspense } from "react";
import Dashboard from "./components/Dashboard";
import Project_Table from "./components/Project_Table";
import Project_Form from "./components/Project_Form";
import Form from "./components/Form";
import SafetyTalk_Table from "./components/SafetyTalk_Table";
import Video from "./components/Video";
import Scan_QR from "./components/Scan_QR";
import Content from "./components/Content";
import Photos from "./components/Photos";
import Role from "./components/Role";
import Parameter from "./components/Parameter";
import User from "./components/User";
import Setting from "./components/Setting";
import Attendence from "./components/Attendence";
import Attendence_List from "./components/Attendence_List";
import Role_Form from "./components/Role_Form";
import User_Form from "./components/User_Form";
import Setting_Form from "./components/Setting_Form";
import LogIncident_Form from "./components/LogIncident_Form";
import Parameter_Form from "./components/Parameter_Form";
import Login from "./components/Login";
import ViewIncident from "./components/ViewIncident";
import Notification from "./components/Notification";



function App() {

    // constructor()
    // {
        
    //     this.state={
    //         Login:false
    //     };
    // }

    const [login, setLogin] =useState(true);
    if (login===false){
        return (
            <Suspense fallback={null}>
            <Router>
                <div>
               
                    <Route path="/" exact component={Login} />
                  
    
                </div>
    
            </Router>
            
            </Suspense>
    
        );

    }
    else
    {
        return (
            <Suspense fallback={null}>
            <Router>
                <div>
                
                <Route path="/" exact component={Login} />

                    <Sidebar />
                    <Route path="/Dashboard" exact component={Dashboard} />
                    <Route path="/Form" exact component={Form} />
                    <Route path="/Role" exact component={Role} />
                    <Route path="/Setting" exact component={Setting} />
                    <Route path="/Project_Form" exact component={Project_Form} />
                    <Route path="/Project_Table" exact component={Project_Table} />
                    <Route path="/SafetyTalk_Table" exact component={SafetyTalk_Table} />
                    <Route path="/Video" exact component={Video} />
                    <Route path="/Attendence" exact component={Attendence} />
                    <Route path="/Attendence_List" exact component={Attendence_List} />
                    <Route path="/Scan_QR" exact component={Scan_QR} />
                    <Route path="/Content" exact component={Content} />
                    <Route path="/Photos" exact component={Photos} />
                    <Route path="/User" exact component={User} />
                    <Route path="/Parameter" exact component={Parameter} />
                    <Route path="/Role_Form" exact component={Role_Form} />
                    <Route path="/User_Form" exact component={User_Form} />
                    <Route path="/Setting_Form" exact component={Setting_Form} />
                    <Route path="/LogIncident_Form" exact component={LogIncident_Form} />
                    <Route path="/Parameter_Form" exact component={Parameter_Form} />
                    <Route path="/ViewIncident" exact component={ViewIncident} />
                    <Route path="/Notification" exact component={Notification} />
             
                
                
                   
    
                </div>
    
            </Router>
            </Suspense>
    
        );
    }
   
}

export default App;