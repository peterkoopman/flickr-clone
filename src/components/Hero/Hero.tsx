import "./Hero.scss";
import React from "react";
import HeroInfo from "../HeroInfo/HeroInfo";
import useGetInfo from "../../flickr/useGetInfo";

const Hero: React.FC = () => {
  const info = useGetInfo();

  if (!info) return <p>loading...</p>;

  return (
    <div className="hero">
      <div className="grid">
        <div className="hero__gradient"></div>
        <HeroInfo name={info.realname._content} />
      </div>
    </div>
  );
};

export default Hero;
