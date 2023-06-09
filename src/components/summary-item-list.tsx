import { SummaryItem } from "~/components/summary-item";
import { IconMemory, IconReaction, IconVerbal, IconVisual } from "~/icons";
import classes from "./summary-item-list.module.scss";

const summary = [
  {
    category: "Reaction",
    score: 80,
    icon: <IconReaction />,
    color: "red",
  },
  {
    category: "Memory",
    score: 92,
    icon: <IconMemory />,
    color: "yellow",
  },
  {
    category: "Verbal",
    score: 61,
    icon: <IconVerbal />,
    color: "green",
  },
  {
    category: "Visual",
    score: 72,
    icon: <IconVisual />,
    color: "blue",
  },
];

export const SummaryItemList = () => {
  return (
    <div className={classes["container"]}>
      {summary.map((summaryItem) => (
        <SummaryItem
          icon={summaryItem.icon}
          score={summaryItem.score}
          category={summaryItem.category}
          className={classes[`summary-${summaryItem.color}`]}
        />
      ))}
    </div>
  );
};
