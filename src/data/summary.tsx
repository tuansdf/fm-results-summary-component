import { ReactNode } from "react";
import { IconReaction, IconMemory, IconVerbal, IconVisual } from "~/icons";

type SummaryItem = {
  category: string;
  score: number;
  icon: ReactNode;
  color: "red" | "yellow" | "green" | "blue";
};

export const summary: SummaryItem[] = [
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
