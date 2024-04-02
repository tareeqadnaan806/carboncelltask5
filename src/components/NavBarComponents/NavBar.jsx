import React from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="nav sm:hidden ">
      <ul>
        <li className="flex justify-between items-center">
          <img src="/assets/logo.png" className="logo" alt="logo" />
          <i class="fa-solid fa-bars fa-xl cursor-pointer"></i>
        </li>
        <li className="search-bar">
          <i className="fa-solid fa-magnifying-glass search-icon"></i>
          <input type="text" className="search" placeholder="Search" />
        </li>
        <div className="my-10 mx-2 ">
          <li className="my-3">
            <NavLink to="/" activeClassName="active">
              <i className="fa-solid fa-house mr-3"></i>Home
            </NavLink>
          </li>
          <li className="my-3">
            <NavLink to="/organization">
              <i className="fa-solid fa-building-columns mr-3"></i>
              Organization
            </NavLink>
          </li>
          <li className="my-3">
            <NavLink to="/asset">
              <i className="fa-solid fa-box-open mr-3"></i>Assets
            </NavLink>
          </li>
          <li className="my-3">
            <NavLink to="/trade">
              <i className="fa-solid fa-globe mr-3"></i>Trade
            </NavLink>
          </li>
          <li className="my-3">
            <NavLink to="/history">
              <i className="fa-regular fa-hourglass mr-3"></i>History
            </NavLink>
          </li>
          <li className="my-3">
            <NavLink to="/wallet">
              <i className="fa-solid fa-wallet mr-3"></i>Wallet
            </NavLink>
          </li>
        </div>
        <div className="mt-28 mx-2 cursor-pointer">
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
      </ul>
    </div>
  );
};

export default NavBar;
