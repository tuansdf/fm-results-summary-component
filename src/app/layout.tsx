import { PropsWithChildren } from "react";
import { mainFont } from "~/app/fonts";
import "~/styles/index.scss";

export const metadata = {
  title: "Results Summary Component - Frontend Mentor - Nguyen Anh Tuan",
  description: "Results Summary Component - Frontend Mentor - Nguyen Anh Tuan",
};

type Props = PropsWithChildren;

export default function RootLayout({ children }: Props) {
  return (
    <html lang="en">
      <body className={mainFont.className}>{children}</body>
    </html>
  );
}
