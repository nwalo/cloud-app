import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navigation } from "@/components/navigation";
import Container from "@/components/container";
import Footer from "@/components/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="scroll-smooth">
      <body className={inter.className}>
        <div className="flex min-h-screen w-full flex-col">
          <Container>
            <Navigation />
          </Container>
          <main>{children}</main>

          <Footer />
        </div>
      </body>
    </html>
  );
}
