import React from "react";
import Navbar from "./components/landing-page/navbar";
import "./global.css"; // Import global styles
import { UserProvider } from "./context/userContext";

export const metadata = {
  title: "TXUML",
  description: "A Under Ground Mine diagramming tool for software design",
};

export const dynamic = "force-dynamic";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <UserProvider>
      <body>
        <Navbar />
        {children}
      </body>
      </UserProvider>
    </html>
  );
}