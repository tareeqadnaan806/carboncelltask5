import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const ResNavBar = () => {
  const [toggle, setToggle] = useState(true);
  const handleLinkClick = () => {
    if (!toggle) {
      setToggle(true);
    }
  };
  return (
    <div className="lg:hidden responsive ">
      <li className="flex justify-between items-center">
        <img src="/assets/logo.png" className="logos" alt="logo" />
        {toggle ? (
          <i
            class="fa-solid fa-bars fa-xl cursor-pointer"
            onClick={() => setToggle(!toggle)}
          ></i>
        ) : (
          <div>
            <i
              class="fa-solid fa-xmark fa-2xl cursor-pointer"
              onClick={() => setToggle(!toggle)}
            ></i>
            <div
              className={`p-6 bg-red-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl res-bar`}
            >
              <ul>
                <li className=" border-b-2 p-2">
                  <NavLink to="/" onClick={handleLinkClick}>
                    <i className="fa-solid fa-house mr-3"></i>Home
                  </NavLink>
                </li>
                <li className="my-3 border-b-2 p-2">
                  <NavLink to="/organization" onClick={handleLinkClick}>
                    <i className="fa-solid fa-building-columns mr-3"></i>
                    Organization
                  </NavLink>
                </li>
                <li className="my-3 border-b-2 p-2">
                  <NavLink to="/asset" onClick={handleLinkClick}>
                    <i className="fa-solid fa-box-open mr-3"></i>Assets
                  </NavLink>
                </li>
                <li className="my-3 border-b-2 p-2">
                  <NavLink to="/trade" onClick={handleLinkClick}>
                    <i className="fa-solid fa-globe mr-3"></i>Trade
                  </NavLink>
                </li>
                <li className="my-3 border-b-2 p-2">
                  <NavLink to="/history" onClick={handleLinkClick}>
                    <i className="fa-regular fa-hourglass mr-3"></i>History
                  </NavLink>
                </li>
                <li className="p-2">
                  <NavLink to="/wallet" onClick={handleLinkClick}>
                    <i className="fa-solid fa-wallet mr-3"></i>Wallet
                  </NavLink>
                </li>
              </ul>

              <div className="my-10 mx-2 ">
                <ul>
                  <li className="my-3 flex justify-between items-center">
                    <div>
                      <i class="fa-regular fa-bell mr-3"></i>
                      Notification
                    </div>
                    <div className="notification">12</div>
                  </li>
                  <li className="my-3">
                    <i class="fa-solid fa-headset mr-3"></i>
                    Support
                  </li>
                  <li className="my-3">
                    <i class="fa-solid fa-gear mr-3"></i>
                    Settings
                  </li>
                </ul>
              </div>
              <div className="profile my-7 flex justify-between p-4 items-center">
                <div>
                  <i class="fa-solid fa-address-card fa-xl"></i>
                </div>
                <div>
                  <h1 className="text-s">Brooklyn Simmons</h1>
                  <p className="text-xs">booklyn@simmons.com</p>
                </div>
                <div>
                  <i class="fa-solid fa-ellipsis-vertical fa-xl"></i>
                </div>
              </div>
            </div>
          </div>
        )}
      </li>
    </div>
  );
};

export default ResNavBar;
