import "./HeroInfo.scss";
import Avatar from "../Avatar/Avatar";
import HeroTitle from "../HeroTitle/HeroTitle";
import HeroMetadata from "../HeroMetadata/HeroMetadata";
import React from "react";

interface Info {
  name: string;
}

const HeroInfo: React.FC<Info> = ({ name }) => {
  return (
    <div className="hero-container">
      <Avatar />
      <div className="hero-info">
        <HeroTitle title={name} />
        <HeroMetadata />
      </div>
    </div>
  );
};

export default HeroInfo;
