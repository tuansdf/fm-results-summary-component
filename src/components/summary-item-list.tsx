import { SummaryItem } from "~/components/summary-item";
import { summary } from "~/data/summary";
import classes from "./summary-item-list.module.scss";

export const SummaryItemList = () => {
  return (
    <div className={classes["container"]}>
      {summary.map((summaryItem, i) => (
        <SummaryItem
          key={i}
          icon={summaryItem.icon}
          score={summaryItem.score}
          category={summaryItem.category}
          className={classes[`summary-${summaryItem.color}`]}
        />
      ))}
    </div>
  );
};
