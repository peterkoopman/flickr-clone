interface Name {
  className: string;
  accountName: string | null;
}

const AccountName = ({ className, accountName }: Name) => {
  return <p className={className}>{accountName}</p>;
};

export default AccountName;
