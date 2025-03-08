import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "../globals.css";
import LeftSideBar from "@/components/shared/LeftSideBar";
import RightSideBar from "@/components/shared/RightSideBar";
import BottomBar from "@/components/shared/BottomBar";
import TopBar from "@/components/shared/TopBar";
import { Inter } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";
import '../globals.css'; 

export const metadata = {
    title: "Threads",
    description: "A Next.js 13 Meta Threads Application"
};

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
    children
}: {
    children: React.ReactNode
}) {
    return (
       <ClerkProvider>
              <html lang="en">
      <body className={inter.className}>
        <TopBar />

        <main>
          <LeftSideBar />

          <section className="main-container">
            <div className="w-full max-x-4xl">
              {children}
            </div>
          </section>

          <RightSideBar />
        </main>
        
        <BottomBar />
      </body>
    </html>                         

       </ClerkProvider>
    );
}