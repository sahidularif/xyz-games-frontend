import React from 'react'

import { Link } from "react-router-dom/cjs/react-router-dom.min";
const leftmenu = () => {
  return (
    
    <div className="left-site-menu">
    <div className="left-box">
       <header className="header">
          <nav className="menu">
          <ul className="main-list-menu">
                <li>
                   <ul className="menu-promot menu-promot-first">
                      <li>
                         <form action="#">
                            <input type="text" placeholder="Search........." />
                            <span className="icon">
                               <i className="fas fa-magnifying-glass"></i>
                            </span>
                         </form>
                      </li>
                      <li>
                  
                         <Link  to={'/'}>
                            <div className="icon">
                               <i className="icon-home"></i>
                            </div> 
                            <span>
                               Home
                            </span>
                         </Link>
                         <Link to={'/dashboard'} className="main-list-menu-live">
                            <div className="icon">
                               <i className="icon-live"></i>
                            </div>
                            <span>
                               Live Casino
                            </span>
                         </Link>
                         <Link to={'/profile'} >
                            <div className="icon">
                               <i className="fas fa-star"></i>
                            </div>
                            <span>
                               Fovarites
                            </span>
                         </Link>
                      </li>
                   </ul>
                </li>
                <li>
                   <ul className="menu-promot menu-promot-bottom">
                      <li className="original-sub">
                         <div className="dd">
                            <div className="dd-a d-flex align-items-center justify-content-between">
                               <div className="cont d-flex align-items-center">
                                  <div className="icon">
                                     <i className="icon-football"></i>
                                  </div>
                                  <span>
                                     All Games
                                  </span>
                               </div>
                               <span>
                                  <i className="fas fa-angle-down"></i>
                               </span>
                            </div>
                            <input type="checkbox" />
                            <div className="dd-c">
                               <ul>
                                  <li>
                                     <Link to="#">
                                        <div className="icon">
                                           <i className="icon-football"></i>
                                        </div>
                                        <span>
                                           Football
                                        </span>
                                    </Link>
                                  </li>
                                  <li>
                                     <Link to="#">
                                        <div className="icon">
                                           <i className="icon-football"></i>
                                        </div>
                                        <span>
                                           eFootball
                                        </span>
                                    </Link>
                                  </li>
                                  <li>
                                     <Link to="#">
                                        <div className="icon">
                                           <i className="icon-football"></i>
                                        </div>
                                        <span>
                                           bFootball
                                        </span>
                                    </Link>
                                  </li>
                               </ul>
                            </div>
                         </div>
                      </li>
                      <li>
                         <Link to="#">
                            <div className="icon">
                               <i className="icon-football"></i>
                            </div>
                            <span>
                               eFootball
                            </span>
                        </Link>
                      </li>
                      <li>
                         <Link to="#">
                            <div className="icon">
                               <i className="icon-scgo"></i>
                            </div>
                            <span>
                               CS:GO
                            </span>
                        </Link>
                      </li>
                      <li>
                         <Link to="#">
                            <div className="icon">
                               <i className="icon-basketball"></i>
                            </div>
                            <span>
                               Basketball
                            </span>
                        </Link>
                      </li>
                      <li>
                         <Link to="#">
                            <div className="icon">
                               <i className="icon-basketball"></i>
                            </div>
                            <span>
                               eBasketball
                            </span>
                        </Link>
                      </li>
                      <li>
                         <Link to="#">
                            <div className="icon">
                               <i className="icon-tennis"></i>
                            </div>
                            <span>
                               Tennis
                            </span>
                        </Link>
                      </li>
                      <li>
                         <Link to="#">
                            <div className="icon">
                               <i className="icon-etennis"></i>
                            </div>
                            <span>
                               eTennis
                            </span>
                        </Link>
                      </li>
                      <li>
                         <Link to="#">
                            <div className="icon">
                               <i className="icon-dota"></i>
                            </div>
                            <span>
                               Dota 2
                            </span>
                        </Link>
                      </li>
                      <li>
                         <Link to="#">
                            <div className="icon">
                               <i className="fas fa-star"></i>
                            </div>
                            <span>
                               LOL
                            </span>
                        </Link>
                      </li>
                      <li>
                         <Link to="#">
                            <div className="icon">
                               <i className="icon-hockyball"></i>
                            </div>
                            <span>
                               Ice hockey
                            </span>
                        </Link>
                      </li>
                      <li>
                         <Link to="#">
                            <div className="icon">
                               <i className="icon-hockyman"></i>
                            </div>
                            <span>
                               eHockey
                            </span>
                        </Link>
                      </li>
                      <li>
                         <Link to="#">
                            <div className="icon">
                               <i className="icon-tabletennis"></i>
                            </div>
                            <span>
                               Table Tennis
                            </span>
                        </Link>
                      </li>
                      <li>
                         <Link to="#">
                            <div className="icon">
                               <i className="icon-volleyball"></i>
                            </div>
                            <span>
                               Volleyball
                            </span>
                        </Link>
                      </li>
                      <li>
                         <Link to="#">
                            <div className="icon">
                               <i className="icon-baseball"></i>
                            </div>
                            <span>
                               Baseball
                            </span>
                        </Link>
                      </li>
                      <li>
                         <Link to="#">
                            <div className="icon">
                               <i className="icon-rugby"></i>
                            </div>
                            <span>
                               Rugby
                            </span>
                        </Link>
                      </li>
                      <li>
                         <Link to="#">
                            <div className="icon">
                               <i className="icon-mma"></i>
                            </div>
                            <span>
                               MMA
                            </span>
                        </Link>
                      </li>
                      <li>
                         <Link to="#">
                            <div className="icon">
                               <i className="icon-americanball"></i>
                            </div>
                            <span>
                               American Football
                            </span>
                        </Link>
                      </li>
                      <li>
                         <Link to="#">
                            <div className="icon">
                               <i className="icon-handball"></i>
                            </div>
                            <span>
                               Handball
                            </span>
                        </Link>
                      </li>
                      <li>
                         <Link to="#">
                            <div className="icon">
                               <i className="icon-rocketluage"></i>
                            </div>
                            <span>
                               Rocket League
                            </span>
                        </Link>
                      </li>
                      <li>
                         <Link to="#">
                            <div className="icon">
                               <i className="icon-boxing"></i>
                            </div>
                            <span>
                               Boxing
                            </span>
                        </Link>
                      </li>
                      <li>
                         <Link to="#">
                            <div className="icon">
                               <i className="icon-rainbow"></i>
                            </div>
                            <span>
                               Rainbow 6
                            </span>
                        </Link>
                      </li>
                      <li>
                         <Link to="#">
                            <div className="icon">
                               <i className="icon-warcraft"></i>
                            </div>
                            <span>
                               Warcraft III
                            </span>
                        </Link>
                      </li>
                      <li>
                         <Link to="#">
                            <div className="icon">
                               <i className="icon-futsal"></i>
                            </div>
                            <span>
                               Futsal
                            </span>
                        </Link>
                      </li>
                      <li>
                         <Link to="#">
                            <div className="icon">
                               <i className="icon-cricket"></i>
                            </div>
                            <span>
                               Cricket
                            </span>
                        </Link>
                      </li>
                      <li>
                         <Link to="#">
                            <div className="icon">
                               <i className="icon-sc2"></i>
                            </div>
                            <span>
                               SC 2
                            </span>
                        </Link>
                      </li>
                      <li>
                         <Link to="#">
                            <div className="icon">
                               <i className="icon-ow"></i>
                            </div>
                            <span>
                               OW
                            </span>
                        </Link>
                      </li>
                      <li>
                         <Link to="#">
                            <div className="icon">
                               <i className="icon-valor"></i>
                            </div>
                            <span>
                               Arena of Valor
                            </span>
                        </Link>
                      </li>
                   </ul>
                </li>
          </ul>
          <div className="hamburger">
             <span></span>
             </div>
          <div className="hamb">
             <span></span>
             </div>
          <div className="dimmer"></div>
          </nav>
       </header>
    </div>
 </div>

  )
}

export default leftmenu