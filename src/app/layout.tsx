import "./globals.css";
import type { Metadata } from "next";
import { Inter, Roboto_Mono } from "next/font/google";
import Content from "./_components/content";
import Footer from "./_components/footer";
import PrimaryNav from "./_components/primary-nav";
import ThemeWrapper from "./_components/theme-wrapper";

const roboto_mono = Roboto_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "sjs.dev",
  description: "Development portfolio for Spencer Simpson",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`overflow-y-scroll ${roboto_mono.className}`}>
        <ThemeWrapper>
          <PrimaryNav />
          <Content>{children}</Content>
          <Footer />
        </ThemeWrapper>
      </body>
    </html>
  );
}
