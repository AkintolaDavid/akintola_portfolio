import React from "react";
import { Link } from "react-router-dom";
import ecommerce from "../../Assets/ecom.png";
import getLinked from "../../Assets/getlinked.png";
import loginpage from "../../Assets/loginpage.png";
import food from "../../Assets/food.png";
import order_meal from "../../Assets/order_meal.png";
import dashboard from "../../Assets/dashboard.png";
import social from "../../Assets/social.png";
import "./Portfolio.css";
import { Contactme } from "../Contactme/Contactme";
export const Portfolio = () => {
  return (
    <>
      <div id="portfolio" className="Portfolio_main_container">
        <div className="PortfolioTextDiv">
          <span className="PortfolioText">Portfolio</span>
          <div className="PortfolioUnderline"></div>
        </div>
        <div className="portfolio_content">
          <div className="portfolio_content_1">
            <Link to="https://e-commerce-ruby-eta-23.vercel.app/">
              <img
                src={ecommerce}
                alt="portfolio_content_1"
                className="portfolio_content_1_img"
              />
            </Link>
          </div>
          <div className="portfolio_content_2">
            <Link to="https://get-linked-ai-rouge.vercel.app/">
              <img
                src={getLinked}
                alt="portfolio_content_2"
                className="portfolio_content_2_img"
              />
            </Link>
          </div>
          <div className="portfolio_content_3">
            <Link to="https://login-page-two-black.vercel.app/">
              <img
                src={loginpage}
                alt="portfolio_content_3"
                className="portfolio_content_3_img"
              />
            </Link>
          </div>
          <div className="portfolio_content_4">
            <Link to="https://food-app-nine-phi.vercel.app/">
              <img
                src={order_meal}
                alt="portfolio_content_4"
                className="portfolio_content_4_img"
              />
            </Link>
          </div>
          <div className="portfolio_content_5">
            <Link to="https://social-media-app-beryl.vercel.app/">
              <img
                src={social}
                alt="portfolio_content_5"
                className="portfolio_content_5_img"
              />
            </Link>
          </div>
          <div className="portfolio_content_6">
            <Link to="https://dashboard-plum-rho.vercel.app/">
              <img
                src={dashboard}
                alt="portfolio_content_6"
                className="portfolio_content_6_img"
              />
            </Link>
          </div>
          <div className="portfolio_content_7">
            <Link to="https://food-recipe-gilt.vercel.app/">
              <img
                src={food}
                alt="portfolio_content_7"
                className="portfolio_content_7_img"
              />
            </Link>
          </div>
        </div>
      </div>
      <Contactme />
    </>
  );
};
