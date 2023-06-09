import React, { useEffect, useState } from 'react';
import Loader from './include/loader';
import Nav from './include/nav';
import Footer from './include/footer';
import Slide from './include/slide';
import Leftmenu from './include/leftmenu';
import Rightmenu from './include/rightmenu';
import Signup from './include/signup';
import Signin from './include/signin';
import Betbalance from './include/betbalance.js';
import slotGames from './include/slotGames.js';
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import jwt_decode from 'jwt-decode';
import axios from 'axios';
import md5 from 'crypto-js/md5';
import CryptoJS from 'crypto-js';
import './Button.css';
import LoadingSpinner from "./user/include/LoadingSpinner";
import { v4 as uuidv4 } from 'uuid';

const SlotGame = () => {  
  const token = localStorage.getItem('jwtToken');
  const decodedToken = token ? jwt_decode(token) : null;

  const email = decodedToken ? decodedToken.email : null;

  const [gameData, setData] = useState([]);
  const [isLoadingReport, setIsLoadingReport] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      //const response = await axios.get(`http://xyz.polwel.com/`);
      const response = await fetch(`https://account.cstu.ac.bd/api/index.php`);
      
      const data = await response.json();
     // console.log(data.items);
      setData(data.items);
      
      setIsLoadingReport(false);
    } catch (error) {
      setError(error.message);
      setIsLoadingReport(false);
    }
  };


//   const [gameData, setData] = useState(null);
 

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await fetch(`http://xyz.polwel.com/`);
//         const data = await response.json();
//         console.log(data);
//         setData(data);
//       } catch (error) {
//         console.error('Error fetching weather data:', error);
//       }
//     };
 
//     fetchData();
//   }, []);

// console.log(gameData);


//   const [data, setData] = useState([]);
//   const [isLoadingReport, setIsLoadingReport] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     fetchData();
//   }, []);

//   const fetchData = async () => {
//     try {
//       const response = await axios.get(`/api/games/gamelist`);
//       console.log(response);
//       setData(response.data);
//       setIsLoadingReport(false);
//     } catch (error) {
//       setError(error.message);
//       setIsLoadingReport(false);
//     }
//   };


//   const [isLoading, setIsLoading] = useState(false);
//   const [user, setUser] = useState(null);
//    useEffect(() => {
//     setIsLoading(true);
//     const fetchUser = async () => {

//         const url         = 'https://staging.slotegrator.network/api/index.php/v1/games?page=2';
//         const merchantId  = '1a2fc693659a847a9239746ae3709143';
//         const merchantKey = '346cfad54cc098d7dde4ea3a7d8178016149e7a9';

//         const nonce       = md5(Math.random().toString());         
//         const time        = Math.floor(Date.now() / 1000);

//         const headers = {
//           'X-Merchant-Id': merchantId,
//           'X-Timestamp': time,
//           'X-Nonce': nonce,
//         };
  
//         const requestParams = {
//           page: '2',
//         };
      
//         const mergedParams = { ...requestParams, ...headers };
//         const sortedParams = Object.keys(mergedParams).sort().reduce((obj, key) => {
//           obj[key] = mergedParams[key];
//           return obj;
//         }, {});
    
//         const hashString = new URLSearchParams(sortedParams).toString();
      
//         //const XSign = CryptoJS.HmacSHA1('sha1', merchantKey).update(hashString).digest('hex');
//         const XSign = CryptoJS.HmacSHA1(hashString, merchantKey).toString(CryptoJS.enc.Hex);
//        // const XSign = CryptoJS(hashString, merchantKey).toString(enc.Base64);
//        // console.log(XSign);
//         const config = {
//           headers: {
//             'X-Merchant-Id': merchantId,
//             'X-Timestamp': time,
//             'X-Nonce': nonce,
//             'X-Sign': XSign,
//             'Accept': 'application/json',
//             'Enctype': 'application/x-www-form-urlencoded',
//           },
//         };
        
//         // fetch(url, config)
//         // .then(response => response.json())
//         // .then(data => {
//         //   console.log(data);
//         // })
//         // .catch(error => {
//         //   console.error('Error:', error);
//         // });

//           try {
//           //  const response = await axios.get(url, config);

//             const response = await axios.get(url, config);

//             console.log(response);
//             setUser(response.data);
//             setIsLoading(false);
//           } catch (error) {
//             console.error(error);
//             setIsLoading(false);
//           }        
//     };

//     fetchUser();
//   }, []);

//   const userContent = (() => {
//     if (isLoading) {
//       return <LoadingSpinner />;
//     } else if (user) {
//       return (
//         <div>
//           <p>Welcome: {user.email}</p>
//           <p>Current Balance: $ {user.currency}</p>
//         </div>
//       );
//     } else {
//       return <div></div>;
//     }
//   })();

const [linkUrl, setLinkUrl] = useState(null);

const handleClick = async (gameuuid) => {
  
  if (decodedToken === null) {
    // Show alert message
    alert('Please login to your account');
    //window.location.href = '/login';
    return;
  }
  
  const currency     = 'EUR';
  const game_uuid    = gameuuid;
  const player_id    = decodedToken.id;
  const player_name  = decodedToken.handle;
  const session_id   = uuidv4();
   

 // $currency, $game_uuid, $player_id, $player_name, $session_id) {
 // const response = await fetch('https://account.cstu.ac.bd/api/play.php?name=17f3d0365b3f49a398a9d3b851dc7ec6&age=nazmul');
 // const response = await fetch(`https://account.cstu.ac.bd/api/play.php?name=${param1}&age=${param2}`);

  const response = await fetch(`https://account.cstu.ac.bd/api/play.php?currency=${currency}&game_uuid=${game_uuid}&player_id=${player_id}&player_name=${player_name}&session_id=${session_id}`);
  const json = await response.json();
  const url = json.url; 
 const windowFeatures = `width=${window.screen.availWidth},height=${window.screen.availHeight},menubar=no,toolbar=no,location=no,resizable=yes,status=no`;
 window.open(url, '_blank', windowFeatures);
 
  // try {
  //   //const response = await axios.get(`http://xyz.polwel.com/`);
  //  // http://xyz.polwel.com/play.php?name=17f3d0365b3f49a398a9d3b851dc7ec6&age=nazmul
   
  //   //const response = await fetch(`http://xyz.polwel.com/play.php?name=${param1}&age=${param2}`);
  //   const response = await fetch(`http://xyz.polwel.com/play.php?name=17f3d0365b3f49a398a9d3b851dc7ec6&age=nazmul`);
   
  //   const data = await response.json();
      
  //   // Extract the response URL
  //   const { url } = data;
    

  //   const win = window.open(response, "_blank");
  //   win.focus();

  // } catch (error) {
  //   console.log(error);
  // }

}


  return (
   <>      
   {/* <Loader /> */}
   <Nav />
   <div className="main-body">
     <Leftmenu />
     <div className="body-middle">      
       
     <div className="breadcumnd-banner">
            <div className="container">
                <div className="breadcumd-content">
                <h1>
                    Slot Games 
                </h1>            
                </div>
            </div>
        </div>   

              <div className="profile-section pb-20">
            <div className="container">
                    <div className="varification">
                        <form action="#0">
                            <div className="row mb-4 g-3">
                                {gameData.map((game) => (
                                  <div className="col-xxl-2 col-xl-4" key={game.uuid} >
                                    {game.name}
                                      <div className="form-grp">
                                          <img style={{maxHeight: '165px'}}  src={game.image} alt={game.name}  />
                                      </div>
                                      <h4 style={{fontSize: '15px', paddingTop: '10px'}}> Type: {game.type}</h4>
                                      <h4 style={{fontSize: '15px'}}>Provider: {game.provider}</h4>
                                      <button type="button"  className="play_button" onClick={() => handleClick(game.uuid)}>Play</button>
                                      {/* <button onClick={() => this.handleClick(game.uuid, 'nazmul')}>Play</button> */}
                                  </div>                       
                                ))}                    
                            </div>
                        </form>
                    </div>      
            </div>
        </div>




         <Footer />
         <Link to="#0" className="click-btn" data-bs-toggle="modal" data-bs-target="#exampleModal3">
            <i className="icon-basketball"></i>
        </Link>
        
      </div>  
     <Rightmenu email={email} />
   </div>
      <Signup />
      <Signin />
      <Betbalance />
   </>
  )
}



export default SlotGame