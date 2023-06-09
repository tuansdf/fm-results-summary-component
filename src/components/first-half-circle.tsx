import { summary } from "~/data/summary";
import classes from "./first-half-circle.module.scss";

const totalScore = Math.floor(
  summary.reduce((acc, cur) => {
    return acc + cur.score;
  }, 0) / 4
);

export const FirstHalfCircle = () => {
  return (
    <div className={classes["circle"]}>
      <div className={classes["title"]}>{totalScore}</div>
      <div className={classes["subtitle"]}>of 100</div>
    </div>
  );
};
