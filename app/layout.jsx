import { JetBrains_Mono } from "next/font/google";
import "./globals.css";
//Coponents
import Header from "@/components/Header"
import PageTransition from "@/components/PageTransition";
import StairTransition from "@/components/StairEffect";

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  variable: '--font-jetbrainsMoni'
});

export const metadata = {
  title: "Lucas Piran - Portfolio",
  description: "Software Developer Portfolio - Web, Mobile and System Development",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={jetbrainsMono.variable}>
        <Header />
        <StairTransition/>
        <PageTransition>
          {children}
        </PageTransition>

      </body>
    </html>
  );
}
