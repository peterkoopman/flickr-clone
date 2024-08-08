import style from "./HeroMetadata.module.scss";
import ProBadge from "../ProBadge/ProBadge";
import AccountName from "../AccountName/AccountName";
import Stats from "../Stats/Stats";
import React from "react";
import useGetInfo, { Info } from "../../../flickr/useGetInfo";

const HeroMetadata: React.FC = () => {
  const info: Info | null = useGetInfo();
  const accountName: string | null = info?.username._content ?? null;

  return (
    <div className={style.metadata__container}>
      {info?.ispro ? (
        <div className={style.metadata__probadge}>
          <ProBadge />
        </div>
      ) : null}
      <AccountName
        className={style.metadata__accountname}
        accountName={accountName}
      />
      <Stats />
    </div>
  );
};

export default HeroMetadata;
