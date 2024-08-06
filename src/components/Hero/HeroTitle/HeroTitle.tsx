import React from "react";
import "./HeroTitle.scss";

interface Title {
  title: string;
}

const HeroTitle: React.FC<Title> = ({ title }) => {
  return <div className="hero-title">{title}</div>;
};

export default HeroTitle;
