import style from "./Hero.module.scss";
import React from "react";
import HeroInfo from "@/components/Hero/HeroInfo/HeroInfo";
import useGetInfo from "@/flickr/useGetInfo";

const Hero: React.FC = () => {
  const info = useGetInfo();

  if (!info) return <p>loading...</p>;

  return (
    <div className={style.hero}>
      <div className="grid">
        <div className={style.hero__gradient}></div>
        <HeroInfo name={info.realname._content} />
      </div>
    </div>
  );
};

export default Hero;
