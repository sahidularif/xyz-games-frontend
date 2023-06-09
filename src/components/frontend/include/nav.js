import React from 'react'
import { Link} from 'react-router-dom'
import jwt_decode from 'jwt-decode'


const nav = () => {
    
const token = localStorage.getItem('jwtToken');
const decodedToken = token ? jwt_decode(token) : null;
const userRole = decodedToken ? decodedToken.role_as : null;

  const handleClick = () => {
    localStorage.removeItem("jwtToken");
  };


if(userRole === 3){

    return (
            <header className="header-section header-hidden">
                <div className="header-wrapper">
                <div className="menu-logo-adjust d-flex align-items-center">
                    <div className="logo-menu me-5">
                           <Link className="logo" to={'/'}>
                            <img src="https://bwbworld.net/xyz-game.png" style={{ maxHeight:'45px' }}  alt="logo" />
                           </Link>
                           <Link className="dark-logo" to={'/'}>
                            <img src="https://bwbworld.net/xyz-game.png" style={{ maxHeight:'45px' }}  alt="logo" />
                           </Link>                      
                    </div>
                    <div className="header-bar">
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                    <ul className="main-menu">
                        <li className="active">
                            <a href="#">Home</a>
                        </li>
                        <li>
                           <Link to="/slot-game">Slot Game</Link>
                        </li>
                        <li>
                            <a href="#">Casino</a>
                        </li>
                        <li>
                            <a href="#">Sports</a>
                        </li>
                        <li>
                            <a href="#">eSport</a>
                        </li>
                        <li>
                            <a href="#">Promotions</a>
                        </li> 
                        <li>
                            <a href="#">eSports</a>
                        </li>
                        <li>
                            <a href="#0" data-bs-toggle="modal" data-bs-target="#exampleModal2">Quick Bets</a>
                        </li>
                        <li className="menu--btn">
                          <Link  className="btn--two" to={'/user'}>Dashboard</Link>
                        </li>
                        <li className="menu--btn">
                          <button className="btn--two"  onClick={event => handleClick()}>Sign Out</button>
                        </li>
                    </ul>
                </div>
                <div className="right-menu-reature">
                    <div className="language">
                        <div className="nice-select" tabIndex="0">
                            <span className="current">En</span>
                            <ul className="list">
                            <li data-value="1" className="option selected focus">En</li>
                            <li data-value="2" className="option">Bn</li>
                            <li data-value="3" className="option">Us</li>
                            </ul>
                            <div className="glo-icon">
                            <i className="fas fa-globe"></i>
                            </div>
                        </div>
                    </div>
                    <div className="mode--toggle">
                        <img src="assets/img/sun.png" alt="" />
                </div>
                    <div className="signup-area">
                    <Link  className="btn--two" to={'/user'}>Dashboard</Link>
                    <button   className="btn--two"  onClick={event => handleClick()}>Sign Out</button>
                   
                  
                    </div>
                </div>
                </div>
            </header>            
    )

  }else{
    
    return (
        <header className="header-section header-hidden">
            <div className="header-wrapper">
            <div className="menu-logo-adjust d-flex align-items-center">
                
                <div className="logo-menu me-5">
                    <Link className="logo" to={'/'}>
                         <img src="https://bwbworld.net/xyz-game.png" style={{ maxHeight:'45px' }}  alt="logo" />
                    </Link>
                    <Link className="dark-logo" to={'/'}>
                         <img src="https://bwbworld.net/xyz-game.png" style={{ maxHeight:'45px' }}  alt="logo" />
                    </Link>   
                </div>
                <div className="header-bar">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                <ul className="main-menu">
                    <li className="active">
                        <a href="#">Home</a>
                    </li>
                    <li>
                        <Link  to={'/slot-game'}>Slot Game</Link>
                    </li>
                    <li>
                        <a href="#">Casino</a>
                    </li>
                    <li>
                        <a href="#">Sports</a>
                    </li>
                    <li>
                        <a href="#">eSport</a>
                    </li>
                    <li>
                        <a href="#">Promotions</a>
                    </li> 
                    <li>
                        <a href="#">eSports</a>
                    </li>
                    <li>
                        <a href="#0" data-bs-toggle="modal" data-bs-target="#exampleModal2">Quick Bets</a>
                    </li>
                    <li className="menu--btn">
                
                    <Link className="login-btn" to={'/login'}>Log In</Link>
                    </li>
                    <li className="menu--btn">
                    <Link className="signup-btn" to={'/signup'}>Sign Up</Link>
                    </li>
                </ul>
            </div>
            <div className="right-menu-reature">
                <div className="language">
                    <div className="nice-select" tabIndex="0">
                        <span className="current">En</span>
                        <ul className="list">
                        <li data-value="1" className="option selected focus">En</li>
                        <li data-value="2" className="option">Bn</li>
                        <li data-value="3" className="option">Us</li>
                        </ul>
                        <div className="glo-icon">
                        <i className="fas fa-globe"></i>
                        </div>
                    </div>
                </div>
                <div className="mode--toggle">
                    <img src="assets/img/sun.png" alt="" />
            </div>
                <div className="signup-area">
                    <Link  className="btn--two" to={'/login'}>Log In</Link>
                    <Link  className="btn--two" to={'/signup'}>Sign Up</Link>
                </div>
            </div>
            </div>
        </header>
        
    )
}

}

export default nav