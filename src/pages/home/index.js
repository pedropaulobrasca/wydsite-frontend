import React from "react";
import { FaInstagram, FaFacebook, FaWhatsapp } from "react-icons/fa";
import { ParallaxProvider } from "react-scroll-parallax";

import "./styles.css";

export default function Home(params) {
  console.log(this);
  return (
    <ParallaxProvider>
      <div className="home-container">
        <header className="header">
          <ul className="menu">
            <li>Home</li>
            <li>Cadastro</li>
            <li>Download</li>
            <li>Guias</li>
          </ul>
          <ul className="social">
            <li>
              <a href="#">
                <FaInstagram />
              </a>
            </li>
            <li>
              <a href="#">
                <FaFacebook />
              </a>
            </li>
            <li>
              <a href="#">
                <FaWhatsapp />
              </a>
            </li>
          </ul>
        </header>
      </div>
    </ParallaxProvider>
  );
}
