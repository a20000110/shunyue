import { ReactNode } from "react";
import HeaderComponents from "@/components/Header";
import Footer from "@/components/Footer";
import Coupon from "@/components/Coupon";
import OnLineChat from "@/components/OnLineChat";

export const AppLayout = ({ children }: { children: ReactNode }) => {
  return (
    <main className="min-h-[100vh] font-SGB relative">
      <HeaderComponents />
      {children}
      <Footer />
      <Coupon />
      <OnLineChat />
    </main>
  );
};
