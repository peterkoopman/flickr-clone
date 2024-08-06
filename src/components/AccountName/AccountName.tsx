import React from "react";

interface Name {
  accountName: string;
}

const AccountName: React.FC<Name> = ({ accountName }) => {
  return <p className="account-name">{accountName}</p>;
};

export default AccountName;
