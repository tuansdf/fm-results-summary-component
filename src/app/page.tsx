import { SummaryButton, SummaryItemList } from "~/components";
import classes from "./page.module.scss";
import { FirstHalf } from "~/components/first-half";
import { SecondHalf } from "~/components/second-half";

export default function Home() {
  return (
    <div className={classes["container"]}>
      <FirstHalf />
      <SecondHalf />
    </div>
  );
}
