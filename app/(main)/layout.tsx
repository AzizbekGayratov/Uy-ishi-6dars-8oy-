import React from "react";
// components
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-col min-h-screen justify-between">
      <Header />
      <main className="flex-grow">{children}</main>
      <Footer />
    </div>
  );
};

export default layout;
