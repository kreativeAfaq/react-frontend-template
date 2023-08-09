import React from "react";
import "./topbar.css";
import Button from "../Button/Button";
import globalColors from "../../globalStyles";

const Topbar = () => {
  return (
    <div className="mainContainer topbar">
      <div className="innerContainer innerTopbar">
        <div className="TopbarLogo">
          <h2>Help The Helpless</h2>
        </div>

        <div className="TopbarNavItems">
          <div className="NavBarLinks">
            <div className="navBarLink">
              <a href="/">
                <li>Home</li>
              </a>
            </div>
            <div className="navBarLink">
              <a href="/">
                <li>About</li>
              </a>
            </div>
            <div className="navBarLink">
              <a href="/">
                <li>Contact Us</li>
              </a>
            </div>
          </div>

          <div className="navBarCallToActions">
            <Button
              title={"Login"}
              background={"#fff"}
              color="#000"
              padding="10px 20px"
              fontSize={".9rem"}
              margin={"0px 10px"}
            />
            <Button
              title={"Donate Now"}
              background={globalColors?.yellowColor}
              color={globalColors?.primaryColor}
              padding="10px 20px"
              fontSize={".9rem"}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
