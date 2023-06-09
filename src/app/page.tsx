import { SummaryItemList } from "~/components";
import classes from "./page.module.scss";

export default function Home() {
  return (
    <div className={classes["container"]}>
      {/* top */}
      <div className={classes["top"]}>
        <h2 className={classes["heading"]}>Your result</h2>
        {/* circle */}
        <div className={classes["circle"]}>
          <div className={classes["title"]}>76</div>
          <div className={classes["subtitle"]}>of 100</div>
        </div>
        <div className={classes["title"]}>Great</div>
        <div className={classes["subtitle"]}>
          You scored higher than 65% of the people who have taken these tests.
        </div>
      </div>

      {/* bottom */}
      <div className={classes["bottom"]}>
        <h2 className={classes["heading"]}>Summary</h2>
        <SummaryItemList />
        <button className={classes["button"]}>Continue</button>
      </div>
    </div>
  );
}
