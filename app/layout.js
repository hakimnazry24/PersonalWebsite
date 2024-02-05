import { Inter } from "next/font/google";
import "./globals.css";
import Header from '@/components/Header'



const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Hakim Nazri | Personal Website",
  description: "Hakim Nazri's website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="bg-gray-700 text-white">
      <body className={inter.className}>
        <Header></Header>
        {children}
        </body>
    </html>
  );
}
