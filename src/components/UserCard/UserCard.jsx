import React from "react";
import "./usercard.css";
import Button from "../Button/Button";

const UserCard = () => {
  return (
    <div className="mainCardContainer">
      <div className="innerCardContainer">
        <div className="cardImage">
          <img src={require("../../media/orphan_image.jpg")} alt="" />
        </div>
        <div className="cardDetailsContainer">
          <h2>Amma Nana Orphan's Age</h2>

          <div className="cardMainContactDetails">
            <div className="cardContactDetailsBx">
              <i className="fa-solid fa-phone"></i> <p>+91 311 0556082</p>
            </div>
            <div className="cardContactDetailsBx">
              <i className="fa-solid fa-location-dot"></i>
              <p>Kukatpally , Hyderabad</p>
            </div>
          </div>

          <div className="cardInfoData">
            <div className="innerCardInfoData">
              <label>Estd :</label>
              <span>1998</span>
            </div>
            <div className="innerCardInfoData">
              <label>Total Orphans :</label>
              <span>5000</span>
            </div>
            <div className="innerCardInfoData">
              <label>Male :</label>
              <span>1800</span>
            </div>
            <div className="innerCardInfoData">
              <label>Femal :</label>
              <span>3200</span>
            </div>
          </div>

          <div className="cardCallToCation">
            <Button
              title={"Donate Now"}
              padding={"14px 20px"}
              width={"100%"}
              height={"50px"}
              fontSize={"1.2rem"}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
