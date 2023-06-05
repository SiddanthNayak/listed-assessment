import "./globals.css";
import { lato, montserrat, open_sans } from "./fonts";
import { Provider } from "./components/Provider";

export const metadata = {
  name: "viewport",
  title: "Listed - Siddanth Nayak",
  description: "Assessment by Listed - submitted by Siddanth Nayak",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${lato.variable} ${montserrat.variable} ${open_sans.variable}`}
    >
      <body>
        <Provider>{children}</Provider>
      </body>
    </html>
  );
}
