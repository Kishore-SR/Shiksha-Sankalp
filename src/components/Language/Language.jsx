import React from "react";
import { useTranslation } from "react-i18next";
import "./Language.css";

export const Language = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };
  return (
    <>
      <div className="language-dropdown">
        <select onChange={(e) => changeLanguage(e.target.value)}>
          <option value="en">English</option>
          <option value="hi">हिंदी</option>
          <option value="kn">ಕನ್ನಡ</option>
        </select>
      </div>
    </>
  );
};
