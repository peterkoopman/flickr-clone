import React from "react";

interface Name {
  className: string;
  accountName: string;
}

const AccountName: React.FC<Name> = ({ className, accountName }) => {
  return <p className={className}>{accountName}</p>;
};

export default AccountName;
