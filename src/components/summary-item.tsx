import clsx from "clsx";
import { ReactNode } from "react";
import classes from "./summary-item.module.scss";

type Props = {
  icon: ReactNode;
  category: string;
  score: number;
  className?: string;
};

export const SummaryItem = ({ icon, category, score, className }: Props) => {
  return (
    <div className={clsx(classes["container"], className)}>
      <div className={classes["icon"]}>{icon}</div>
      <span className={classes["category"]}>{category}</span>
      <span className={classes["score"]}>
        <span className={classes["current"]}>{score}</span>
        <span className={classes["total"]}> / 100</span>
      </span>
    </div>
  );
};
