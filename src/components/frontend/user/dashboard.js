import React from 'react';
import Loader from '../include/loader';
import Nav from '../include/nav';
import Footer from '../include/footer';
import Slide from '../include/slide';
import Leftmenu from '../user/include/leftmenu';
import Rightmenu from '../include/rightmenu';
import Signup from '../include/signup';
import Signin from '../include/signin';
import Betbalance from '../include/betbalance.js';
import Profile from '../user/profile.js';
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import jwt_decode from 'jwt-decode';

const Dashboard = () => {

  const token = localStorage.getItem('jwtToken');
  const decodedToken = jwt_decode(token);  
  const email = decodedToken.email;
  return (
    <>      
      {/* <Loader /> */}
      <Nav />
      <div className="main-body">
        <Leftmenu />
        <div className="body-middle">     
          <Profile email={email} /> {/* Pass the email value as a prop */}
          <Footer />
          <Link to="#0" className="click-btn" data-bs-toggle="modal" data-bs-target="#exampleModal3">
            <i className="icon-basketball"></i>
          </Link>
        </div>  
        <Rightmenu />
      </div>
      <Signup />
      <Signin />
      <Betbalance />
    </>
  )
}

export default Dashboard;
