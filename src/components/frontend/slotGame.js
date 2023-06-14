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

  const fetchData = () => {
    fetch('/api/games/gamelist')
      .then(response => response.json())
      .then(data => {
        console.log(data.items);
        setData(data.items);
      })
      .catch(error => {
        setError(error.message);
        setIsLoadingReport(false);
      });
  };



  const [linkUrl, setLinkUrl] = useState(null);

  const handleClick = async (gameuuid) => {

    if (decodedToken === null) {
      // Show alert message
      alert('Please login to your account');
      //window.location.href = '/login';
      return;
    }

    const currency = 'EUR';
    const game_uuid = gameuuid;
    const player_id = decodedToken.id;
    const player_name = decodedToken.handle;
    const session_id = uuidv4();

    const res = await axios.post(`/api/games/gameinit?currency=${currency}&game_uuid=${game_uuid}&player_id=${player_id}&player_name=${player_name}&session_id=${session_id}`)

    const url = res.data.url;
    console.log(url)
    const windowFeatures = `width=${window.screen.availWidth},height=${window.screen.availHeight},menubar=no,toolbar=no,location=no,resizable=yes,status=no`;
    window.open(url, '_blank', windowFeatures);

    // console.log(json)
    // const url = json.url;
    // const windowFeatures = `width=${window.screen.availWidth},height=${window.screen.availHeight},menubar=no,toolbar=no,location=no,resizable=yes,status=no`;
    //  window.open(url, '_blank', windowFeatures);


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
                          <img style={{ maxHeight: '165px' }} src={game.image} alt={game.name} />
                        </div>
                        <h4 style={{ fontSize: '15px', paddingTop: '10px' }}> Type: {game.type}</h4>
                        <h4 style={{ fontSize: '15px' }}>Provider: {game.provider}</h4>
                        <button type="button" className="play_button" onClick={() => handleClick(game.uuid)}>Play</button>
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