import classes from "./summary-button.module.scss";

export const SummaryButton = () => {
  return (
    <button className={classes["button"]}>
      <span className={classes["button-text"]}>Continue</span>
    </button>
  );
};
