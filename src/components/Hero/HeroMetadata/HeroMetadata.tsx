import style from "./HeroMetadata.module.scss";
import ProBadge from "@/components/Hero/ProBadge/ProBadge";
import AccountName from "@/components/Hero/AccountName/AccountName";
import Stats from "@/components/Hero/Stats/Stats";

interface Metadata {
  ispro: boolean;
  username: string | null;
}

const HeroMetadata = ({ispro, username}: Metadata) => {
  return (
    <div className={style.metadata__container}>
      {ispro ? (
        <div className={style.metadata__probadge}>
          <ProBadge />
        </div>
      ) : null}
      <AccountName
        className={style.metadata__accountname}
        accountName={username || null}
      />
      <Stats />
    </div>
  );
};

export default HeroMetadata;
