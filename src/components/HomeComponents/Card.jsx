import React from "react";
import { Link } from "react-router-dom";

const Card = ({ price, image, name, symbol, incrVal, bgcolor, textcolor }) => {
  console.log("bgcolor:", bgcolor);
  console.log("textcolor:", textcolor);
  return (
    <div className=" m-2">
      <div className="card rounded-xl p-4">
        <div className="flex items-center">
          <img
            src={image}
            alt={name}
            height={45}
            width={45}
            className="rounded-full"
          />
          <div className="mx-3">{symbol}</div>
        </div>
        <div className="my-3 text-sm">{name}</div>
        <div className="flex justify-between items-center">
          <div className="text-xl">{price}$</div>
          <div className="text-xs">
            <span>{incrVal}</span>
            <span className="ml-1">
              <i class="fa-solid fa-arrow-trend-up"></i>
            </span>
          </div>
        </div>
        <div className="flex justify-between items-center my-2 text-xl">
          <i class={`fa-solid fa-circle-info `}></i>
          <Link to="/trade">
            <button
              className={`px-4 py-1 rounded bg-black text-green-400 font-semibold`}
            >
              Trade
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Card;
