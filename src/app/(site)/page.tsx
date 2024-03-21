import { Metadata } from "next";
import Hero from "@/src/components/Hero";
import { headers } from "next/headers";

import { cookieToInitialState } from "wagmi";

import { config } from "../config";
import Web3ModalProvider from "../context/ProviderWeb3Modal";
export const metadata: Metadata = {
  title: "Kryptomerch",
  description: "Nft marketplace",
  // other metadata
};

export default function Home() {
  const initialState = cookieToInitialState(config, headers().get("cookie"));

  return (
    <main>
      {/* <Web3ModalProvider initialState={initialState}> */}
        <Hero />
      {/* </Web3ModalProvider> */}
    </main>
  );
}
