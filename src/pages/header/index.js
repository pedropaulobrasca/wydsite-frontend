/* eslint-disable react/require-render-return */
import React, { Component } from "react";
import { FaInstagram, FaFacebook, FaWhatsapp } from "react-icons/fa";
import { Link } from "react-router-dom";

import "./styles.css";

export default class Header extends Component {
  render() {
    return(
      <div className="header-container">
        <header>
          <div className="logo">
            <h1>Treviz</h1>
          </div>
          <ul className="menu">
            <li>
              <Link className="" to="/">
                Home
              </Link>
            </li>
            <li>
              <Link className="" to="/cadastro">
                Cadastro
              </Link>
            </li>
            <li>
              <Link className="" to="/download">
                Download
              </Link>
            </li>
            <li>
              <Link className="" to="/guias">
                Guias
              </Link>
            </li>
          </ul>
          <ul className="social">
            <li>
              <a href="https://www.instagram.com/?hl=pt-br" target="_blank">
                <FaInstagram />
              </a>
            </li>
            <li>
              <a href="https://www.facebook.com/" target="_blank">
                <FaFacebook />
              </a>
            </li>
            <li>
              <a href="https://web.whatsapp.com/" target="_blank">
                <FaWhatsapp />
              </a>
            </li>
          </ul>
        </header>
      </div>
    );
  }
}
