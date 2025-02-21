import React from "react";
import "./Title.css";
import { useTranslation } from "react-i18next";

export const Title = () => {
  const { i18n } = useTranslation();

  // Function to change language
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <>
      <div className="home-title">
        <div className="title-flex">
          <img src="/logo.svg" alt="Logo" className="logo" />
          <span className="title">Shiksha Sankalp</span>
        </div>

        <div className="language-dropdown lang-mobile">
          <select onChange={(e) => changeLanguage(e.target.value)}>
            <option value="en">English</option>
            <option value="hi">हिंदी</option>
            <option value="kn">ಕನ್ನಡ</option>
          </select>
        </div>
      </div>
    </>
  );
};
