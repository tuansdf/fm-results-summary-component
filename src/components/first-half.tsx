import { FirstHalfCircle } from "~/components/first-half-circle";
import classes from "./first-half.module.scss";

export const FirstHalf = () => {
  return (
    <div className={classes["top"]}>
      <h2 className={classes["heading"]}>Your Result</h2>
      <FirstHalfCircle />
      <div className={classes["title"]}>Great</div>
      <div className={classes["subtitle"]}>
        You scored higher than 65% of the people who have taken these tests.
      </div>
    </div>
  );
};
