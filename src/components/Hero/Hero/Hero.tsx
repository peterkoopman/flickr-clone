import style from "./Hero.module.scss";
import {useState, useEffect} from "react";
import HeroInfo from "@/components/Hero/HeroInfo/HeroInfo";
import { flickr, userId } from "@/flickr/common";

interface StringContent {
  _content: string;
}
export interface Info {
  description: StringContent;
  ispro: boolean;
  location: StringContent;
  realname: StringContent;
  username: StringContent;
}


const Hero = () => {
  const [info, setInfo] = useState<Info | null>(null);

  useEffect(() => {
    flickr("flickr.people.getInfo", {
      user_id: userId,
    }).then((data: any) => {
      setInfo(data.person);
    });
  }, []);
  if (!info) return <p>loading...</p>;

  return (
    <div className={style.hero}>
      <div className="grid">
        <div className={style.hero__gradient}></div>
        <HeroInfo username={info.username._content} realname={info.realname._content} ispro={info.ispro} />
      </div>
    </div>
  );
};

export default Hero;
