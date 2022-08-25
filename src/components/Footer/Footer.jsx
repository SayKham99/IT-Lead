import React from "react";

import "./footer.scss";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import {NavLink} from "react-router-dom";

const Footer = () => {
    return (
          <section className="FooterDiv">
              <div className="Contact">
                  <p className="topTitle">КОНТАКТЫ</p>
                  <p className="titleWrite">Вы можете написать нам на почту</p>
                  <p className="emailFooter">mistoreuzbekistan@gmail.com</p>
                  <p className="titleCall">или позвонить на следующие номера</p>
                  <div className="phoneNm">
                      <p className="phn1">
                          <LocalPhoneIcon className="phn1"/>
                          +998981018777
                      </p>
                      <p className="phn1">
                          <LocalPhoneIcon className="phn1"/>
                          +998981218777
                      </p>
                  </div>
              </div>

              <div className="Clinet">
                  <p className="topTitle">КЛИЕНТАМ</p>
                  <NavLink to={'about'}>
                      <p className="titleAbout">О нас</p>
                  </NavLink>
                  <NavLink to={'garant'}>
                      <p className="titleGurantee">Гарантия</p>
                  </NavLink>
              </div>

              <div className="Address">
                  <p className="topTitle">АДРЕС</p>
                  <p className="titleAddress">
                      <LocationOnIcon className="locIcon"/>
                      Мы находимся на ул.Тараса Шевченко, дом 38 Ориентир: <br/> напротив
                      главного офиса Perfectum Mobile
                  </p>
              </div>
          </section>
    );
};

export default Footer;