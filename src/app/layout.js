import { Geist, Geist_Mono } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "اکران - سرویس اشتراک ویدیو",
  description: "اکران پلتفرم اشتراک گذاری فیلم و ویدیو می باشد.",
  keywords: ["پلتفرم اشتراک گذاری ویدئو", "اکران فیلم"],
  openGraph: {
    title: "اکران - سرویس اشتراک ویدیو",
    description: "اکران پلتفرم اشتراک گذاری فیلم و ویدیو می باشد.",
    url: "https://ekran.com",
    siteName: "ekran.com",
    images: [
      {
        url: "/images/1.png",
        width: 800,
        height: 600,
      },
    ],
    locale: "fa_IR",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="fa" dir="rtl">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <main>{children}</main>
        </ThemeProvider>
      </body>
    </html>
  );
}
