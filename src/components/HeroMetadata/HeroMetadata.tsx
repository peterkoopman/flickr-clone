import "./HeroMetadata.scss";
import ProBadge from "../ProBadge/ProBadge";
import AccountName from "../AccountName/AccountName";
import Stats from "../Stats/Stats";
import React from "react";
import useGetInfo from "../../flickr/useGetInfo";

const HeroMetadata: React.FC = () => {
  const info = useGetInfo();
  const accountName: string = info.username._content;

  return (
    <div className="metadata__container">
      {info.ispro ? (
        <div className="metadata__probadge">
          <ProBadge />
        </div>
      ) : null}
      <AccountName accountName={accountName} />
      <Stats />
    </div>
  );
};

export default HeroMetadata;
