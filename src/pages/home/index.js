import React, { useState } from "react";
import { FaInstagram, FaFacebook, FaWhatsapp } from "react-icons/fa";
import { useHistory } from "react-router-dom";
import ParticlesBg from "particles-bg";

import "./styles.css";

export default function Home(params) {
  return (
    <div className="home-container">
      <header>
        <span>WYD</span>
        <ul>
          <li>Home</li>
          <li>Cadastro</li>
          <li>Download</li>
          <li>Guias</li>
        </ul>
        <ul>
          <li>
            <FaInstagram />
          </li>
          <li>
            <FaFacebook />
          </li>
          <li>
            <FaWhatsapp />
          </li>
        </ul>
      </header>
      <ParticlesBg color="#ffffff" type="cobweb" bg={true} num={100} />
    </div>
  );
}
