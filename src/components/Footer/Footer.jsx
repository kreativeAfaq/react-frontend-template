import React from "react";
import "./footer.css";
import { footerLinksData } from "../../jsonData/footerJsonData";
import Button from "../Button/Button";
import globalColors from "../../globalStyles";

const Footer = () => {
  return (
    <div className="mainFooterContainer">
      <div className="innerMainFooterContainer">
        <div className="footerAboutDetailsBx">
          <div className="footerAboutLogo">
            <h2>
              Donate<span>X</span>
            </h2>
          </div>
          <p className="footer_small_text">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias
            consequatur expedita atque, architecto eveniet obcaecati sunt cum
            inventore earum veniam?
          </p>

          <div className="footerSocialMediaIcons">
            <a href="/">
              <label>
                <i className="fa-brands fa-facebook-f"></i>
              </label>
            </a>
            <a href="/">
              <label>
                <i className="fa-brands fa-instagram"></i>
              </label>
            </a>
            <a href="/">
              <label>
                <i className="fa-brands fa-youtube"></i>
              </label>
            </a>
            <a href="/">
              <label>
                <i className="fa-brands fa-twitter"></i>
              </label>
            </a>
          </div>
        </div>

        {footerLinksData?.map((item) => {
          return (
            <div className="footerLinksBx" key={item?.name}>
              <h2>{item?.name}</h2>

              <div className="innerFooterLinksBx">
                {item?.links?.map((link) => {
                  return (
                    <a href={link?.route} key={link?.name}>
                      <p className="footer_small_text">{link?.name}</p>
                    </a>
                  );
                })}
              </div>

              {item?.cta && (
                <div className="footerLinksCta">
                  <Button
                    title={item?.cta}
                    background={globalColors?.secondaryColor}
                    width={"100%"}
                    height={"45px"}
                  />
                </div>
              )}
            </div>
          );
        })}
      </div>

      <div className="footerCopyright">
        <p>Copyright © 2022. All rights reserved by conflatech</p>
        <p>Privacy policy | Terms & Conditions</p>
      </div>
    </div>
  );
};

export default Footer;
