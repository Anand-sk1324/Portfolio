import "./globals.css";
import { Raleway } from "next/font/google";
import { Podkova } from "next/font/google";

const raleway = Raleway({
  subsets: ["latin"],
  variable: "--font-raleway",
});

const podkova = Podkova({
  subsets: ["latin"],
  variable: "--font-podkova",
});

export const metadata = {
  title: "Karthick Anandan",
  icon: "/icon.svg",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`dark:bg-slate-950 dark:text-slate-100 
          ${raleway.variable}
          ${podkova.variable}
          font-raleway
          `}
      >
        {children}
      </body>
    </html>
  );
}
