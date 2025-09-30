import style from "./HeroInfo.module.scss";
import Avatar from "@/components/Hero/Avatar/Avatar";
import HeroMetadata from "@/components/Hero/HeroMetadata/HeroMetadata";

interface Names {
  username: string;
  realname: string;
  ispro: boolean;
}

const HeroInfo = ({username, realname, ispro}: Names) => {
  return (
    <div className={style.hero__container}>
      <Avatar />
      <div className={style.hero__info}>
        <div className={style.hero__title}>{realname}</div>
        <HeroMetadata username={username} ispro={ispro} />
      </div>
    </div>
  );
};

export default HeroInfo;
