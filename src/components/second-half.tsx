import React from "react";
import { SummaryButton } from "~/components/summary-button";
import { SummaryItemList } from "~/components/summary-item-list";
import classes from "./second-half.module.scss";

export const SecondHalf = () => {
  return (
    <div className={classes["bottom"]}>
      <h2 className={classes["heading"]}>Summary</h2>
      <SummaryItemList />
      <SummaryButton />
    </div>
  );
};
