"use client";

import { persistor, store } from "@/redux/store";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import MainLoader from "../MainLoader/MainLoader";
import { SessionProvider } from "next-auth/react";

export default function Layouts({ children }: { children: React.ReactNode }) {
  return (
    <SessionProvider>
      <Provider store={store}>
        <PersistGate loading={<MainLoader />} persistor={persistor}>
          {children}
        </PersistGate>
      </Provider>
      ;
    </SessionProvider>
  );
}
