import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <>
    <div className="footer">
      <div className="footer-content">
        <div className="footer-list">
          <div className="left-content">
            <div className="logo-2">
              <i className="uil uil-bus-school bus-logo"></i>
              <span>RESERVE</span>
            </div>
            <p className="p1">When you have a choice. Chooser Reserve.</p>
            <p className="p2">
              Reserve offers bus tickets booking
              <br />
              through its website, IOS, and androids
              <br /> mobile apps for all major cities.
            </p>
            <p className="p3">reserve.bus@reserve.com</p>
          </div>
          <div className="right-content">
            <div>
              <h5>About</h5>
              <a href="/" alt="">
                <p className="blog-title">About Us</p>
              </a>
              <a href="/" alt="">
                <p className="blog-title">Contact Us</p>
              </a>
            </div>
            <div>
              <h5>Useful Link</h5>
              <a href="/" alt="">
                <p className="blog-title">Careers</p>
              </a>
              <a href="/" alt="">
                <p className="blog-title">FAQ</p>
              </a>
              <a href="/" alt="">
                <p className="blog-title">T & Q</p>
              </a>
              <a href="/" alt="">
                <p className="blog-title">Privacy Policy</p>
              </a>
              <a href="/" alt="">
                <p className="blog-title">Blog</p>
              </a>
            </div>
            <div>
              <h5>Follow Us</h5>
              <a href="/" alt="">
                <i className="uil uil-instagram-alt soclink"></i>
              </a>
              <a href="/" alt="">
                <i className="uil uil-facebook soclink"></i>
              </a>
            </div>
          </div>
        </div>
        <div>
          <br />
          <hr />
          <span className="all-rights">All Rights Reserved - 2023</span>
        </div>
      </div>
    </div>
    </>
  );
};

export default Footer;
