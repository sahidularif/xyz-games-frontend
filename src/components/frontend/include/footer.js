import React from 'react'
import { Link } from "react-router-dom/cjs/react-router-dom.min";

const footer = () => {
  return (
    <footer className="footer-section">
        <div className="container">
        <div className="footer-wrapper">
            <p>
                Copyright 2022 <Link to="#0" className="text-base">XYZ Bets</Link> All Rights Reserved.
            </p>
            <ul className="footer-link">
                <li>
                    <Link to="#0">
                    Affiliate program
                   </Link>
                </li>
                <li>
                    <Link to="#0">
                    Terms & conditions
                   </Link>
                </li>
                <li>
                    <Link to="#0">
                    Bonus terms & conditions
                   </Link>
                </li>
            </ul>
        </div>
        </div>
    </footer>
  )
}

export default footer