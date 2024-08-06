import style from "./HeroInfo.module.scss";
import Avatar from "../Avatar/Avatar";
import HeroTitle from "../HeroTitle/HeroTitle";
import HeroMetadata from "../HeroMetadata/HeroMetadata";
import React from "react";

interface Info {
  name: string;
}

const HeroInfo: React.FC<Info> = ({ name }) => {
  return (
    <div className={style.hero__container}>
      <Avatar />
      <div className={style.hero__info}>
        <HeroTitle title={name} />
        <HeroMetadata />
      </div>
    </div>
  );
};

export default HeroInfo;
