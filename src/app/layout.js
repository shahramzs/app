import { Geist, Geist_Mono } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";
import localFont from "next/font/local";

const medium = localFont({
  src: "../../public/fonts/IRANSans_Medium.ttf",
});

const light = localFont({
  src: "../../public/fonts/IRANSans_Light.ttf",
});

const ultraLight = localFont({
  src: "../../public/fonts/IRANSans_UltraLight.ttf",
});

const black = localFont({
  src: "../../public/fonts/IRANSans_Black.ttf",
});

const iranSans = localFont({
  src: "../../public/fonts/IRANSans.ttf",
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
        className={`${medium.className} ${light.className} ${ultraLight.className} ${iranSans.className} ${black.className} antialiased`}
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
