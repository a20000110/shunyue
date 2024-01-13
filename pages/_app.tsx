import "@/styles/globals.css";
import "remixicon/fonts/remixicon.css";
import { AppLayout } from "@/components/Layout";
import { ToastProvider } from "react-toast-notifications";
import React from "react";
import "animate.css";

function App({ Component, pageProps }: any) {
  return (
    // @ts-ignore
    <ToastProvider>
      <AppLayout>
        <Component {...pageProps} />
      </AppLayout>
    </ToastProvider>
  );
};

export default React.memo(App);
