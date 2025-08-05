import { Poppins, Montserrat } from "next/font/google";

export const poppins = Poppins({
  variable: "--font-primary",
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
});
export const montserrat = Montserrat({
  variable: "--font-secondary",
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
});
