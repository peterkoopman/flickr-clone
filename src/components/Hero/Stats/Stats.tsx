import style from "./Stats.module.scss";

const Stats = () => {
  return (
    <div className={style.stats}>
      <div className={style.stats__followers}>11 followers</div>
      <div className={style.stats__following}>4 following</div>
    </div>
  );
};

export default Stats;
