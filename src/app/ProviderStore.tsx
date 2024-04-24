"use client";
import type { AppStore } from "@/redux/store";
import { makeStore } from "@/redux/store";
import type { ReactNode } from "react";
import { useRef } from "react";
import { Provider } from "react-redux";

interface Props {
  readonly children: ReactNode;
}

export const StoreProvider = ({ children }: Props) => {
  const storeRef = useRef<AppStore | null>(null);

  if (!storeRef.current) {
    storeRef.current = makeStore();
  }


  return <Provider store={storeRef.current}>{children}</Provider>;
};


