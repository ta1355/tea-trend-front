import type { Metadata } from "next";
import Sidebar from "@/components/Sidebar";
import Header from "@/components/Header";
import "./globals.css";
import { AuthProvider } from "./contexts/AuthContext";

export const metadata: Metadata = {
  title: "Tea Trend",
  description: "차 트렌드 분석 및 추천 플랫폼",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body>
        <div className="flex min-h-screen">
          <Sidebar />
          <div className="flex-1 flex flex-col">
            <Header />

            <main className="flex-1 p-6 lg:p-8 bg-tea-primary-50">
              <AuthProvider>
                <div className="max-w-7xl mx-auto">{children}</div>
              </AuthProvider>
            </main>
          </div>
        </div>
      </body>
    </html>
  );
}
