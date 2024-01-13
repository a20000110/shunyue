import { ReactNode } from "react";
import HeaderComponents from "@/components/Header";
import Footer from "@/components/Footer";

export const AppLayout = ({ children }: { children: ReactNode }) => {
    return (
        <main className="min-h-[100vh] font-SGB">
            <HeaderComponents />
            {children}
            <Footer />
        </main>
    );
};
